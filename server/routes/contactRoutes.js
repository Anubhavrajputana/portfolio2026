const express = require("express");

const router = express.Router();

const {
  sendContact,
} = require("../controllers/contactController");
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Contact API Working 🚀",
  });
});
router.post("/", sendContact);

module.exports = router;