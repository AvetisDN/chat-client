import React from 'react';

import MessageItem from './MessageItem'

const MessageList = ( {data} ) => (
    <div>
        {data.map(message => (
            <div key={message.id}>
                <MessageItem data={message}/>
            </div>
        ))}
    </div>
)

export default MessageList;