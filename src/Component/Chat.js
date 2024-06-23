import React, { useEffect, useState } from 'react';
import './ChatPage.css';
import { FaUserCircle, FaCog, FaEnvelope } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

export default function Chat() {
    const [fullName, setfullName] = useState('');

    useEffect(() => {
        const storedfullName = localStorage.getItem('fullName');
        if (storedfullName) {
            setfullName(storedfullName);
        }
    }, []);

    const contacts = [
        { name: 'Sasmita Poudel', message: 'I miss you, Call me...', status: 'online' },
        { name: 'Mamata Subedi', message: 'Amazing work!', status: 'offline' },
        { name: 'Prakriti Baral', message: 'Good job 😊😊', status: 'online' },
        { name: 'Soya Thapa', message: 'Hello, Are you there?', status: 'online' },
        { name: 'Tshering Gurung', message: 'Please check my ...', status: 'offline' },
    ];

    return (
        <div className="chat-page">
            <div className="sidebar">
                <div className="profile">
                    <img src="https://th.bing.com/th/id/R.d297ad745970bc9b3f6c3673a2f1773d?rik=Lp3JEtw%2f6edC5w&pid=ImgRaw&r=0" alt="Profile" className="profile-pic" />
                    <h4>{fullName}Monika Thapa</h4> {/* Display the logged-in user's name */}
                </div>
                <div className="contacts">
                    {contacts.map((contact, index) => (
                        <div key={index} className="contact">
                            <img src="https://th.bing.com/th/id/R.d297ad745970bc9b3f6c3673a2f1773d?rik=Lp3JEtw%2f6edC5w&pid=ImgRaw&r=0" alt="Contact" className="contact-pic" />
                            <div className="contact-info">
                                <h5>{contact.name}</h5>
                                <p>{contact.message}</p>
                            </div>
                            <span className={`status ${contact.status}`}></span>
                        </div>
                    ))}
                </div>
                <div className="settings">
                    <FaUserCircle />
                    <FaCog />
                    <FaEnvelope />
                    <MdLogout />
                </div>
            </div>
            <div className="chat-window">
                <div className="chat-header">
                    <img src="https://th.bing.com/th/id/R.d297ad745970bc9b3f6c3673a2f1773d?rik=Lp3JEtw%2f6edC5w&pid=ImgRaw&r=0" alt="Soya Thapa" className="chat-header-pic" />
                    <div className="chat-header-info">
                        <h5>Soya Thapa</h5>
                        <span className="status online"></span> <span>online</span>
                    </div>
                </div>
                <div className="chat-messages">
                    <div className="message">
                        <div className="message-content">Where are you?</div>
                        <div className="message-time">06-09 14:24 PM</div>
                    </div>
                    <div className="message reply">
                        <div className="message-content">Living room...</div>
                        <div className="message-time">06-09 14:24 PM</div>
                    </div>
                    <div className="message">
                        <div className="message-content">
                            Hey, I want to show you some amazing photos.
                            <div className="message-images">
                                <img src="photo1-url" alt="Photo1" />
                                <img src="photo2-url" alt="Photo2" />
                            </div>
                        </div>
                        <div className="message-time">06-10 10:26 AM</div>
                    </div>
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type something to send..." />
                    <button className="send-button">Send</button>
                </div>
            </div>
            <div className="profile-section">
                <img src="https://th.bing.com/th/id/R.d297ad745970bc9b3f6c3673a2f1773d?rik=Lp3JEtw%2f6edC5w&pid=ImgRaw&r=0" alt="Soya Thapa" className="profile-section-pic" />
                <h4>Soya Thapa</h4>
                <p>UI/UX Designer</p>
                <div className="profile-info">
                    <p><i className="fa fa-map-marker"></i> Pokhara, Nepal</p>
                    <p><i className="fa fa-envelope"></i> star666@qq.com</p>
                    <p><i className="fa fa-birthday-cake"></i> April 25, 1990</p>
                    <p><i className="fa fa-phone"></i> 9806754688</p>
                    <p><i className="fa fa-instagram"></i> Instagram activity</p>
                    <img src="https://th.bing.com/th/id/R.231fb0e0eb4d2ee8b7582ff04a92f779?rik=2yiHFlYAZogHmQ&pid=ImgRaw&r=0" alt="Instagram" className="instagram-photo" />
                </div>
            </div>
        </div>
    );
}