const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authenticateManager,
} = require("../middleware/authMiddleware");

router.post(
  "/signup",
  authenticateUser,
  authenticateManager,
  require("../controllers/UserVerification/userVerification").process
);

router.post(
  "/submitOtp/:role",
  require("../controllers/UserRegistration/signup").process
);

module.exports = router;
