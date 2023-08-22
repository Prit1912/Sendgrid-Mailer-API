const express = require("express");
const emailRouter = require("./email.router");

const router = express.Router();
router.use("/email", emailRouter);

module.exports = router;
