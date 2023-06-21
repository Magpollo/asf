import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
  const { body } = event;
  const message = JSON.parse(body);

  try {
    const account = await nodemailer.createTestAccount();
    console.log('Test account created, sending message...');

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
    console.log('Transporter created...');

    const info = await transporter.sendMail(message);
    console.log('Message sent: %s', info.messageId);
    return {
      statusCode: 200,
      body: JSON.stringify(info),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
