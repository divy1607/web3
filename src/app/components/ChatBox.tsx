import React, { useState } from 'react';
import { Message } from '../types/Message';
import { sendMessage } from '../utils/peerConnection';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const message: Message = { text: input, timestamp: new Date().toISOString() };
      sendMessage(message);
      setMessages([...messages, message]);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBox;
