import React, { useState } from 'react';
import './App.css';

export default function Widget({ propertyId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            Chat - {propertyId}
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => <div key={i}>{msg}</div>)}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message"
          />
        </div>
      )}
    </div>
  );
}
