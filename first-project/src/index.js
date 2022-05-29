import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage } from "./pages";
import { Header } from "./components";
import styles from "./pages/page.module.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<h1 className={styles.chatText}>Home Page</h1>}
        />
        <Route path="/chat/*" element={<ChatPage />} />
        <Route
          path="/*"
          element={<h1 className={styles.chatText}>404 page</h1>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// <Layout header={<Header />} chats={<ChatList />} messages={<App />} />;
