const portfolioAnswers = require("./portfolioAnswers");

/**
 * Normalize user question
 */
function normalize(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");
}

/**
 * Find matching portfolio answer
 */
function matchPortfolioAnswer(question) {
  const input = normalize(question);

  // Loop through every answer section
  for (const key in portfolioAnswers) {
    const item = portfolioAnswers[key];

    if (!item || !item.keywords) continue;

    const matched = item.keywords.some((keyword) =>
      input.includes(normalize(keyword))
    );

    if (matched) {
      return {
        found: true,
        intent: key,
        answer: item.answer,
      };
    }
  }

  return {
    found: false,
    intent: null,
    answer: null,
  };
}

/**
 * Optional helper
 */
function getIntent(question) {
  const result = matchPortfolioAnswer(question);
  return result.intent;
}

module.exports = {
  matchPortfolioAnswer,
  getIntent,
};