import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
  const { body } = event;
  const message = JSON.parse(body);

  try {
    let account = {
      user: process.env.SENDINBLUE_USER,
      pass: process.env.SENDINBLUE_PASS,
    };

    let transporter = nodemailer.createTransport(
      {
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      },
      {
        from: account.user,
      }
    );
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
