import { motion } from 'framer-motion';
import { CalendarDays, GraduationCap, Landmark, School } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

const educationIcons = {
  School,
  Landmark,
  GraduationCap,
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Education</h2>
        </motion.div>

        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 via-purple-600 to-transparent md:-translate-x-1/2" />

          {portfolioConfig.education.map((item, index) => {
            const IconComponent = educationIcons[item.icon] || GraduationCap;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative mb-10 pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 border-4 border-slate-950 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 z-10">
                  <IconComponent size={18} />
                </div>

                <div className={index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}>
                  <div className="glassmorphism rounded-lg p-6 hover-glow">
                    <h3 className="text-xl font-bold text-white mb-2">{item.institution}</h3>
                    <p className="text-purple-300 font-semibold mb-3">{item.qualification}</p>
                    <div className={`flex items-center gap-2 text-gray-400 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <CalendarDays size={16} className="text-purple-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
