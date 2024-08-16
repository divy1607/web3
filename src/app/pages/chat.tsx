import React from 'react';
import ChatBox from '../components/ChatBox';
import Navbar from '../components/Navbar';

const Chat: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ChatBox />
    </div>
  );
};

export default Chat;
