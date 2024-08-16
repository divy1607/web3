import React from 'react';
import { Message as MessageType } from '../types/Message';

const Message: React.FC<{ message: MessageType }> = ({ message }) => {
  return (
    <div>
      <span>{message.timestamp}</span>
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
