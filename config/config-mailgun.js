const gunMail = require("mailgun.js");

require("dotenv").config();

gunMail.setApiKey=process.env.MAILGUN_API_KEY;

const sendVerificationEmail = async (user) => {
  try {
    const msg = {
      to: user.email,
      from: process.env.DOMAIN,
      subject: "Verify your email",
      text: `Please verify your email by clicking on this link: localhost:3000/users/verify/${user.verificationToken}`,
      html: `<p>Please verify your email by clicking on this link: <a href='localhost:3000/users/verify/${user.verificationToken}'>localhost:3000/users/verify/${user.verificationToken}</a></p>`,
    };
    await gunMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendVerificationEmail;