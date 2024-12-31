import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    // note : i used emailjs libirary for collect the form data and recived it into my email
    // emailjs() => is a function in emailjs libirary for collecting the form data
    emailjs
      .sendForm(
        "service_nt3oo48", // service-id
        "template_l9vz4hb", // template-id
        form.current,
        "lWiRqp-JHI-566fpM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setFormError(true);
        }
      );
    // reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-lg mx-auto bg-n-8/30 relative z-5 p-10"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-n-3">
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
          className="mt-1 block w-full px-3 py-2 border border-yellow-300/20 rounded-md bg-n-7/40 outline-none caret-yellow-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-n-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          className="mt-1 block w-full px-3 py-2 border border-yellow-300/20 rounded-md bg-n-7/40 outline-none caret-yellow-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-n-3">
          Message
        </label>
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          required
          className="mt-1 block w-full px-3 py-2 border  border-yellow-300/20 rounded-md bg-n-7/40 outline-none caret-yellow-300"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full text-n-7 font-bold font-code bg-amber-400 py-2 px-4 rounded-md transition-all mb-5 hover:bg-amber-500 active:scale-95"
      >
        Send Message
      </button>
      {formSubmitted && (
        <p className="text-green-500">Thank you for your message!</p>
      )}
      {formError && (
        <p className="text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
