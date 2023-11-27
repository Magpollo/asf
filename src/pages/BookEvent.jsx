import React from 'react';
import Pattern from '../assets/Pattern.png';
import usePageTitle from '../Hooks/usePageTitle';
import { Fade } from 'react-awesome-reveal';
import { useFormik } from 'formik';
import { bookingSchema } from '../Hooks/validateInputs';
import { sendMail } from '../Hooks/sendMail';

const EventPage = () => {
  usePageTitle('African Soulfood | Book Event');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      eventType: '',
      eventDetails: '',
      date: '',
      startTime: '',
      endTime: '',
      numberOfPeople: '',
      additionalInfo: '',
    },
    validationSchema: bookingSchema,
    onSubmit: async (values) => {
      console.log(values);
      await sendMail(values, 'event');
    },
  });

  return (
    <section
      style={{
        backgroundImage: `url(${Pattern})`,
        width: '100%',
        zIndex: '-1',
        marginTop: '-20vh',
      }}
    >
      <div className="container mx-auto py-24 pt-32">
        <h1
          className="text-5xl text-center text-gray-100 pt-12 font-bold"
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
        >
          Event Request
        </h1>
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="text-3xl text-center text-gray-100 py-5"
        >
          Contact our event coordinator today!
        </h1>
        <div>
          <Fade
            direction="down"
            duration={1500}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="lg:w-1/2 w-full lg:p-1 p-2 mx-auto"
            >
              <div className="flex gap-2 my-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      {' '}
                      First name*
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    id="firstName"
                    {...formik.getFieldProps('firstName')}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100">Last name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-full max-w-xs"
                    id="lastName"
                    {...formik.getFieldProps('lastName')}
                  />
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100"> Email*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="user@email.com"
                    className="input input-bordered w-full "
                    id="email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100"> Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="(123) 456-7890"
                    className="input input-bordered w-full "
                    id="phone"
                    {...formik.getFieldProps('phone')}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100"> Company</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    id="company"
                    {...formik.getFieldProps('company')}
                  />
                  {formik.touched.company && formik.errors.company ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.company}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      Subscribe to our newsletter and Promo emails
                    </span>
                  </label>
                  <input
                    type="checkbox"
                    // checked
                    className="checkbox checkbox-primary"
                  />
                </div>
              </div>
              <div className="flex gap-2 my-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      {' '}
                      Event Date*
                    </span>
                  </label>
                  <input
                    required
                    type="date"
                    className="input input-bordered w-full "
                    id="date"
                    {...formik.getFieldProps('date')}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.date}
                    </div>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      Select your desired event style
                    </span>
                  </label>
                  <select
                    id="eventType"
                    {...formik.getFieldProps('eventType')}
                    className="select"
                  >
                    <option
                      value=""
                      disabled
                      selected
                    >
                      Choose one
                    </option>
                    <option>On-Premise</option>
                    <option>Drop-Off Catering</option>
                    <option>Pick-Up Catering</option>
                    <option>Full-Service Catering</option>
                  </select>
                  {formik.touched.eventType && formik.errors.eventType ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.eventType}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      {' '}
                      Your Event Details*
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nature of this Event(e.g., Birthday Party or Business Dinner)"
                    className="input input-bordered w-full "
                    id="eventDetails"
                    {...formik.getFieldProps('eventDetails')}
                  />
                  {formik.touched.eventDetails && formik.errors.eventDetails ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.eventDetails}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex gap-2 my-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      {' '}
                      Start Time
                    </span>
                  </label>
                  <input
                    type="time"
                    className="input input-bordered w-full "
                    id="startTime"
                    {...formik.getFieldProps('startTime')}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100"> End Time</span>
                  </label>
                  <input
                    type="time"
                    className="input input-bordered w-full "
                    id="endTime"
                    {...formik.getFieldProps('endTime')}
                  />
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      Number of People (Minimum of 10)
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    id="numberOfPeople"
                    min={10}
                    {...formik.getFieldProps('numberOfPeople')}
                  />
                  {formik.touched.numberOfPeople &&
                  formik.errors.numberOfPeople ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.numberOfPeople}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      Is there any additional information you would like to add?
                    </span>
                  </label>
                  <textarea
                    placeholder="Type here"
                    className="textarea w-full "
                    id="additionalInfo"
                    {...formik.getFieldProps('additionalInfo')}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-56 py-3 my-5 rounded-lg bg-[#F7CC32] text-center text-white-500 uppercase font-bold outline-offset-0 outline-1 hover:outline-inherit 
      hover:bg-red hover:text-[#F7CC32] hover:shadow-red-500 hover:shadow-[inset_15rem_0_0_0]  duration-[500ms,700ms] transition-[color,box-shadow]"
              >
                Submit
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
