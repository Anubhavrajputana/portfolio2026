const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

async function generateGeminiResponse(
  message,
  history = []
) {
  try {
    const formattedHistory = history.map((item) => ({
      role:
        item.role === "assistant"
          ? "model"
          : "user",
      parts: [
        {
          text: item.content,
        },
      ],
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result =
      await chat.sendMessage(message);

    const response =
      await result.response;

    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);

    throw error;
  }
}

module.exports = {
  generateGeminiResponse,
};