import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

const SocialIcon = ({ name }) => {
  if (name === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481A10.013 10.013 0 0022 12c0-5.523-4.477-10-10-10z" />
      </svg>
    );
  }

  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    );
  }

  return <Icons.Mail size={20} className="text-black" />;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError(false);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: portfolioConfig.personal.email,
        },
        { publicKey }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (submitError) {
      console.error('EmailJS submission failed:', submitError);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">
            {portfolioConfig.contact.title}
          </h2>
          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            {portfolioConfig.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glassmorphism px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full glassmorphism px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full glassmorphism px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading || submitted}
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg text-white font-semibold transition-colors"
              >
                {loading
                  ? portfolioConfig.contact.submitMessage
                  : submitted
                  ? portfolioConfig.contact.successMessage
                  : 'Send Message'}
              </motion.button>
              {error && (
                <p className="text-red-400 text-sm text-center">
                  {portfolioConfig.contact.errorMessage}
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glassmorphism p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icons.Mail className="text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-1">Email</h4>
                  <a
                    href={`mailto:${portfolioConfig.personal.email}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {portfolioConfig.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icons.Phone className="text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-1">Phone</h4>
                  <a
                    href={`tel:${portfolioConfig.personal.phone}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {portfolioConfig.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icons.MapPin className="text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-1">Location</h4>
                  <p className="text-gray-400">{portfolioConfig.personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glassmorphism p-6 rounded-lg">
              <h4 className="font-semibold text-purple-300 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {portfolioConfig.social.map((social) => {
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-colors"
                      title={social.name}
                    >
                      <SocialIcon name={social.name} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
