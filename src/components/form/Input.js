import React from 'react';

const Input = ({label, ...props}) => (
    <div>
        {label && 
            <label>
                {label}
            </label>
        }
        <input type='text' {...props}/>
    </div>
)

export default Input;