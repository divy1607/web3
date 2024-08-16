import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/chat">Chat</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
