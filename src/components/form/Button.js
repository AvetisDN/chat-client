import React from 'react';

const Button = ({label, ...props}) => (
    <button {...props}>{label}</button>
)

export default Button;