import React, { useState } from "react";
import styles from "./ChatList.module.css";

export const ChatList = () => {
  const [chats] = useState([
    { id: 1, title: "Chat-1", description: "Hey" },
    { id: 2, title: "Chat-2", description: "Hey" },
    { id: 3, title: "Chat-3", description: "Hey" },
    { id: 4, title: "Chat-4", description: "Hey" },
  ]);

  return (
    <div className={styles.chatListDiv}>
      {chats.map((chat) => (
        <div className={styles.chatListPhoto} key={chat.id}>
          <div className={styles.photo}></div>
          <div className={styles.photoText}>
            <p> {chat.title} </p>
            <p> {chat.description} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
