"use client";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeClosedIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.send(
        "service_ah1oitq", // Replace with your EmailJS service ID
        "template_3zmhvjn", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "E_dhcYmNI6VB81Wj5" // Replace with your EmailJS public key
      );

      handleServerResponse(true, "Thank you, your message has been sent!");
    } catch (error) {
      handleServerResponse(false, "There was an error sending your message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          placeholder="Your name"
          disabled={status.submitting}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          placeholder="your.email@example.com"
          disabled={status.submitting}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
          placeholder="Your message..."
          disabled={status.submitting}
        />
      </div>

      {status.info.error && (
        <div className="text-red-500 text-sm">{status.info.msg}</div>
      )}
      {status.submitted && (
        <div className="text-green-500 text-sm">{status.info.msg}</div>
      )}

      <button
        type="submit"
        disabled={status.submitting}
        className="gradient-border inline-block w-full"
      >
        <span className="glass-effect px-8 py-3 inline-block hover-lift w-full text-white">
          {status.submitting ? "Sending..." : "Send Message"}
        </span>
      </button>
    </form>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "richardkortey3@gmail.com",
      link: "mailto:richardkortey3@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Accra, Ghana",
    },
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass-effect p-4 rounded-lg hover-lift"
        >
          <div className="flex items-center space-x-4">
            <div className="text-purple-400">{detail.icon}</div>
            <div>
              <h3 className="text-white font-medium">{detail.title}</h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-white/70 hover:text-purple-400 transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-white/70">{detail.value}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="gradient-border p-1 rounded-xl"
            >
              <div className="glass-effect rounded-xl p-6">
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
