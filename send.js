const nodemailer = require('nodemailer');

// Your email account configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your email ',
    pass: 'your passkey',
  },
});

// Define an array of recipients
const recipients = [];

// Create a function to send messages to each recipient
async function sendMessages() {
  for (const recipient of recipients) {
    const mailOptions = {
      from: 'your email',
      to: recipient,
      subject: 'Hello from Node.js',
      text: 'This is a test message sent from Node.js!',
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Message sent to ${recipient}: ${info.response}`);
    } catch (error) {
      console.error(`Error sending message to ${recipient}: ${error}`);
    }
  }
}

// Call the function to send messages to all recipients
sendMessages();
