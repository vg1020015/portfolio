import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper.jsx";
import { profile } from "../data/portfolioData.js";

const initialState = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      setStatus("success");
      setValues(initialState);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="contact"
      title="Let’s work together"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start min-w-0">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <p className="text-base text-ink/70 dark:text-paper/70 leading-relaxed max-w-md">
            Have a Shopify store, performance issue, or new idea?
            I’m open to freelance and collaboration opportunities.
          </p>

          <div className="space-y-3">

            <a
              href={`mailto:${profile.email}`}
              className="flex min-w-0 items-center gap-3 text-sm hover:text-terracotta transition"
            >
              <HiOutlineMail className="text-lg shrink-0" />
              <span className="min-w-0 break-all">{profile.email}</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center gap-3 text-sm hover:text-terracotta transition"
            >
              <FaLinkedin className="text-lg shrink-0" />
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >

          <div>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border-b border-ink/20 dark:border-paper/20 bg-transparent py-3 outline-none text-sm focus:border-terracotta transition"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border-b border-ink/20 dark:border-paper/20 bg-transparent py-3 outline-none text-sm focus:border-terracotta transition"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border-b border-ink/20 dark:border-paper/20 bg-transparent py-3 outline-none text-sm resize-none focus:border-terracotta transition"
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-terracotta text-white text-sm rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Message sent successfully.
            </p>
          )}

        </motion.form>

      </div>
    </SectionWrapper>
  );
}
