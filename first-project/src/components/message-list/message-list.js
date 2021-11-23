import React, { useEffect, useRef, useState } from "react";
import { Message } from "./message";
import { ChatList } from "./ChatList";
import { Heading } from "./Heading";
import styles from "./message/index.module.css";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const refAuthor = useRef(null);
  const refText = useRef(null);
  const refScroll = useRef(null);

  useEffect(() => {
    if (refScroll.current) {
      refScroll.current.scrollTo(0, refScroll.current.scrollHeight);
    }
  }, [messageList]);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            date: new Date().toLocaleTimeString(),
            author: "Bot",
            text: `Hello ${lastMessage.author.toUpperCase()}, how can I help you?`,
          },
        ]);
      }, 1500);
    }
    return () => clearInterval(timerId);
  }, [messageList]);

  useEffect(() => {
    refAuthor.current?.focus();
  }, []);

  const addMessage = () => {
    if (author && text) {
      setMessageList([
        ...messageList,
        { author: author, text: text, date: new Date().toLocaleTimeString() },
      ]);
      setAuthor("");
      setText("");
    }
  };

  const handlePressInputAuthor = ({ code }) => {
    if (code === "Enter") {
      refText.current?.focus();
    }
  };

  const handlePressInputText = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
    refAuthor.current?.focus();
  };

  return (
    <div className={styles.contaner}>
      <div className={styles.messageHead}>
        <Heading />
        <div className={styles.messageDiv} ref={refScroll}>
          {messageList.map((message) => (
            <Message message={message} key={message.date} />
          ))}
        </div>
        <ChatList />
        <div className={styles.messageFutter}>
          <input
            ref={refAuthor}
            placeholder="enter your name ..."
            onKeyPress={handlePressInputAuthor}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            value={author}
          />

          <input
            ref={refText}
            placeholder="enter a message ..."
            onKeyPress={handlePressInputText}
            onChange={(event) => {
              setText(event.target.value);
            }}
            value={text}
          />
          <button onClick={addMessage}>addMessage</button>
        </div>
      </div>
    </div>
  );
};
