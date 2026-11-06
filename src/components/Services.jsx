import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { portfolioConfig } from '../config/portfolio.config';

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {portfolioConfig.services.map((service, index) => {
            const IconComponent = Icons[service.icon];

            return (
              <motion.div
                key={service.id}
                custom={index}
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(109, 40, 217, 0.3)',
                }}
                className="glassmorphism p-6 rounded-lg hover-glow group cursor-pointer"
              >
                <div className="mb-4 w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center group-hover:bg-purple-600/50 transition-colors">
                  {IconComponent && <IconComponent size={24} className="text-purple-300" />}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
