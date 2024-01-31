const nodemailer = require("nodemailer");

module.exports = async (mailDetails) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "worthiferotp@gmail.com",
        pass: process.env.GMAIL_PASS_KEY,
      },
    });

    const mailOptions = mailDetails;

    // const mailOptions = {
    //   from: "xcorp@gmail.com",
    //   to: email,
    //   subject: "OTP Verification",
    //   text: data
    // };

    const sendMail = await transporter.sendMail(mailOptions);
    if (!sendMail) throw "Failed to send Email !";

    return mailDetails;
  } catch (error) {
    throw error;
  }
};
