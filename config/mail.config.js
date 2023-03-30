const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  host: process.env.HOST_ADD,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.mailOptionsBody = async (data, formData) => {
  let { name, contact, email, address, message, profession } = data;
  return `
            <p>
            <b>Name:</b> ${name} <br></br>
      
            ${
              fromAdd === "career"
                ? `
            <b>Profession:</b> ${profession}<br></br>
            <b>Email:</b> <a href="mailto:${!email ? "" : email}">${
                    !email ? "No Email found in the response" : email
                  }</a><br></br>
            `
                : ``
            }
            <b>Contact No:</b> <a href="tel:${contact}">${contact}</a><br></br>
            <b>Address:</b> ${address}<br></br>      
            </p>
            <hr>
            <p>
            <b>Message:</b> ${
              !message ? "No Message found in the response" : message
            }
            <br></br><br></br>
            
           ${
             fromAdd === "career"
               ? `Please find the attached file for further information.`
               : ""
           }
            </p>
            
            <hr>
            <br></br>
            <center>
                <details>This Email is received from the ${fromAdd} section of 
              <a href="http://banglahaatengineering.com/" target="_blank"> banglahaatengineering.com</a>
               website.</details>
            </center>
            `;
};
