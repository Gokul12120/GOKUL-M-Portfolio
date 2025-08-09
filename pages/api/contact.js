import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER, // your gmail address
          pass: process.env.GMAIL_PASS, // your gmail app password
        },
      });

      await transporter.sendMail({
  from: process.env.GMAIL_USER,
  replyTo: email,
  to: process.env.GMAIL_USER,
  subject: `New message from ${name}`,
  text: message,
  html: `<p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong> ${message}</p>`,
});

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
