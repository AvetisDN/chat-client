import React from 'react';

const MessageItem = ( {data} ) => {
    const {name, message} = data
    return (
        <div>
            <h4>
                {name}
            </h4>
            <div>
                {message}
            </div>
        </div>
    )
}

export default MessageItem;