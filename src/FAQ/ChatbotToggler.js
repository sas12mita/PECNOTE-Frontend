import React from 'react'

export default function ChatbotToggler({ toggleChatbot, isChatbotVisible }) {
  return (
    <div>
    <button className="chatbot-toggler" onClick={toggleChatbot}>
    <span className="material-symbols-rounded">mode_comment</span>
    <span className="material-symbols-outlined">close</span>
  </button>
    </div>
  )
}
