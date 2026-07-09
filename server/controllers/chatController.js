const { generateGeminiResponse } = require("../services/geminiService");
const {
  matchPortfolioAnswer,
} = require("../chatbot/intentMatcher");
exports.chat = async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    // ======================================
    // STEP 1: Check Portfolio Knowledge Base
    // ======================================

    const portfolioResult = matchPortfolioAnswer(message);

    if (portfolioResult.found) {
      return res.status(200).json({
        success: true,
        source: "portfolio",
        intent: portfolioResult.intent,
        reply: portfolioResult.answer,
      });
    }

    // ======================================
    // STEP 2: Gemini Fallback
    // ======================================

    const reply = await generateGeminiResponse(
      message,
      history
    );

    return res.status(200).json({
      success: true,
      source: "gemini",
      reply,
    });

  } catch (error) {
    console.error("Chat Controller Error:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate response.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};