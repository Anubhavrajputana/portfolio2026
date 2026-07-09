import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Trash2, Sparkles } from "lucide-react";

import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import SuggestedQuestions from "./SuggestedQuestions";
import ChatInput from "./ChatInput";
import chatbotData from "./chatbotData";

// ==============================
// Backend URL
// ==============================

// Vite
const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  "http://localhost:5000";

// CRA fallback (optional)
const API =
  `${BACKEND_URL}/api`;

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "assistant",
  content: `👋 Hi, I'm ${chatbotData.owner.name}'s AI Portfolio Assistant.

I'm here to help you learn more about Harsh.

You can ask me about:

🚀 Projects

💼 Experience

🎓 Education

🛠 Skills

📜 Certifications

📄 Resume

📧 Contact

Feel free to ask anything! 😊`,
  createdAt: new Date().toISOString(),
};

const DEFAULT_SUGGESTIONS =
  chatbotData.suggestedQuestions;

export default function ChatWindow({
  endpoint = `${API}/chat`,
  title = "Harsh AI Assistant",
  subtitle = "Powered by Gemini AI",
  suggestions = DEFAULT_SUGGESTIONS,
}) {
  const [messages, setMessages] =
    useState([WELCOME_MESSAGE]);

  const [isTyping, setIsTyping] =
    useState(false);

  const [error, setError] =
    useState("");

  const scrollRef = useRef(null);

  const bottomRef = useRef(null);

  const abortController =
    useRef(null);

  // ==============================
  // Auto Scroll
  // ==============================

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);
  useEffect(() => {
  return () => {
    abortController.current?.abort();
  };
}, []);

  // ==============================
  // Clear Chat
  // ==============================

  const clearChat = () => {
    if (abortController.current) {
      abortController.current.abort();
    }

    setMessages([WELCOME_MESSAGE]);
    setError("");
    setIsTyping(false);
  };

  // ==============================
  // Send Message
  // ==============================

  const handleSend =
    useCallback(
      async (text) => {
        const message =
          text.trim();

        if (!message) return;

        if (isTyping) return;

        setError("");

        const userMessage = {
          id: Date.now().toString(),
          role: "user",
          content: message,
          createdAt:
            new Date().toISOString(),
        };

        setMessages((prev) => [
          ...prev,
          userMessage,
        ]);

        setIsTyping(true);

        try {
          if (abortController.current) {
            abortController.current.abort();
          }

          abortController.current =
            new AbortController();

          const history = [
            ...messages,
            userMessage,
          ]
            .filter(
              (item) =>
                item.id !== "welcome"
            )
            .map((item) => ({
              role: item.role,
              content: item.content,
            }));

          const { data } =
            await axios.post(
              endpoint,
              {
                message,
                history,
              },
              {
                signal:
                  abortController.current
                    .signal,
                timeout: 60000,
              }
            );
          // ==============================
          // Extract AI Response
          // ==============================

          const aiReply =
            data?.reply ||
            data?.message ||
            data?.content ||
            "Sorry, I couldn't generate a response.";

          const assistantMessage = {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: aiReply,
            createdAt: new Date().toISOString(),
          };

          setMessages((prev) => [
            ...prev,
            assistantMessage,
          ]);
        } catch (err) {
          // Ignore cancelled requests
          if (
            err.name === "CanceledError" ||
            axios.isCancel?.(err)
          ) {
            return;
          }

          console.error("Gemini Error:", err);

          const errorText =
            err?.response?.data?.message ||
            err?.response?.data?.detail ||
            err?.message ||
            "Something went wrong. Please try again.";

          setError(errorText);

          setMessages((prev) => [
            ...prev,
            {
              id: `error-${Date.now()}`,
              role: "assistant",
              content: `⚠️ ${errorText}`,
              createdAt: new Date().toISOString(),
              isError: true,
            },
          ]);
        } finally {
          setIsTyping(false);
        }
      },
      [messages, endpoint, isTyping]
    );

  const showSuggestions =
    messages.length === 1 &&
    !isTyping &&
    suggestions?.length > 0;
      return (
    <motion.div
      className="chat-window"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      {/* ==============================
          HEADER
      ============================== */}

      <div className="chat-header">
        <div className="chat-header-left">
          <div className="chat-avatar">
            <Bot size={22} />
          </div>

          <div className="chat-header-info">
            <h2>{title}</h2>

            <p>
              <Sparkles size={13} />
              {subtitle}
            </p>
          </div>
        </div>

        <button
          className="clear-chat-btn"
          onClick={clearChat}
          title="Clear Chat"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* ==============================
          CHAT BODY
      ============================== */}

      <div
        className="chat-body"
        
      >
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <ChatMessage
                message={message}
              />
            </motion.div>
          ))}
                  </AnimatePresence>

        {/* ==============================
            TYPING INDICATOR
        ============================== */}

        {isTyping && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <TypingIndicator />
          </motion.div>
        )}

        {/* ==============================
            SUGGESTED QUESTIONS
        ============================== */}

        {showSuggestions && (
          <SuggestedQuestions
            suggestions={suggestions}
            onSelect={handleSend}
          />
        )}

        {/* Auto Scroll */}
        <div ref={bottomRef} />
      </div>

      {/* ==============================
          CHAT INPUT
      ============================== */}

      <ChatInput
        onSend={handleSend}
        disabled={isTyping}
      />

      {/* ==============================
          ERROR MESSAGE
      ============================== */}

      {error && (
        <motion.div
          className="chat-error"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          ⚠ {error}
        </motion.div>
      )}
    </motion.div>
  );
}