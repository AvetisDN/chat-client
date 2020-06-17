import React, { Component } from 'react';

import { ROOM_FETCH } from '../actions';
import connection from '../lib/socket';

import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

let subscription;

class Room extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        connection.connect();
        subscription = connection.subscribe(`room:${this.props.id}`, this.onAddMessage)

        this.fetchMessages();
    }

    componentWillUnmount() {
        subscription.close();
    }

    onAddMessage = (message) => {
        const {type, data} = message;

        switch(type) {
            case 'room:newMessage': 
                this.setState( (prevState) => ({
                    messages: [...prevState.messages, data]
                }) );
                break;
            default:
        }
    }

    fetchMessages = async () => {
        try {
            const room = await ROOM_FETCH(this.props.id)
            this.setState({
                messages: room.messages
            })
        } catch(e) {
            this.props.history.push('/')
        }
    }

    render() {
        const {messages} = this.state;
        const {id} = this.props;

        return (
            <div>
                <MessageList data={messages}/>
                <MessageForm roomID={id}/>
            </div>
        )
    }
}

export default Room;