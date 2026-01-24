"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus({ loading: false, success: data.message, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus({ loading: false, success: null, error: errorData.error });
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="contact">
          {console.log(process.env.EMAIL,process.env.PASSWORD,"jghhfgfdffc" )}
      <div className="container">
        <div className="row mt-5 justify-content-center" data-aos="fade-up">
          <div className="col-lg-10">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="my-3">
                {status.loading && <div className="loading">Loading...</div>}
                {status.error && <div className="error-message">{status.error}</div>}
                {status.success && <div className="sent-message">{status.success}</div>}
              </div>
              <div className="text-center">
                <button type="submit" style={{ backgroundColor: "steelblue" }}>
                  {status.success ? 'Message sent' : 'Send Message'}
                  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

