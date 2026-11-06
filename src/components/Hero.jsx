import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              👋Hey, I'm <br></br>
              {' '}
              <span className="gradient-text">{portfolioConfig.personal.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-purple-400 h-20 mb-6"
            >
              <Typewriter
                words={portfolioConfig.roles}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              {portfolioConfig.personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 mb-8"
            >
              <motion.a
                href="https://www.linkedin.com/in/akila-c-371a84332/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                  alt="Linkedin"
                  className="w-10 h-10 hover:opacity-80 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="https://github.com/Akilach01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                  alt="GitHub"
                  className="w-10 h-10 hover:opacity-80 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1BVshUTkS1/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                  alt="Facebook"
                  className="w-10 h-10 hover:opacity-80 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="https://t.me/Aki_ch01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000"
                  alt="Telegram"
                  className="w-10 h-10 hover:opacity-80 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/aki_ch_507?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                  alt="Instagram"
                  className="w-10 h-10 hover:opacity-80 transition-opacity"
                />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.a
                href={portfolioConfig.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors"
              >
                Download CV
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-96 h-96"
            >
              {/* Gradient Background Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur-3xl opacity-30"
              />

              {/* Profile Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border-4 border-purple-500 glassmorphism flex items-center justify-center overflow-hidden">
                  <img
                    src={portfolioConfig.personal.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%234C1D95" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%23A78BFA"%3EAdd Your Profile Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-20"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
