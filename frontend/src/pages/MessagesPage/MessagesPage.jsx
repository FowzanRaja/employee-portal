import { useState } from 'react';

import styles from './MessagesPage.module.css'

import arrow_button from '../../assets/black_send_arrow.svg';
// TODO: Draw a personal wireframe of what you will try and make the page look like. Split it up into components and build the page!

const chats = [
  {
    name: "Harry Harry",
    profilePicPath: ""
  },
  {
    name: "Peter Parker",
    profilePicPath: ""
  },
  {
    name: "Bruce Bayne",
    profilePicPath: ""
  },
  {
    name: "Ava Thompson",
    profilePicPath: "",
  },
  {
    name: "Ana Hathaway",
    profilePicPath: ""
  },
  {
    name: "Ana Hathaway",
    profilePicPath: ""
  },
  {
    name: "Ana Hathaway",
    profilePicPath: ""
  },
  {
    name: "Ana Hathaway",
    profilePicPath: ""
  },
  {
    name: "Ana Hathaway",
    profilePicPath: ""
  },
  {
    name: "Ana Hathaway",
    profilePicPath: ""
  },
  {
    name: "Ana Hathaway",
    profilePicPath: ""
  }

]

function Message() {
  return (
    <div id='message'>
    
    </div>
  )
}

function SearchBar() {
  return (
    <div id='search-bar' className={`${styles['search-bar']} fdm-section-title fdm-panel-2`}>
      <h1>Search Bar Content</h1>
    </div>
  )
}

function UserInput({value, onChange, onSend}) {
  document.getElementById("user-input-textarea").addEventListener("keypress", event => {
    if(event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
    }
  })

  return (
    <div id='user-input' className={`${styles['user-input']}`}>
      <textarea
        id='user-input-textarea'
        rows={2}
        placeholder="Type a message..."
        spellCheck={true}
        value={value}
        onChange={onChange}
        onSubmit={onSend}
        style={{ width: '100%', resize: 'none'}}
      />
      <button className={`${styles['submit-button']}`} onClick={onSend}>
        <img src={arrow_button} style={{width: '25px', height: '25px'}}/>
      </button>
    </div>
  )
}

function ChatMessages({messages}) {
  return (
    <div id='chat-messages' className={`${styles['chat-messages']}`}>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  )
}

function ChatContent() {
  const [messages, setMessages] = useState([]);
  const [input, setUserInput] = useState("");

  const handleUserInput = () => {
    if(!input.trim()) return;
    setMessages([...messages, input]);
    setInputValue("");
  }

  return(
    <div id='chat-content' className={`${styles['chat-content']} fdm-panel-2`}>
      <ChatMessages messages={messages}/>
      <UserInput
        value={input}
        onChange={(event) => setUserInput(event.target.value)}
        onSend={handleUserInput}
      />
    </div>
  )
}

function Chat({name, profilePic}) {
  return (
    <div id='chat' className={`${styles['chat']}`}>
      {profilePic ? (
      <img src={profilePic} alt={name[0]} className={`${styles['profile-pic']}`}></img>
      ) : (
      <p className={`${styles['profile-pic']}`}>{name[0]}</p>
      )}
      <h2>{name}</h2>
    </div>
  )
}

function ChatSideBar() {
  return (
    <div id='chat-side-bar' className={`${styles['chat-side-bar']} fdm-panel-2`}>
      {chats.map((chat, index) => (
        <Chat name={chat.name} profilepic={chat.profilePicPath} />
      ))}
    </div>
  )
}

function MainContent() {
  return (
    <div id='main-content' className={`${styles['main-content']}`}>
      <ChatSideBar />
      <ChatContent />
    </div>
  )
}

export default function MessagesPage() {
  return (
    <div id='messages-page' className={`${styles['messages-page']} fdm-container`}>
      <SearchBar />
      <MainContent />
    </div>
  )
}
