import nodemailer from 'nodemailer';

export const POST = async (req) => {
  try {
    const body = await req.text();
    console.log('Raw request body:', body);

    if (!body) {
      throw new Error('Request body is empty');
    }

    const { email, subject, message } = JSON.parse(body);

    // Log the parsed request body
    console.log('Parsed request body:', { email, subject, message });

    if (!email || !subject || !message) {
      throw new Error('Missing required fields');
    }

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // SMTP server
      port: 587, // SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // SMTP user from environment variables
        pass: process.env.SMTP_PASS, // SMTP password from environment variables
      },
    });

    // Verify the connection configuration
    await transporter.verify();

    // Set up email data
    const mailOptions = {
      from: email, // Sender address
      to: 'macdonaldsairos24@outlook.com', // Replace with your recipient email
      subject: subject || 'Contact Form Submission',
      text: message,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error.message);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), { status: 500 });
  }
};