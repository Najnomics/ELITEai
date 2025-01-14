export default function getEmailTemplate(username: string) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Elite Global Intelligence Technology Internship</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .email-container {
              background-color: #ffffff;
              margin: 0 auto;
              padding: 20px;
              max-width: 600px;
              border: 1px solid #dddddd;
              border-radius: 8px;
          }
          .header {
              text-align: center;
              padding: 20px 0;
          }
          .header img {
              max-width: 150px;
          }
          .content {
              margin: 20px 0;
          }
          .content h1 {
              font-size: 24px;
              color: #333333;
          }
          .content p {
              font-size: 16px;
              color: #666666;
              line-height: 1.5;
          }
          .footer {
              text-align: center;
              font-size: 12px;
              color: #999999;
              padding: 20px 0;
          }
          .footer a {
              color: #007BFF;
              text-decoration: none;
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <div class="header">
              <img src="https://eliteai.com/logo.png" alt="Elite Global Intelligence Technology">
          </div>
          <div class="content">
              <h1>Welcome onboard to the Elite Global Intelligence Technology Internship!</h1>
              <p>Dear ${username},</p>
              <p>
                  Our site is currently down and undergoing maintenance.
              </p>
              <p>
                  Please bear with us as this will be rectified shortly.
              </p>
              <p>
                  Thank you for understanding.
              </p>
              <p>
                  For more, reach out to admin support:
              </p>
              <p><strong>09134196351</strong></p>
          </div>
          <div class="footer">
              <p>&copy; 2025 Elite Global Intelligence Technology. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `;
}