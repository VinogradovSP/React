import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.top}>
      <p>MY FIRST CHAT</p>
      <div className={styles.top_link}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chat</Link>
      </div>
    </div>
  );
};
