import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { portfolioConfig } from '../config/portfolio.config';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{portfolioConfig.about.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {portfolioConfig.about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glassmorphism p-8 rounded-lg">
              <p className="text-gray-300">
                With years of experience in building digital solutions, I bring expertise
                across the full stack to create impactful applications.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            Skills & Technologies
          </h3>

          <Swiper
            modules={[Autoplay, FreeMode]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            loop={true}
            speed={3000}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 15 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
            className="w-full"
          >
            {portfolioConfig.skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glassmorphism p-6 rounded-lg text-center hover-glow cursor-pointer h-32 flex flex-col items-center justify-center"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-12 h-12 mb-2 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <p className="text-sm font-semibold text-purple-300">{skill.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
