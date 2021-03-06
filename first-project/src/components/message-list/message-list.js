import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "./message";
import styles from "./message/index.module.css";

export const App = () => {
  const { roomId } = useParams();
  const [messageList, setMessageList] = useState({});
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
    const roomMessages = messageList[roomId] ?? [];
    const lastMessage = roomMessages[roomMessages.length - 1];
    let timerId = null;

    if (roomMessages.length && lastMessage.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              author: "Bot",
              text: `Hello ${lastMessage.author.toUpperCase()}, how can I help you?`,
              date: new Date().toLocaleTimeString(),
            },
          ],
        });
      }, 1500);
    }
    return () => clearInterval(timerId);
  }, [messageList, roomId]);

  useEffect(() => {
    refAuthor.current?.focus();
  }, []);

  const addMessage = () => {
    if (author && text) {
      setMessageList({
        ...messageList,
        [roomId]: [
          ...(messageList[roomId] ?? []),
          { author: author, text: text, date: new Date().toLocaleTimeString() },
        ],
      });
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

  const roomMessages = messageList[roomId] ?? [];

  return (
    <div className={styles.messageHead}>
      <div className={styles.messageDiv} ref={refScroll}>
        {roomMessages.map((message) => (
          <Message message={message} key={message.date} />
        ))}
      </div>
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
  );
};
