'use client';

import React from 'react';
import { motion, Transition, Variants } from 'framer-motion';
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
  UserCheck,
  Pill,
  Thermometer,
  HeartPulse,
  ShieldCheck
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
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
      description: 'Comprehensive evaluation of adult medical complaints and management of multi-system chronic conditions.',
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/5',
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Cardiometabolic Diseases',
      description: 'Expert management of hypertension, diabetes, dyslipidemia, and metabolic syndrome with personalized care plans.',
      icon: <HeartPulse className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-red-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-red-500/10 to-pink-500/5',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Infectious Diseases',
      description: 'Specialized care for tropical infections, fever of unknown origin, and respiratory/gastrointestinal infections.',
      icon: <Thermometer className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-emerald-500 to-green-500',
      gradient: 'bg-gradient-to-br from-emerald-500/10 to-green-500/5',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Rheumatology & Joint Problems',
      description: 'Special interest in joint pain, back pain, autoimmune symptoms with long-term multidisciplinary management.',
      icon: <Bone className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-purple-500 to-violet-500',
      gradient: 'bg-gradient-to-br from-purple-500/10 to-violet-500/5',
      delay: 0.4,
    },
    {
      id: 5,
      title: 'Preventive & Executive Health',
      description: 'Health screening for high-stress professions, routine check-ups, and lifestyle risk-factor modification.',
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-amber-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-amber-500/10 to-orange-500/5',
      delay: 0.5,
    },
    {
      id: 6,
      title: 'Chronic Disease Management',
      description: 'Ongoing comprehensive care for long-term conditions with regular monitoring and treatment optimization.',
      icon: <Activity className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'from-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-indigo-500/10 to-blue-500/5',
      delay: 0.6,
    },
  ];

  const features = [
    'Comprehensive Medical Evaluations',
    'Personalized Treatment Plans',
    'Chronic Disease Management',
    'Preventive Health Screening',
    'Multidisciplinary Approach',
    'Long-term Health Partnerships',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      } as Transition,
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      } as Transition,
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  const stats = [
    {
      id: 1,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      color: 'text-blue-500',
      duration: 2,
      delay: 0.8,
    },
    {
      id: 2,
      value: 5000,
      suffix: '+',
      label: 'Patients Treated',
      icon: <UserCheck className="w-5 h-5 md:w-6 md:h-6" />,
      color: 'text-green-500',
      duration: 3,
      delay: 0.9,
    },
    {
      id: 3,
      value: 100,
      suffix: '+',
      label: 'Medical Papers',
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      color: 'text-amber-500',
      duration: 2.5,
      delay: 1.0,
    },
  ];

  return (
    <section ref={ref} className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
  
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-100 rounded-full blur-3xl opacity-20"></div>
      
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
            <Shield className="w-4 h-4" />
            Clinical Services
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Expert Medical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Specializations
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Dr. Jamil provides comprehensive assessment and management in Internal Medicine with special focus areas including cardiometabolic diseases, rheumatology, and preventive healthcare.
          </p>
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

                 
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: service.delay,
                      }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                  </div>
                </div>

               
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 origin-left"
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 md:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
         
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Holistic <span className="text-blue-600">Healthcare</span> Approach
                </h3>
                <p className="text-gray-600 mb-6 md:mb-8">
                  As an Internal Medicine specialist, Dr. Jamil focuses on comprehensive patient care, addressing not just symptoms but underlying conditions through evidence-based medicine and personalized treatment strategies.
                </p>
                
            
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

             
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: stat.delay }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={stat.duration}
                          suffix={stat.suffix}
                          separator=","
                          decimals={0}
                          decimal="."
                          delay={stat.delay}
                        />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    
                    <div className="mt-3">
                      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${Math.min(stat.value, 100)}%` } : {}}
                          transition={{ delay: stat.delay + 0.5, duration: 1.5, ease: 'easeOut' }}
                          className={`h-full ${stat.color.replace('text-', 'bg-')} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center mt-10 md:mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl relative overflow-hidden">
           
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 2,
                }}
                className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/10 rounded-full"
              ></motion.div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Comprehensive Internal Medicine Care
              </h3>
              
              <p className="text-white/90 text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
                Dr. Jamil specializes in adult medicine with expertise in complex multi-system diseases, chronic condition management, and preventive healthcare strategies tailored to individual patient needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={15}
                        duration={2.5}
                        suffix="+"
                        delay={1.6}
                      />
                    ) : '0+'}
                  </div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={100}
                        duration={2}
                        suffix="+"
                        delay={1.8}
                      />
                    ) : '0+'}
                  </div>
                  <div className="text-white/80 text-sm">Medical Papers</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={5000}
                        duration={3}
                        suffix="+"
                        separator=","
                        delay={2.0}
                      />
                    ) : '0+'}
                  </div>
                  <div className="text-white/80 text-sm">Patients Treated</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
                >
                  Book Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  View Specializations
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-8 md:mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full text-sm font-semibold">
            <Award className="w-4 h-4" />
            <span>FCPS Certified • Internal Medicine Specialist • Gold Medalist</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}