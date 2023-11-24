import React, { useRef } from 'react';
import Pattern from '../assets/Pattern.png';
import usePageTitle from '../Hooks/usePageTitle';
import { useFormik } from 'formik';
import { contactSchema } from '../Hooks/validateInputs';
import { Fade } from 'react-awesome-reveal';
import { sendMail } from '../Hooks/sendMail';

const EvenCoOrdinatorPage = () => {
  usePageTitle('Careers | We are hiring!');

  const fileRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      startDate: '',
      coverLetter: '',
      resume: null,
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      console.log(values);
      await sendMail(values, 'application');
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
          African Soulfood Careers
        </h1>
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="text-3xl text-center text-gray-100 py-5"
        >
          Join our team!
        </h1>
        <div>
          <Fade
            direction="down"
            big
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
              <div className="flex gap-2 my-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100"> Position*</span>
                  </label>
                  <select
                    required
                    className="select"
                    id="position"
                    {...formik.getFieldProps('position')}
                  >
                    <option
                      value=""
                      disabled
                      selected
                    >
                      Select an option
                    </option>
                    <option value="Chef">Chef</option>
                    <option value="Waiter">Waiter</option>
                    <option value="Waitress">Waitress</option>
                    <option value="Bartender">Bartender</option>
                    <option value="Host">Host</option>
                  </select>
                  {formik.touched.position && formik.errors.position ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.position}
                    </div>
                  ) : null}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      {' '}
                      Possible start date*
                    </span>
                  </label>
                  <input
                    required
                    type="date"
                    className="input input-bordered w-full "
                    id="startDate"
                    {...formik.getFieldProps('startDate')}
                  />
                  {formik.touched.startDate && formik.errors.startDate ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.startDate}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100">
                      {' '}
                      Why do you want to work with us?
                    </span>
                  </label>
                  <textarea
                    className="textarea w-full "
                    placeholder="I want to work with you because..."
                    id="coverLetter"
                    {...formik.getFieldProps('coverLetter')}
                  />
                </div>
              </div>
              <div className="my-1">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-gray-100"> Resume*</span>
                  </label>
                  <input
                    required
                    type="file"
                    className="text-[#F7CC32] text-sm"
                    ref={fileRef}
                    id="resume"
                    name="resume"
                    onChange={(e) => {
                      formik.setFieldValue('resume', e.target.files[0]);
                    }}
                    onBlur={formik.handleBlur}
                    accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .doc, .docx, .pdf, .txt"
                  />
                  {formik.touched.resume && formik.errors.resume ? (
                    <div className="text-[#F7CC32] text-xs">
                      {formik.errors.resume}
                    </div>
                  ) : null}
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

export default EvenCoOrdinatorPage;
