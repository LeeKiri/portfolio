import React, { useState } from "react";

const ContactForm = () => {
  const [formObject, setFormObject] = useState({
    email: "",
    user: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };
  return (
    <>
      <form
        className="form"
        action="mailto:leekiritempleton@gmail.com"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
        id="contactForm"
      >
        <div className="form-group">
          <label className="text-white" for="exampleFormControlInput1">Email address</label>
          <input
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={formObject.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="text-white" for="exampleFormControlInput1">Name</label>
          <input
            name="user"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Betty Boop"
            value={formObject.user}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="text-white" for="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="text"
            value={formObject.text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="formBtn btn btn-secondary mb-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
