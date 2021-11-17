import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Message = ({ messageList }) => {
  return (
    <div className="messageDiv">
      {messageList.map((message) => (
        <div className="messageBlock">
          <div>
            <b>{message.author.toUpperCase()}:</b> {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author !== "Bot") {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", text: `Hello ${lastMessage.author.toUpperCase()}` },
        ]);
      }, 1500);
    }
    return () => clearInterval(timerId);
  }, [messageList]);

  const addMessage = () => {
    setMessageList([...messageList, { author: author, text: text }]);
    setAuthor("");
    setText("");
  };

  return (
    <div className="contaner">
      <div className="head">
        <Message messageList={messageList} />
        <div className="messageFutter">
          <input
            placeholder="Введите ваше имя"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            value={author}
          />

          <input
            placeholder="Введите сообщение"
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
