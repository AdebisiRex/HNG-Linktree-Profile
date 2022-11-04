import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container border">
        <div>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask about anything</p>

          <form action="">
            <div className="mb-3">
              <label htmlFor="first_name">First Name</label>
              <input
                className="form-control"
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name">Last Name</label>
              <input
                className="form-control"
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Send me a message and I'll reply you as soon as possible"
                id="message"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                className="form-radio me-2"
                type="radio"
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email">You agree to providing data to AdebisiRex who may contact you</label>
            </div>
            <button></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
