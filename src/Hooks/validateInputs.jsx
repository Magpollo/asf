import { object, string, number, date, mixed } from 'yup';

export const bookingSchema = object({
  firstName: string().required('First name is required'),
  lastName: string(),
  email: string().email('Invalid email').required('Email is required'),
  phone: string().matches(
    /^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/,
    'Phone number is invalid, check placeholder for example'
  ),
  company: string(),
  eventType: string().required('Please select an event type'),
  eventDetails: string().required('Event details are required'),
  date: date()
    .test('is-future-date', 'Date must be in the future', (value) => {
      const today = new Date();
      return value > today;
    })
    .required('Please select a date'),
  numberOfPeople: number().min(10, 'Minimum of 10 people'),
});

export const contactSchema = object({
  firstName: string().required('First name is required'),
  lastName: string(),
  email: string().email('Invalid email').required('Email is required'),
  phone: string().matches(
    /^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/,
    'Phone number is invalid, check placeholder for example'
  ),
  position: string().required('Please select a position'),
  startDate: date()
    .test('is-future-date', 'Date must be in the future', (value) => {
      const today = new Date();
      return value > today;
    })
    .required('Please select a date'),
  coverLetter: string(),
  resume: mixed()
    .test('is-file-too-big', 'File exceeds 10MB', (files) => {
      let valid = true;
      if (files) {
        const fileArr = Array.from(files);
        fileArr.forEach((file) => {
          const size = file.size / 1024 / 1024;
          if (size > 10) {
            valid = false;
          }
        });
      }
      return valid;
    })
    .test(
      'is-file-of-correct-type',
      'File is not of supported type',
      (files) => {
        let valid = true;
        if (files) {
          const fileArr = Array.from(files);
          fileArr.forEach((file) => {
            const type = file.type.split('/')[1];
            const validTypes = [
              'doc',
              'docx',
              'xml',
              'odt',
              'rtf',
              'txt',
              'plain',
              'pdf',
              'jpeg',
              'png',
              'jpg',
            ];
            if (!validTypes.includes(type)) {
              valid = false;
            }
          });
        }
        return valid;
      }
    )
    .required('Please upload a file'),
});
