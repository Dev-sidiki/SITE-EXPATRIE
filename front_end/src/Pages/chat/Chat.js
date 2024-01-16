import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import AccueilMenu from "../../Components/menus/AccueilMenu";
import LeftBar from "../../Components/leftbar/LeftBar";
import Conversation from "../../Components/conversation/Conversation";
import Message from "../../Components/message/Message";
import "../../Styles/css/chat.css";
import RightBar from "../../Components/rightbar/RightBar";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [user, setUser] = useState([]);
  const scrollRef = useRef();
  return (
    <>
      <AccueilMenu />
      <div className="acceuilContainer">
        <LeftBar />
        <div className="messenger">
          <div className="chatBox">
            <div className="chatBoxWrapper">
              {currentChat ? (
                <>
                  <div className="chatBoxTop">
                    {messages.map((m) => (
                      <div ref={scrollRef}>
                        <Message message={m} own={m.sender === user._id} />
                      </div>
                    ))}
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      className="chatMessageInput"
                      placeholder="write something..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>
                    <button className="chatSubmitButton">Send</button>
                  </div>
                </>
              ) : (
                <span className="noConversationText">
                  Open a conversation to start a chat.
                </span>
              )}
            </div>
          </div>
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input
                placeholder="Search for friends"
                className="chatMenuInput"
              />
              {conversations.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversation={c} currentUser={user} />
                </div>
              ))}
            </div>
          </div>
          <div className="chatOnline">
            <div className="chatOnlineWrapper">
              {/* <ChatOnline
                onlineUsers={onlineUsers}
                currentId={user._id}
                setCurrentChat={setCurrentChat}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
