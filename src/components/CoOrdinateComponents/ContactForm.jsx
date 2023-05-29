import React from 'react';
import { Fade } from 'react-reveal';
const ContactForm = () => {
  return (
    <div>
      <Fade
        bottom
        big
        duration={1500}
      >
        <form
          action=""
          className="lg:w-1/2 w-full lg:p-1 p-2 mx-auto"
        >
          <div className="flex gap-2 my-1">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-gray-100"> First name*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-gray-100">Last name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
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
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="my-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-100"> Phone</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
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
              />
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
          <div className="my-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-100">
                  Select your desired event style
                </span>
              </label>
              <select className="select">
                <option>On-Premise</option>
                <option>Drop-Off Catering</option>
                <option>Pick-Up Catering</option>
                <option>Full-Service Catering</option>
              </select>
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
                required
                type="text"
                placeholder="Nature of this Event(e.g., Birthday Party or Business Dinner)"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="my-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-100"> Event Date*</span>
              </label>
              <input
                required
                type="date"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="my-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-100"> Start Time</span>
              </label>
              <input
                type="time"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="my-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-100"> End Time*</span>
              </label>
              <input
                type="time"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="my-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-100">
                  Number of People (Minimum of 10) *
                </span>
              </label>
              <input
                required
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
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
              ></textarea>
            </div>
          </div>
          <button className="btn hover:animate-pulse btn-primary btn-lg my-5">
            Submit
          </button>
        </form>
      </Fade>
    </div>
  );
};

export default ContactForm;
