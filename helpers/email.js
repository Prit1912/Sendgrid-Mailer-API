require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (msg) => {
  sgMail
    .send(msg)
    .then((res) => {
      console.log("Email sent", res);
    })
    .catch((error) => {
      console.error(error);
    });
};
