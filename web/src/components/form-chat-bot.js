import React from 'react'
import { Launcher } from 'react-chat-window'
import io from 'socket.io-client'
import config from '../../config.json'
import './form-chat-bot.scss'
import checkWorkingHours from '../utils/checkWorkingHours'
import handleFetch from '../utils/fetch'

const socketUrl = 'https://bagged-goose-89973.herokuapp.com'
let socket

class FormChatBot extends React.Component {
    constructor(props) {
        super(props)
        this.messageInput = React.createRef();

        this.state = {
            normalHours: true,
            messageList: [],
            isOpen: false,
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
        socket.disconnect();
    }

    handleAddedToQue = () => {
        this.handleUserResponseMessage(`Sorry ${this.state.userName}, Ted is chatting with another person, but wait, you're in que.`)
    }

    handleRemoveFromQue = () => {
        // Send message to Ted with next person on the chat
        handleFetch(`${socketUrl}/chat`, 'POST', {
            query: {
                connection: socket.id,
                fromNumber: '+18312469107',
                toNumber: '+14084022790',
                twilioAccountSid: config.twilioAccountSid,
                twilioAuthToken: config.twilioAuthToken,
            },
            message: `Hi Ted, you're now in a chat with ${this.state.userName}`
        })
        .then(() => {
            this.handleUserResponseMessage(`Thanks for waiting, how can I help you!?`)
        })
    }

    handleUserMessage = (newMessage) => {

        this.setState({
            messageList: [...this.state.messageList, newMessage],
            userName: newMessage.data.text
        })

        // check if normal business hours
        const normalBizHours = checkWorkingHours()

        if (!normalBizHours && this.state.normalHours) {
            this.handleUserResponseMessage('Sorry, it\'s outside of our normal business hours, I might not be able to respond.')
            this.handleUserResponseMessage('Just in case, please leave your name and phone number or email and and I\'ll contact you asap! Thanks.')
            this.setState({ normalHours: false })
        }
        
        // Post message to Ted
        handleFetch(`${socketUrl}/chat`, 'POST', {
            query: {
                connection: socket.id,
                fromNumber: '+18312469107',
                toNumber: '+14084022790',
                twilioAccountSid: config.twilioAccountSid,
                twilioAuthToken: config.twilioAuthToken,
            },
            message: newMessage.data.text
        })
       // .then()
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
        this.handleUserResponseMessage('Can I please have your name?')
    }

    render() {
        const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
        return (

            <div className="App">
                <Launcher
                    agentProfile={{
                        teamName: 'Hi, this is Ted, the owner!',
                        imageUrl: 'https://media.licdn.com/dms/image/C5603AQFVGuceJJYdOA/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=VW_CKlWbaOxp0k48QACNgN8nZIMVYIsecmuw10T7NWA'
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