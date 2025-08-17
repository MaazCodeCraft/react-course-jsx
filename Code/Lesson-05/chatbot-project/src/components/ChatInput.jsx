import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpiner from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }

    setIsLoading(true);
    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        message: <img src={LoadingSpiner} className="loading-spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);
    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      // ...newChatMessages,
      ...newChatMessages.slice(0, newChatMessages.length - 1),
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={handleKeyDown}
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
