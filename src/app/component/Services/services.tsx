'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  Heart, 
  Stethoscope, 
  Users, 
  Bone, 
  Home, 
  Activity,
  ChevronRight,
  Star,
  Shield,
  CheckCircle,
  Clock,
  Award,
  UserCheck
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
  gradient: string;
  delay: number;
}

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 1,
      title: 'Internal Medicine',
      description: [
        'Comprehensive evaluation of adult medical complaints',
        'Management of multi-system and chronic conditions'
      ],
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/5',
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Cardiometabolic Diseases',
      description: [
        'Hypertension',
        'Diabetes',
        'Dyslipidemia',
        'Metabolic syndrome'
      ],
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-red-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-red-500/10 to-pink-500/5',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Infectious Diseases',
      description: [
        'Tropical infections',
        'Fever of unknown origin',
        'Respiratory & gastrointestinal infections'
      ],
      icon: <Activity className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500/10 to-emerald-500/5',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Rheumatology & Joint Problems',
      description: [
        'Joint pain, back pain, autoimmune symptoms',
        'Long-term and multidisciplinary management'
      ],
      icon: <Bone className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-amber-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-amber-500/10 to-orange-500/5',
      delay: 0.4,
    },
    {
      id: 5,
      title: 'Preventive & Executive Health',
      description: [
        'Health screening for high-stress professions',
        'Routine check-ups',
        'Lifestyle and risk-factor modification'
      ],
      icon: <Home className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-purple-500 to-violet-500',
      gradient: 'bg-gradient-to-br from-purple-500/10 to-violet-500/5',
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
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

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section ref={ref} className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold mb-4 md:mb-6"
          >
            <Star className="w-4 h-4" />
            Clinical Services
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Dr. Jamil provides expert assessment and management in
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              custom={service.delay}
            >
              <motion.div
                variants={cardHoverVariants}
                className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  animate={floatAnimation}
                  className="absolute -top-6 -right-6 w-24 h-24 opacity-10"
                >
                  <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-full`}></div>
                </motion.div>

                <div className="p-6 sm:p-8">
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 md:p-4 rounded-2xl mb-4 md:mb-6 ${service.gradient}`}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className={`p-3 bg-gradient-to-br ${service.color} rounded-xl text-white`}
                    >
                      {service.icon}
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <ul className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 list-disc list-inside">
                    {service.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
