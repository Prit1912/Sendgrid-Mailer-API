const { sendMail } = require("../helpers/email");

module.exports = {
  async sendMail() {
    const msg = {
      to: "test@yopmail.com", // Change to your recipient
      from: "verifiedsendgridemailsender@gmail.com", // Change to your verified sender of sendgrid
      subject: "Testing sendgrid -------------------",
      text: "Hi, how are you",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    await sendMail(msg);
  },
  async sendMailithAttachment() {
    const msg = {
      to: "test@yopmail.com", // Change to your recipient
      from: "verifiedsendgridemailsender@gmail.com", // Change to your verified sender of sendgrid
      subject: "Testing sendgrid -------------------",
      content: [
        {
          type: "text/html",
          value:
            "<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>",
        },
      ],
      attachments: [
        {
          content: "PGI+IFRoaXMgaXMgYXR0YWNobWVudCA8L2I+",
          filename: "index.html",
          type: "text/html",
          disposition: "attachment",
        },
      ],
    };
    await sendMail(msg);
  },
  async sendMailToMultiplePersonWithCCandBCC() {
    const msg = {
      from: "verifiedsendgridemailsender@gmail.com", // Change to your verified sender of sendgrid
      personalizations: [
        {
          to: [
            {
              email: "test@yopmail.com",
              name: "Test",
            },
            {
              email: "test1@yopmail.com",
              name: "Test1",
            },
            {
              email: "test2@yopmail.com",
              name: "Test2",
            },
          ],
          cc: [
            {
              email: "test3@yopmail.com",
              name: "Test3",
            },
          ],
          bcc: [
            {
              email: "test4@yopmail.com",
              name: "Test4",
            },
          ],
        },
      ],
      subject: "Testing sendgrid -------------------",
      content: [
        {
          type: "text/html",
          value:
            "<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>",
        },
      ],
    };
    await sendMail(msg);
  },
  async sendailWithDynamicTemplate() {
    const msg = {
      to: "test@yopmail.com", // Change to your recipient
      from: "verifiedsendgridemailsender@gmail.com", // Change to your verified sender of sendgrid
      template_id: "d-b97cb7e74f404cebae5c7f62118cd703",
      subject: "Testing sendgrid -------------------",
      dynamic_template_data: {
        firstName: "test_first_name",
        lastName: "test_last_name",
        subject: "Testing sendgrid -------------------",
      },
    };
    await sendMail(msg);
  },
  async sendMailToMultiplePersonWithDynamicTemplate() {
    const msg = {
      from: "verifiedsendgridemailsender@gmail.com", // Change to your verified sender of sendgrid
      personalizations: [
        {
          to: [
            {
              email: "test@yopmail.com",
              name: "Test",
            },
          ],
          dynamic_template_data: {
            firstName: "Test_fname",
            lastName: "Test_lname",
            subject: "Testing sendgrid -------------------1",
          },
        },
        {
          to: [
            {
              email: "test1@yopmail.com",
              name: "Test1",
            },
          ],
          dynamic_template_data: {
            firstName: "Test1_fname",
            lastName: "Test1_lname",
            subject: "Testing sendgrid -------------------2",
          },
        },
        {
          to: [
            {
              email: "test2@yopmail.com",
              name: "Test2",
            },
          ],
          dynamic_template_data: {
            firstName: "Test2_fname",
            lastName: "Test2_lname",
            subject: "Testing sendgrid -------------------3",
          },
        },
        {
          to: [
            {
              email: "test3@yopmail.com",
              name: "Test3",
            },
          ],
          dynamic_template_data: {
            firstName: "Test3_fname",
            lastName: "Test3_lname",
            subject: "Testing sendgrid -------------------4",
          },
        },
      ],
      template_id: "d-b97cb7e74f404cebae5c7f62118cd703",
      content: [
        {
          type: "text/html",
          value:
            "<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>",
        },
      ],
      attachments: [
        {
          content: "PGI+IFRoaXMgaXMgYXR0YWNobWVudCA8L2I+",
          filename: "index.html",
          type: "text/html",
          disposition: "attachment",
        },
      ],
    };
    await sendMail(msg);
  },
};
