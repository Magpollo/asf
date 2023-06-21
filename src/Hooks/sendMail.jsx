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
  const reader = new FileReader();
  reader.readAsDataURL(props.resume);
  let resume = '';
  reader.onload = () => {
    console.log('Resume loaded');
    resume = reader.result;
  };

  const message = {
    from: `${props.firstName} <${props.email}>`,
    to: 'thehaleembello@gmail.com',
    subject:
      type === 'event'
        ? `Event Request from ${props.firstName}`
        : `Job Application from ${props.firstName}`,
    html: emailHtml,
    attachments: [
      {
        filename: props.resume.name,
        path: resume,
      },
    ],
  };

  try {
    // send message object to netlify function
    const response = await fetch('/.netlify/functions/email', {
      method: 'POST',
      body: JSON.stringify(message),
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
