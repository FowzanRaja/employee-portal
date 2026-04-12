import { useState, useRef, useEffect } from 'react';

import styles from './MessagesPage.module.css'

import arrow_button from '../../assets/lime_send_arrow.svg';
// TODO: 
// Show how a message looks like from the other person.
// Need timestamps for messages.
// Add padding to the text box + type box so it's not touching the edge.
// Add search bar + name at the top.

const currentUserId = 'user_123';

const mockChats = [
  {
    name: "Harry Harry",
    profilePicPath: "",
    messages: [
      { text: "Hey!", timeStamp: "10/04/2026 - 09:00", isCurrentUser: false},
      { text: "Hi there!", timeStamp: "10/04/2026 - 09:01", isCurrentUser: true }
    ],
    id: 1
  },
  {
    name: "Peter Parker",
    profilePicPath: "",
    messages: [
      { text: "Hey!", timeStamp: "10/04/2026 - 09:00", isCurrentUser: false},
      { text: "Hi there!", timeStamp: "10/04/2026 - 09:01", isCurrentUser: true }
    ],
    id: 2
  },
  {
    name: "Bruce Bayne",
    profilePicPath: "",
    messages: [
      { text: "Hey!", timeStamp: "10/04/2026 - 09:00", isCurrentUser: false},
      { text: "Hi there!", timeStamp: "10/04/2026 - 09:01", isCurrentUser: true }
    ],
    id: 3
  },
  {
    name: "Ava Thompson",
    profilePicPath: "",
    messages: [
      { text: "Hey!", timeStamp: "10/04/2026 - 09:00", isCurrentUser: false},
      { text: "Hi there!", timeStamp: "10/04/2026 - 09:01", isCurrentUser: true }
    ],
    id: 4
  },
  {
    name: "Ana Hathaway",
    profilePicPath: "",
    messages: [
      { text: "Hey!", timeStamp: "10/04/2026 - 09:00", isCurrentUser: false},
      { text: "Hi there!", timeStamp: "10/04/2026 - 09:01", isCurrentUser: true }
    ],
    id: 5
  }
]

function SearchBar() {
  return (
    <div id='search-bar' className={`${styles['search-bar']} fdm-section-title fdm-panel-2`}>
      <h1>Search Bar Content</h1>
    </div>
  )
}

function UserInput({inputValue, onChange, onSend}) {
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    const textarea = textareaRef.current;

    // Get computed styles of the textarea
    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const maxRows = 4;
    const maxHeight = lineHeight * maxRows;

    textarea.style.height = 'auto';

    if(textarea.scrollHeight < maxHeight){
      textarea.style.height = textarea.scrollHeight + 'px';
    } else {
      textarea.style.height = maxHeight + 'px';
      textarea.style.overflowY = 'auto';
    }
  }

  return (
    <div id='user-input' className={`${styles['user-input']}`}>
      <textarea
        id='user-input-textarea'
        rows={1}
        placeholder="Type a message..."
        spellCheck={true}
        value={inputValue}
        onChange={onChange}
        onInput={handleInput}
        onKeyDown={(event) => {
          if(event.key === 'Enter' && !event.shiftKey) {
            const textarea = textareaRef.current;

            event.preventDefault();
            onSend();
            textarea.style.height = 'auto';
          }
        }}
        ref={textareaRef}
        style={{ width: '100%', resize: 'none'}}
      />
      <button className={`${styles['submit-button']}`} onClick={(event) => {
        const textarea = textareaRef.current;

        onSend();
        textarea.style.height = 'auto';
      }}>
        <img src={arrow_button}/>
      </button>
    </div>
  )
}

function ChatMessages({messages}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <div id='chat-messages' className={`${styles['chat-messages']} fdm-stack`}>
      {messages.map((message, index) => (
        <div key={index} className={styles['user-message']}>
          <span>{message.timeStamp}</span>
          <p>{message.text}</p>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}

function ChatContent({ selectedChat, setSelectedChat, chats, setChats}) {
  const [input, setUserInput] = useState("");

  const getTimeStamp = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hour = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} - ${hour}:${minutes}`
  }

  const handleUserInput = () => {
    if(!input.trim()) return;

    const newMessage = {
      text: input,
      timeStamp: getTimeStamp(),
      senderId: currentUserId
    }

    const updatedChat = {
      ...selectedChat,
      messages: [...selectedChat.messages, newMessage]
    }

    setChats(chats.map(chat => 
      chat.id === selectedChat.id ? updatedChat : chat
    ))

    setSelectedChat(updatedChat)

    setUserInput("");
  }

  return (
    <div id='chat-content' className={`${styles['chat-content']} fdm-panel-2`}>
      <ChatMessages messages={selectedChat?.messages || []} />
      <UserInput
        inputValue={input}
        onChange={(event) => setUserInput(event.target.value)}
        onSend={handleUserInput}
      />
    </div>
  )
}

function Chat({setSelectedChat, selectedChat, chat, index}) {
  const isSelected = selectedChat?.id === chat.id;

  return (
    <button id='chat' className={`${styles['chat']} ${isSelected ? styles['chat-selected'] : ''}`} key={index} onClick={() => {
      if (isSelected) return;
      setSelectedChat(chat);
    }}>
      {chat.profilePicPath ? (
      <img src={chat.profilePicPath} alt={chat.name[0]} className={`${styles['profile-pic']}`}></img>
      ) : (
      <p className={`${styles['profile-pic']}`}>{chat.name[0]}</p>
      )}
      <h2>{chat.name}</h2>
    </button>
  )
}

function ChatSideBar({ chats, selectedChat, setSelectedChat }) {
  return (
    <div id='chat-side-bar' className={`${styles['chat-side-bar']} fdm-panel-2`}>
      {chats.map((chat, index) => (
        <Chat setSelectedChat={setSelectedChat} selectedChat={selectedChat} chat={chat} index={index} key={index}/>
      ))}
    </div>
  )
}

function MainContent({ chats, setChats, selectedChat, setSelectedChat }) {
  return (
    <div id='main-content' className={`${styles['main-content']}`}>
      <ChatSideBar chats={chats} selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
      <ChatContent selectedChat={selectedChat} setSelectedChat={setSelectedChat} chats={chats} setChats={setChats}/>
    </div>
  )
}

export default function MessagesPage() {
  const [chats, setChats] = useState(mockChats);
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div id='messages-page' className={`${styles['messages-page']} fdm-container fdm-panel`}>
      <SearchBar />
      <MainContent chats={chats} setChats={setChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
    </div>
  )
}
