import {
  Application,
  EventRequest,
} from '../components/EmailComponents/Emails';
import { render } from '@react-email/render';

export async function sendMail(props, type) {
  const emailHtml =
    type === 'event'
      ? render(<EventRequest {...props} />)
      : render(<Application {...props} />);

  // read resume file using FileReader API
  async function readFile(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const message = {
    subject:
      type === 'event'
        ? `Event Request from ${props.firstName}`
        : `Job Application from ${props.firstName}`,
    html: emailHtml,
    dsn: {
      id: crypto.randomUUID(),
      return: 'headers',
      notify: ['failure', 'delay'],
      recipient: 'only1hbo@icloud.com',
    },
    attachments: [
      {
        filename: props.resume.name,
        path: await readFile(props.resume),
      },
    ],
  };

  try {
    // send message object to netlify function
    const response = await fetch('/.netlify/functions/email', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      alert('Message sent!');
    } else {
      alert('Message failed to send.');
    }
  } catch (error) {
    console.error(error);
    alert('Message failed to send.');
  }
}
