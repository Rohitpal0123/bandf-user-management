const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authenticateEmployee,
} = require("../middleware/authMiddleware");

router.post(
  "/register",
  authenticateUser,
  authenticateEmployee,
  require("../controllers/UserRegistration/registerCustomer").process
);

module.exports = router;
