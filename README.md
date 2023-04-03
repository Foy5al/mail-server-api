# Mail Server API - An Alternative to Email JS

Mail Server API is a Node.js based project that provides a simple and easy-to-use interface for sending emails with attachments or just the mail body using your own email configuration. This project is designed as an alternative to Email JS, allowing developers to send emails programmatically using their own email servers and configurations.

The Mail Server API is built using Node.js and provides a RESTful API interface for sending emails. It supports business emails for now. The API also supports sending attachments(maximum 5 files with in 20mb limit) with emails, making it an ideal solution for developers who need to send files via email.

With Mail Server API, users can integrate email functionality into their applications with ease. The project is open source and available on GitHub, making it easy for developers to contribute to the project and add new features. In future I will add Gmail, Yahoo, and Outlook, and allows users to customize the email content, subject, and recipients.

## Features

- Easy-to-use RESTful API for sending emails
- Ability to send emails with attachments or just the mail body
- Open source project on GitHub
- Support all business emails

## Installation

No installation required. Simply send a POST request to the API endpoint using the appropriate tools and parameters.

## Usage/Examples

```javascript
To use the API, simply make a POST request to the /send endpoint with the necessary parameters, including the email content, subject, and recipients. If you want to send an attachment, you can include the file as a base64 encoded string in the request body.
```

## Contributing

Contributions are always welcome!

Mail Server API is an open source project. If you would like to contribute, please fork the repository, make your changes, and submit a pull request. Your contributions will be reviewed and merged into the project if they meet the project's standards.

## API Reference

#### Post request for only email send should be send as JSON data in request body

```http
  POST /api/v1/drop/query
```

| Parameter      | Type     | Description                                                                                                                                 |
| :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `hostAddress`  | `string` | **Required**. Your email server host address ex: webmail.example.com                                                                        |
| `emailForSend` | `string` | **Required**. Your email address which is used for send emails ex: info@example.com                                                         |
| `password`     | `string` | **Required**. Your email password which you use above ► emailForSend                                                                        |
| `receiveEmail` | `string` | **Required**. Email address where you want to receive the mail ex: career@example.com                                                       |
| `clientName`   | `string` | **Not required**. If you provide clinet name in the form data it will add to your email subject line. ex: A new mail received form Mohammad |
| `clientEmail`  | `string` | **Not required**. If you provide clinet email in the form data it will add into email sender address line ex: from:client@example.com       |
| `contact`      | `string` | **Not required**. It will add the contact number in the mail body ex: contact no: 01680000000                                               |
| `address`      | `string` | **Not required**. It will add the address in the mail body ex: Address: 22/A Dhaka-1000                                                     |
| `message`      | `string` | **Not required**. It will add the client message or query in the mail body.                                                                 |
| `subject`      | `string` | **Not required**. It will add the Email subject into the email. ex: Query about api doc                                                     |

#### Post request with attachement should be send as formData and attachement name sould be file

```http
  POST /api/v1/drop/files
```

| Parameter      | Type     | Description                                                                                                                                 |
| :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `file`         | `string` | **Required**. This is for your attached files it will receive max 20Mb and 5 files at a time                                                |
| `hostAddress`  | `string` | **Required**. Your email server host address ex: webmail.example.com                                                                        |
| `emailForSend` | `string` | **Required**. Your email address which is used for send emails ex: info@example.com                                                         |
| `password`     | `string` | **Required**. Your email password which you use above ► emailForSend                                                                        |
| `receiveEmail` | `string` | **Required**. Email address where you want to receive the mail ex: career@example.com                                                       |
| `clientName`   | `string` | **Not required**. If you provide clinet name in the form data it will add to your email subject line. ex: A new mail received form Mohammad |
| `clientEmail`  | `string` | **Not required**. If you provide clinet email in the form data it will add into email sender address line ex: from:client@example.com       |
| `contact`      | `string` | **Not required**. It will add the contact number in the mail body ex: contact no: 01680000000                                               |
| `address`      | `string` | **Not required**. It will add the address in the mail body ex: Address: 22/A Dhaka-1000                                                     |
| `message`      | `string` | **Not required**. It will add the client message or query in the mail body.                                                                 |
| `subject`      | `string` | **Not required**. It will add the Email subject into the email. ex: Query about api doc                                                     |

## Feedback

If you have any feedback, please reach out to us at mh.foysal.h@outlook.com

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://dev-foysal.netlify.app/)
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/iamfoysal.h) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/mh_foysal_h) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/md-foysal-h)
