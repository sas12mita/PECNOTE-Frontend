  
import React, { useState } from 'react';
import ChatbotToggler from './ChatbotToggler';
import Chatbox from './Chatbox';
import ChatInput from './ChatInput';
import './Chatbot.css';


export default function Chatbot() {    
      const [isChatbotVisible, setIsChatbotVisible] = useState(false);
      const [messages, setMessages] = useState([
        { content: 'Hi there 👋\nHow can I help you today?', sender: 'bot' }
      ]);
    
      const toggleChatbot = () => setIsChatbotVisible(!isChatbotVisible);
    
      const handleSendMessage = async (userMessage) => {
        if (!userMessage.trim()) return;
    
        const newMessages = [...messages, { content: userMessage, sender: 'user' }];
        setMessages(newMessages);
    
        const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
        const API_URL = 'https://api.openai.com/v1/chat/completions';
    
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
          })
        };
    
        setMessages([...newMessages, { content: 'Thinking...', sender: 'bot' }]);
    
        try {
          const response = await fetch(API_URL, requestOptions);
          const data = await response.json();
          const botMessage = data.choices[0].message.content.trim();
          setMessages([...newMessages, { content: botMessage, sender: 'bot' }]);
        } catch (error) {
          setMessages([...newMessages, { content: 'Oops! Something went wrong. Please try again.', sender: 'bot', error: true }]);
        }
      };
    
      return (
        <div>
          <ChatbotToggler toggleChatbot={toggleChatbot} isChatbotVisible={isChatbotVisible} />
          {isChatbotVisible && (
            <div className="chatbot">
              <header>
                <h2>Chatbot</h2>
                <span className="close-btn material-symbols-outlined" onClick={toggleChatbot}>close</span>
              </header>
              <Chatbox messages={messages} />
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          )}
        </div>

  )
}
