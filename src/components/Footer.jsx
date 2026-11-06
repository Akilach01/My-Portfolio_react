import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              {portfolioConfig.personal.name}
            </h3>
            <p className="text-gray-400">Creating digital experiences that inspire.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-purple-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Education', href: '#education' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-purple-300 mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icons.Mail size={18} className="mt-0.5 text-purple-400 flex-shrink-0" />
                <span>{portfolioConfig.personal.email}</span>
              </a>

              <a
                href={`tel:${portfolioConfig.personal.phone}`}
                className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icons.Phone size={18} className="mt-0.5 text-purple-400 flex-shrink-0" />
                <span>{portfolioConfig.personal.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <Icons.MapPin size={18} className="mt-0.5 text-purple-400 flex-shrink-0" />
                <span>{portfolioConfig.personal.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-purple-500/10 pt-8 text-center text-gray-400"
        >
          <p>
            © {currentYear} {portfolioConfig.personal.name}. All rights reserved. Made with{' '}
            <span className="text-purple-400">💜</span> by{' '}
            <span className="text-purple-400">{portfolioConfig.personal.name}</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
