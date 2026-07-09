import { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Bot,
  User,
  Copy,
  Check,
} from "lucide-react";

export default function ChatMessage({ message }) {
  const [copied, setCopied] = useState(false);

  const isUser = message?.role === "user";

  const copyMessage = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          message?.content || ""
        );
      }

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const formattedTime = message?.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <motion.div
      className={`chat-message ${
        isUser
          ? "user-message"
          : "assistant-message"
      }`}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="message-avatar">
        {isUser ? (
          <User size={20} />
        ) : (
          <Bot size={20} />
        )}
      </div>

      <div className="message-content">
        <div
          className={`message-bubble ${
            isUser
              ? "user-bubble"
              : "assistant-bubble"
          }`}
        >
          <ReactMarkdown
            components={{
              code({
                className,
                children,
                ...props
              }) {
                const match =
                  /language-(\w+)/.exec(
                    className || ""
                  );

                if (match) {
                  return (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(
                        /\n$/,
                        ""
                      )}
                    </SyntaxHighlighter>
                  );
                }

                return (
                  <code
                    className={className}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {message?.content || ""}
          </ReactMarkdown>
        </div>

        <div className="message-footer">
          <span className="message-time">
            {formattedTime}
          </span>

          <button
            className="copy-btn"
            onClick={copyMessage}
            title="Copy"
          >
            {copied ? (
              <Check size={15} />
            ) : (
              <Copy size={15} />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}