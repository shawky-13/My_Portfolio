import { useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/shokhafiz@gmail.com";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormSubmitted(false);
    setFormError(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New portfolio contact message",
          _template: "table",
          _captcha: "true",
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormError(error?.text || error?.message || "Unable to send your message.");
    }
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
        <p className="text-red-500" role="alert">
          Something went wrong: {formError}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
