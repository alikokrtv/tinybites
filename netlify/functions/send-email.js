const nodemailer = require('nodemailer');

// SMTP configuration using the provided credentials
const transporter = nodemailer.createTransport({
  host: 'mail.kurumsaleposta.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'info@tinybites.net',
    pass: 'jW8eV6Uw27PMSJH'
  }
});

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Parse the incoming JSON data
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Please provide name, email, and message' })
      };
    }

    // Admin notification email content
    const adminMailOptions = {
      from: 'info@tinybites.net',
      to: 'info@tinybites.net',
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // User confirmation email content
    const userMailOptions = {
      from: 'info@tinybites.net',
      to: email,
      subject: 'Thank you for contacting Tiny Bites',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e83e8c;">Tiny Bites</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Best regards,</p>
          <p><strong>Tiny Bites Team</strong></p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email', error: error.message })
    };
  }
};
