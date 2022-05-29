// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, ChatList, App } from "../components";
import styles from "./page.module.css";

export const ChatPage = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const listener = ({ code }) => {
  //     if (code === "Escape") {
  //       navigate("/chat");
  //     }
  //   };

  //   document.addEventListener("keydown", listener);

  //   return () => document.removeEventListener("keydown", listener);
  // }, [navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            chats={<ChatList />}
            messages={<h1 className={styles.chatText}>выберите чат ...</h1>}
          />
        }
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<ChatList />} messages={<App />} />}
      />
    </Routes>
  );
};
