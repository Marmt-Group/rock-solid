import React from 'react'
import { Launcher } from 'react-chat-window'
import config from '../../config.json'
import './form-chat-bot.scss'
import io from 'socket.io-client'
//TODO: set up socket jwt with connect, disconnect on the server
const socket = io('https://marmt-gcp.appspot.com')

class FormChatBot extends React.Component {
    constructor(props) {
        super(props)
        this.messageInput = React.createRef();

        socket.on('sms message', (sms) => this.handleAddResponseMessage(sms.toString()));

        this.state = {
            normalHours: true,
            messageList: []
        }
    }

    checkWorkingHours = () => {
        // Check what day of the week and time it is
        const now = new Date(),
            day = now.getDay(),
            hours = now.getHours();

        //Check if day is Mon-Fri
        if (0 < day && day <= 5) {
            //check between 9am and 5pm
            if (9 <= hours && hours <= 17) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    handleNewUserMessage = (newMessage) => {

        this.setState({
            messageList: [...this.state.messageList, newMessage]
        })

        // check if normal business hours
        const normalBizHours = this.checkWorkingHours()
        if (normalBizHours) {
            console.log('true')
        }

        if (!normalBizHours && this.state.normalHours) {
            console.log('false')
            // addResponseMessage('Sorry, it\'s outside of our normal business hours, I might not be able to respond.')
            // addResponseMessage('Just in case, please leave your name and phone number or email and and I\'ll contact you asap! Thanks.')
            this.setState({ normalHours: false })
        }
        
        fetch('https://marmt-gcp.appspot.com/chat', {
            method: 'POST',
            body: JSON.stringify(
                {
                    query: {
                        fromNumber: '+18312469107',
                        toNumber: '+14084022790',
                        twilioAccountSid: config.twilioAccountSid,
                        twilioAuthToken: config.twilioAuthToken
                    },
                    message: newMessage.data.text
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error(error));
        
    }

    handleAddResponseMessage = (text) => {
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

    render() {
        return (

            <div className="App">
                <Launcher
                    agentProfile={{
                        teamName: 'react-chat-window',
                        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                    }}
                    onMessageWasSent={this.handleNewUserMessage}
                    messageList={this.state.messageList}
                    showEmoji
                />
            </div>

        )
    }
}

export default FormChatBot