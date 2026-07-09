import { useState } from "react";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

export default function ChatInput({
  onSend,
  disabled = false,
}) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const text = message.trim();

    if (!text || disabled) return;

    onSend(text);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="chat-input-wrapper">
      <textarea
        className="chat-input"
        placeholder="Ask me anything..."
        rows={1}
        value={message}
        disabled={disabled}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="send-btn"
        onClick={handleSubmit}
        disabled={
          disabled || !message.trim()
        }
      >
        <SendHorizonal size={20} />
      </motion.button>
    </div>
  );
}