const { mailOptionsBody } = require("../../config/mail.config");
const nodemailer = require("nodemailer");

exports.uploadAttachment = async (req, res, next) => {
  try {
    let {
      hostAddress,
      emailForSend,
      password,
      receiveEmail,
      clientName,
      clientEmail,
    } = req.body;
    const transporter = nodemailer.createTransport({
      host: hostAddress,
      port: 465,
      secure: true,
      auth: {
        user: emailForSend,
        pass: password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailBodyHtml = await mailOptionsBody(req.body, "career");

    const mailOptions = {
      from: `${!clientEmail ? emailForSend : clientEmail}`,
      to: `${receiveEmail}`,
      subject: `A new resume received from ${clientName}`,
      html: mailBodyHtml,
      attachments: req.files.map((file) => {
        return {
          filename: file.originalname,
          content: file.buffer,
        };
      }),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: "Error",
          message: error.message,
        });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({
          status: "Success",
          message: "Email sent successfully",
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "An error occurred",
      data: error.message,
    });
  }
};

//only contact mail
exports.contactQuery = async (req, res, next) => {
  try {
    let {
      hostAddress,
      emailForSend,
      password,
      receiveEmail,
      clientEmail,
      subject,
    } = req.body;

    console.log(
      "query received the req",
      hostAddress,
      emailForSend,
      password,
      receiveEmail,
      clientEmail,
      subject
    );

    if (!password && emailForSend === process.env.TECHNO_MAIL) {
      password = process.env.TECHNO_PASS;
    }

    const transporter = nodemailer.createTransport({
      host: hostAddress,
      port: 465,
      secure: true,
      auth: {
        user: emailForSend,
        pass: password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailBodyHtml = await mailOptionsBody(req.body, "contact");

    const mailOptions = {
      from: `${!clientEmail ? emailForSend : clientEmail}`,
      to: `${receiveEmail}`,
      subject: `${subject}`,
      html: mailBodyHtml,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: "Error",
          message: error.message,
        });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({
          status: "Success",
          message: "Email sent successfully",
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "An error occurred",
      data: error.message,
    });
  }
};
