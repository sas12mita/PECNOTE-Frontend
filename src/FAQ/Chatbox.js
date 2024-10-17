// src/FAQ/Chatbox.js
import React from 'react'

export default function Chatbox(messages) {
  return (
    <ul className="chatbox">
    {messages.map((msg, index) => (
      <li key={index} className={`chat ${msg.sender === 'user' ? 'outgoing' : 'incoming'}`}>
        {msg.sender === 'bot' && <span className="material-symbols-outlined">smart_toy</span>}
        <p className={msg.error ? 'error' : ''}>{msg.content}</p>
      </li>
    ))}
  </ul>
  )
}
