import { useState, useRef, useEffect } from 'react';

import styles from './MessagesPage.module.css'

import arrow_button from '../../assets/lime_send_arrow.svg';
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

function UserInput({inputValue, onChange, onSend}) {
  return (
    <div id='user-input' className={`${styles['user-input']}`}>
      <textarea
        id='user-input-textarea'
        rows={2}
        placeholder="Type a message..."
        spellCheck={true}
        value={inputValue}
        onChange={onChange}
        onKeyDown={(event) => {
          if(event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            onSend();
          }
        }}
        style={{ width: '100%', resize: 'none'}}
      />
      <button onClick={onSend} className={`${styles['submit-button']}`}>
        <img src={arrow_button}/>
      </button>
    </div>
  )
}

function ChatMessages({messages}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [messages])

  return (
    <div id='chat-messages' className={`${styles['chat-messages']} fdm-stack`}>
      {messages.map((message, index) => (
        <div key={index} className={styles['user-message']}>
          <p>{message}</p>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}

function ChatContent() {
  const [messages, setMessages] = useState([]);
  const [input, setUserInput] = useState("");

  const handleUserInput = () => {
    if(!input.trim()) return;
    setMessages([...messages, input]);
    setUserInput("");
  }

  return(
    <div id='chat-content' className={`${styles['chat-content']} fdm-panel-2`}>
      <ChatMessages messages={messages}/>
      <UserInput
        inputValue={input}
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
    <div id='messages-page' className={`${styles['messages-page']} fdm-container fdm-panel`}>
      <SearchBar />
      <MainContent />
    </div>
  )
}
