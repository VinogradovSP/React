import { Link, useParams } from "react-router-dom";
import styles from "./ChatList.module.css";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const { roomId } = useParams();
  const [chats] = useState(["room1", "room2", "room3"]);

  return (
    <div className={styles.chatListDiv}>
      {chats.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} />
        </Link>
      ))}
    </div>
  );
};
