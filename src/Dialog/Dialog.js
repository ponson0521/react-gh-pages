import React from 'react';
import FancyBorder from './FancyBorder';

const Dialog = ({color, title, message}) => {
    // 透過特別化使用上層傳來的不同props調控CSS
    return (
        <FancyBorder color={color}>
            <h1 className="Dialog-title">{title}</h1>
            <p className="Dialog-message">{message}</p>
        </FancyBorder>
    );
}

export default Dialog;
