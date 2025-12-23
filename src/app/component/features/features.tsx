'use client';

import React from 'react';
import { Clock, AlertCircle, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  delay: number;
}

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: FeatureItem[] = [
    {
      id: 1,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency medical services with immediate response teams. We ensure prompt care and attention whenever you need it most.',
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-blue-500 to-sky-400',
      gradient: 'bg-gradient-to-br from-blue-500/10 to-blue-500/5',
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Emergency Response',
      description: 'Advanced emergency protocols and rapid response systems for critical care situations. Immediate medical attention guaranteed.',
      icon: <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-red-500 to-orange-400',
      gradient: 'bg-gradient-to-br from-red-500/10 to-red-500/5',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Expert Doctors',
      description: 'Board-certified specialists with extensive experience in their respective fields. Continuous training and professional development.',
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-emerald-500 to-green-400',
      gradient: 'bg-gradient-to-br from-emerald-500/10 to-emerald-500/5',
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full blur-3xl opacity-10"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-sky-400 to-blue-300 rounded-full blur-3xl opacity-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-sky-400 text-white text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Medical</span> Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional healthcare services with cutting-edge technology and compassionate care
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants} whileHover="hover" custom={feature.delay}>
              <motion.div
                variants={cardHoverVariants}
                className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6 sm:p-8">
                  <motion.div whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }} className={`inline-flex p-3 md:p-4 rounded-2xl mb-4 md:mb-6 ${feature.gradient}`}>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: feature.delay }}
                      className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl text-white`}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{feature.description}</p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: feature.delay }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2 rotate-45`}></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
