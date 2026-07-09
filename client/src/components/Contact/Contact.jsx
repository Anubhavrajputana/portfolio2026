import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
const API_URL =
  import.meta.env.VITE_BACKEND_URL ||
  import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email address.";
    }
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
  }

  return newErrors;
};


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setSuccessMessage("");
  setErrorMessage("");

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  setIsSubmitting(true);

  try {
    const response = 
      await fetch(`${API_URL}/api/contact`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Something went wrong."
      );
    }

    setSuccessMessage(
      "✅ Message sent successfully! I'll get back to you soon."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    setErrorMessage(
      error.message ||
        "Failed to send message."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="contact-badge">
            Get In Touch
          </span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project, internship opportunity or
            collaboration in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>harshchauhan7000@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaGithub />
              <div>
                <h4>GitHub</h4>
                <p>https://github.com/Anubhavrajputana</p>
              </div>
            </div>

            <div className="info-card">
              <FaLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <p>https://www.linkedin.com/in/harsh-chauhan-7b6a9a242/</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
  <small className="field-error">
    {errors.name}
  </small>
)}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
  <small className="field-error">
    {errors.email}
  </small>
)}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
  <small className="field-error">
    {errors.subject}
  </small>
)}

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
  <small className="field-error">
    {errors.message}
  </small>
)}

            <button
  type="submit"
  disabled={isSubmitting}
>
  {isSubmitting
    ? "Sending..."
    : "Send Message"}
</button>
{successMessage && (
  <p className="success-message">
    {successMessage}
  </p>
)}

{errorMessage && (
  <p className="error-message">
    {errorMessage}
  </p>
)}
          </motion.form>
        </div>
      </div>
    </section>
  );
}