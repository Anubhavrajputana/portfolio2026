import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const dotVariants = {
  animate: {
    y: [0, -6, 0],
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function TypingIndicator() {
  return (
    <motion.div
      className="typing-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* AI Avatar */}
      <div className="typing-avatar">
        <Bot size={18} />
      </div>

      {/* Bubble */}
      <div className="typing-bubble">
        <div className="typing-dots">
          <motion.span
            className="typing-dot"
            variants={dotVariants}
            animate="animate"
          />

          <motion.span
            className="typing-dot"
            variants={dotVariants}
            animate="animate"
            transition={{
              delay: 0.2,
              duration: 0.8,
              repeat: Infinity,
            }}
          />

          <motion.span
            className="typing-dot"
            variants={dotVariants}
            animate="animate"
            transition={{
              delay: 0.4,
              duration: 0.8,
              repeat: Infinity,
            }}
          />
        </div>

        <span className="typing-text">
          AI is thinking...
        </span>
      </div>
    </motion.div>
  );
}