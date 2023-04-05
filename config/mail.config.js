const nodemailer = require("nodemailer");

exports.mailOptionsBody = async (data, fromAdd) => {
  let {
    clientName,
    clientEmail,
    contact,
    address,
    message,
    profession,
    service,
    websiteLink,
  } = data;
  return `
            <p>
            <b>clientName:</b> ${clientName} <br></br>
      
            ${
              fromAdd === "career"
                ? `
            <b>Profession:</b> ${profession}<br></br>
            <b>Email:</b> <a href="mailto:${!clientEmail ? "" : clientEmail}">${
                    !clientEmail
                      ? "No Email found in the response"
                      : clientEmail
                  }</a><br></br>
            `
                : ``
            }
            ${!service ? "" : `<b>Selected Service:</b> ${service}<br></br>`}
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
                ${
                  websiteLink
                    ? `<details>This Email is received from the ${fromAdd} section of 
                <a href="http://banglahaatengineering.com/" target="_blank"> ${websiteLink}</a>
                 website.</details>`
                    : `<details> Thank you for utilizing the email API. This application has been developed by  
                 <a href="https://dev-foysal.netlify.app/" target="_blank"> Mohammad Foysal</a>. If you have any inquiries or concerns, please do not hesitate to contact us.</details>`
                }
            </center>
            `;
};
