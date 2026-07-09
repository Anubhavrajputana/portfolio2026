import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SuggestedQuestions({
  suggestions = [],
  onSelect,
}) {
  if (!suggestions.length) return null;

  return (
    <motion.div
      className="suggested-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="suggested-title">
        <Sparkles size={16} />
        <span>Suggested Questions</span>
      </div>

      <div className="suggested-list">
        {suggestions.map((question, index) => (
          <motion.button
            key={index}
            className="suggestion-chip"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => onSelect(question)}
          >
            {question}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}