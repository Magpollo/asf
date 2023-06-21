import {
  Html,
  Head,
  Heading,
  Hr,
  Body,
  Container,
  Section,
  Img,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import bgPattern from '../../assets/Pattern.png';
import logo from '../../assets/ASF_logo.png';

export function Application({
  firstName,
  lastName,
  email,
  phone,
  position,
  startDate,
  coverLetter,
  resume,
}) {
  const previewText = `${firstName} has applied for the ${position} position at African Soulfood. Please find their cover letter and resume attached.`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          className="my-auto mx-auto font-sans"
          style={{
            backgroundImage: `url(${bgPattern})`,
            width: '100%',
            zIndex: '-1',
          }}
        >
          <Container className="bg-white border border-solid border-[#eaeaea] rounded mx-auto my-[40px] p-[20px]">
            <Section>
              <Img
                alt="African Soulfood Logo"
                src={logo}
                height={40}
                width={170}
                className="mx-auto"
              />
            </Section>
            <Section>
              <Heading className="text-center text-black text-3xl font-bold capitalize">
                Application for {position}
              </Heading>
              <Text className="text-left text-black">
                You have received an application from {firstName} {lastName} for
                the {position} position at African Soulfood.
              </Text>
              <Text className="text-left text-black">
                {firstName} can be contacted at {email} or {phone}. They are
                available to start on {startDate}. Please find their cover
                letter below and resume attached.
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-left text-black">{coverLetter}</Text>
              <span className="text-sm">
                built by <a href="https://www.magpollo.com">Magpollo</a>
              </span>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export function EventRequest({
  firstName,
  lastName,
  email,
  phone,
  company,
  eventType,
  eventDetails,
  date,
  numberOfPeople,
  additionalInfo,
}) {
  const previewText = `${firstName} has requested a ${eventType} event on ${date}.`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          className="my-auto mx-auto font-sans"
          style={{
            backgroundImage: `url(${bgPattern})`,
            width: '100%',
            zIndex: '-1',
          }}
        >
          <Container className="bg-white border border-solid border-[#eaeaea] rounded mx-auto my-[40px] p-[20px]">
            <Section>
              <Img
                alt="African Soulfood Logo"
                src={logo}
                height={40}
                width={170}
                className="mx-auto"
              />
            </Section>
            <Section>
              <Heading className="text-center text-black text-3xl font-bold capitalize">
                {eventType} Event Request for {eventDetails}
              </Heading>
              <Text className="text-left text-black">
                You have received an event request from {firstName} {lastName}{' '}
                for a {eventType} event at African Soulfood. {firstName} can be
                contacted at {email} or {phone}. The event is for{' '}
                {numberOfPeople} people on {date}. Please find the event details
                below.
              </Text>
              <Text className="text-left text-black">
                <strong>Company:</strong> {company} <br />
                <strong>Event Type:</strong> {eventType} <br />
                <strong>Event Details:</strong> {eventDetails} <br />
                <strong>Date:</strong> {date} <br />
                <strong>Number of People:</strong> {numberOfPeople} <br />
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-left text-black">{additionalInfo}</Text>
              <span className="text-sm">
                built by <a href="https://www.magpollo.com">Magpollo</a>
              </span>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
