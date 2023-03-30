const { mailOptionsBody, transporter } = require("../../config/mail.config");

exports.uploadAttachment = async (req, res, next) => {
  try {
    console.log("this is form files up", typeof req.files, req.files);
    let { name, email } = req.body;
    const mailBodyHtml = await mailOptionsBody(req.body, "career");

    const mailOptions = {
      from: `${!email ? process.env.USER_NAME : email}`,
      to: "career@banglahaatengineering.com",
      subject: `A new resume received from ${name}`,
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
    let { email, subject } = req.body;

    const mailBodyHtml = await mailOptionsBody(req.body, "contact");

    const mailOptions = {
      from: `${!email ? process.env.USER_NAME : email}`,
      to: "contact@banglahaatengineering.com",
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
