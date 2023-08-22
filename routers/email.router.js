const express = require("express");
const emailController = require("../controllers/email.controller");

const emailRouter = express.Router();
emailRouter.post("/send-mail", emailController.sendMail);
emailRouter.post(
  "/send-mail-with-attachment",
  emailController.sendMailithAttachment
);
emailRouter.post(
  "/send-mail-to-multiple-person-with-cc-and-bcc",
  emailController.sendMailToMultiplePersonWithCCandBCC
);
emailRouter.post(
  "/send-mail-with-dynamic-template",
  emailController.sendailWithDynamicTemplate
);
emailRouter.post(
  "/send-mail-to-nultiple-person-with-dynamic-template",
  emailController.sendMailToMultiplePersonWithDynamicTemplate
);

module.exports = emailRouter;
