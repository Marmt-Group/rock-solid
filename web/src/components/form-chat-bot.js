import React from 'react'
import { Launcher } from 'react-chat-window'
import io from 'socket.io-client'
import './form-chat-bot.scss'
import checkWorkingHours from '../utils/checkWorkingHours'
import handleFetch from '../utils/fetch'

const socketUrl = process.env.GATSBY_SOCKET_URL
let socket

class FormChatBot extends React.Component {
    constructor(props) {
        super(props)
        this.messageInput = React.createRef();

        this.state = {
            normalHours: true,
            messageList: [],
            isOpen: false,
            firstChatSent: false,
            userName: ''
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })

        if (!socket || socket.disconnected) {
            this.handleSocketConnect()
        } else if (socket.connected) {
            this.handleSocketDisconnect()
        }
    }

    handleSocketConnect = () => {

        socket = io(socketUrl, {
            autoConnect: false,
        })

        socket.on('connect', () => {
            // console.log('Client has connected to the server!')
        });

        socket.on('sms message', (sms) => this.handleUserResponseMessage(sms.toString()))
        socket.on('added to que', this.handleAddedToQue)
        socket.on('now messaging', this.handleRemoveFromQue)

        socket.open()
        socket.emit('add to stack')
    }

    handleSocketDisconnect = () => {
        // console.log('Socket disconnected');
        // Post disconnect message to Ted
        handleFetch(`${socketUrl}/chat`, 'POST', {
            query: {
                connection: socket.id,
                fromNumber: process.env.GATSBY_TWILLIO_FROM_NUMBER,
                toNumber: process.env.GATSBY_TWILLIO_TO_NUMBER,
                twilioAccountSid: process.env.GATSBY_TWILIO_ACCOUNT_SID,
                twilioAuthToken: process.env.GATSBY_TWILIO_AUTH_TOKEN,
            },
            message: `${this.state.userName ? this.state.userName : 'User'} has left the chat.`
        })
        .then(() => {
            // remove socket
            socket.disconnect();
        })
        
    }

    handleAddedToQue = () => {
        this.handleUserResponseMessage(`Sorry ${this.state.userName}, we're chatting with another person, but wait, you're in que.`)
    }

    handleRemoveFromQue = () => {
        // Send message to Ted with next person on the chat
        handleFetch(`${socketUrl}/chat`, 'POST', {
            query: {
                connection: socket.id,
                fromNumber: process.env.GATSBY_TWILLIO_FROM_NUMBER,
                toNumber: process.env.GATSBY_TWILLIO_TO_NUMBER,
                twilioAccountSid: process.env.GATSBY_TWILIO_ACCOUNT_SID,
                twilioAuthToken: process.env.GATSBY_TWILIO_AUTH_TOKEN,
            },
            message: `Hi from Rock Solid Chat Bot, you're now in a live chat with ${this.state.userName}`
        })
        .then(() => {
            this.handleUserResponseMessage(`Thanks for waiting, how can I help you!?`)
        })
    }

    handleUserMessage = (newMessage) => {

        this.setState({
            messageList: [...this.state.messageList, newMessage]
        })

        // check if normal business hours
        const normalBizHours = checkWorkingHours()

        if (!normalBizHours && this.state.normalHours) {
            this.handleUserResponseMessage('Sorry, it\'s outside of our normal business hours, I might not be able to respond.')
            this.setState({ normalHours: false })
        }

        if (!this.state.firstChatSent) {
            this.setState({
                userName: newMessage.data.text,
                firstChatSent: true
            })
            // Post intro message to Ted
            handleFetch(`${socketUrl}/chat`, 'POST', {
                query: {
                    connection: socket.id,
                    fromNumber: process.env.GATSBY_TWILLIO_FROM_NUMBER,
                    toNumber: process.env.GATSBY_TWILLIO_TO_NUMBER,
                    twilioAccountSid: process.env.GATSBY_TWILIO_ACCOUNT_SID,
                    twilioAuthToken: process.env.GATSBY_TWILIO_AUTH_TOKEN,
                },
                message: `You are now in a chat with ${this.state.userName}`
            })
            // .then()
        } else {
            // Post message to Ted
            handleFetch(`${socketUrl}/chat`, 'POST', {
                query: {
                    connection: socket.id,
                    fromNumber: process.env.GATSBY_TWILLIO_FROM_NUMBER,
                    toNumber: process.env.GATSBY_TWILLIO_TO_NUMBER,
                    twilioAccountSid: process.env.GATSBY_TWILIO_ACCOUNT_SID,
                    twilioAuthToken: process.env.GATSBY_TWILIO_AUTH_TOKEN,
                },
                message: newMessage.data.text
            })
            // .then()
        }
        
        
    }

    handleUserResponseMessage = (text) => {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }

    componentWillMount() {
        this.handleUserResponseMessage('Hello, can I please have your name? And what can we help you with?')
    }

    render() {
        const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
        return (

            <div className="chatBot">
                <Launcher
                    agentProfile={{
                        // teamName: 'Hi, this is Ted, the owner!',
                        // imageUrl: 'https://media.licdn.com/dms/image/C5603AQFVGuceJJYdOA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=VW_CKlWbaOxp0k48QACNgN8nZIMVYIsecmuw10T7NWA'
                    }}
                    handleClick={this.handleClick}
                    onMessageWasSent={this.handleUserMessage}
                    messageList={this.state.messageList}
                    isOpen={isOpen}
                    showEmoji={false}
                />
            </div>

        )
    }
}

export default FormChatBot