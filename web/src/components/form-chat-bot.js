import React from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget'
import config from '../../config.json'
import 'react-chat-widget/lib/styles.css'
import './form-chat-bot.scss'
import io from 'socket.io-client'

const socket = io('https://marmt-gcp.appspot.com')

class FormChatBot extends React.Component {
    constructor(props) {
        super(props)
        this.messageInput = React.createRef();

        socket.on('sms message', (sms) => this.handleAddResponseMessage(sms));

        this.state = {
            normalHours: true
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

        // check if normal busines hours
        const normalBizHours = this.checkWorkingHours()
        if (normalBizHours) {
            console.log('true')
        }

        if (!normalBizHours && this.state.normalHours) {
            console.log('false')
            addResponseMessage('Sorry, it\'s outside of our normal business hours, I might not be able to respond.')
            addResponseMessage('Just in case, please leave your name and phone number or email and and I\'ll contact you asap! Thanks.')
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
                    message: newMessage
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error(error));
        
    }

    handleAddResponseMessage = (response) => {
        addResponseMessage(response.toString())
    }

    componentDidMount() {
        addResponseMessage("Hi I'm Ted, the owner of Rock Solid, how can I assist you?!");
    }

    render() {
        return (

            <div className="App">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    profileAvatar={'https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg'}
                    title="Welcome to Rock solid!"
                    subtitle="Open M-F, 8-5PM"
                />
            </div>

        )
    }
}

export default FormChatBot