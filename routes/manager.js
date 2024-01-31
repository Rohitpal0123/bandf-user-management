const express = require("express");
const router = express.Router();

router.post(
  "/signup",
  require("../controllers/UserVerification/userVerification").process
);

router.post(
  "/submitOtp/:role",
  require("../controllers/UserRegistration/signup").process
);

router.get("/get", require("../controllers/UserRegistration/getAll").process);

router.delete(
  "/delete",
  require("../controllers/UserRegistration/deleteAll").process
);
module.exports = router;
