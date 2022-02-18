// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const envs = [
    'EMAIL_SERVER_HOST',
    'EMAIL_SERVER_PORT',
    'EMAIL_SERVER_USER',
    'EMAIL_SERVER_PASSWORD',
  ];
  const port = parseInt(process.env.EMAIL_SERVER_PORT || '');
  if (
    !Number.isInteger(port) ||
    !envs.every((item) => process.env.hasOwnProperty(item))
  ) {
    res.status(500).json({ name: 'missing env variables' });
    return;
  }

  const transportoptions = {
    host: process.env.EMAIL_SERVER_HOST!,
    port: port,
    secure: false,
    auth: {
      user: process.env.EMAIL_SERVER_USER!,
      pass: process.env.EMAIL_SERVER_PASSWORD!,
    },
  };
  console.log(transportoptions);

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport(transportoptions);

  try {
    await transporter.sendMail({
      from: email,
      to: 'johan@ostbye.dev',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>

      `,
    });

    console.log('Message Sent');
    console.log(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).json({ name: 'error' });
  }

  res.status(200).json(req.body);
}
