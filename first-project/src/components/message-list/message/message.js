import styles from "./index.module.css";
import classnames from "classnames/bind";

let cx = classnames.bind(styles);

export const Message = ({ message }) => {
  const classN = cx("messageBlock", {
    messageBlockBot: message.author === "Bot",
  });
  return (
    <div className={classN}>
      <div>
        <b>{message.author.toUpperCase()}:</b> {message.text}
        <div className={styles.messageTime}>{message.date}</div>
      </div>
    </div>
  );
};
