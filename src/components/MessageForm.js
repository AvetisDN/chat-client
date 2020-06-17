import React, {useState} from 'react';
import Input from './form/Input';
import Button from './form/Button';
import {ROOM_MESSAGE} from '../actions';

const MessageForm = ( {roomID} ) => {
    const [messageData, setMessageData] = useState({
        name: '',
        message: ''
    })
    const {name, message} = messageData;

    const changeInput = ({target}) => {
        const {name, value} = target;
        setMessageData({
            ...messageData,
            [name]: value
        })
    }

    const submitMessage = (e) => {
        e.preventDefault();
        if(!name || !message) return false;

        ROOM_MESSAGE(messageData, roomID);
        setMessageData({
            ...messageData,
            message: ''
        })
    }

    return (
        <form onSubmit={submitMessage}>
            <div>
                <Input label='Name: ' name='name' placeholder='Name' onChange={changeInput} value={name} />
            </div>
            <div>
                <Input label='Message: ' name='message' placeholder='Message text' onChange={changeInput} value={message} />
            </div>
            <div>
                <Button label='Send' type='submit' />
            </div>
        </form>
    )
}

export default MessageForm;