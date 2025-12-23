'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  User, 
  Award, 
  Shield, 
  Star, 
  ChevronRight,
  Globe,
  Heart,
  Users
} from 'lucide-react';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.3,
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

  const rotateAnimation = {
    rotateY: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  };


  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100 py-12 md:py-16 lg:py-20 xl:py-24"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-sky-200 to-transparent rounded-full blur-3xl opacity-20"></div>
      
      {/* Animated floating elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-10 left-10 md:top-20 md:left-20"
      >
        <div className="w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full opacity-20"></div>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
        className="absolute bottom-20 right-20 md:bottom-32 md:right-32"
      >
        <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-sky-400 to-blue-300 rounded-full opacity-15"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full text-sm md:text-base font-semibold shadow-lg mb-6"
              >
                <Award className="w-4 h-4 md:w-5 md:h-5" />
                Internist • Gold Medalist (FCPS)
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                variants={itemVariants}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6"
              >
                Dr. Lt Col{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                  Arafat Jamil
                </span>
                <br />
                <span className="lg:text-5xl md:text-4xl sm:text-2xl text-gray-800">
                  Internal Medicine Specialist
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8"
              >
                Dr. Lt Col Arafat Jamil is a highly trained Internist based in
                Dhaka, Bangladesh, with extensive clinical, academic, and
                international experience. He currently serves as the Personal
                Physician to the Honorable Chief Advisor of the Interim Government
                of Bangladesh, Professor Dr. Muhammad Yunus.
              </motion.p>

              {/* Authority Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 rounded-xl mb-8"
              >
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <div>
                  <p className="text-sm md:text-base font-semibold text-gray-800">
                    Personal Physician to Chief Advisor
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Interim Government of Bangladesh
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/appointment"
                    className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 text-base md:text-lg"
                  >
                    <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                    Book Appointment
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/about"
                    className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 text-base md:text-lg"
                  >
                    <User className="w-5 h-5 md:w-6 md:h-6" />
                    View Profile
                    <Heart className="w-4 h-4 md:w-5 md:h-5 group-hover:text-red-500 transition-colors" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div 
            variants={imageVariants} 
            className="order-1 lg:order-2 relative"
          >
            <div className="relative flex justify-center lg:justify-end">
              {/* Main Image Container */}
              <motion.div
                animate={floatAnimation}
                className="relative z-20"
              >
                <div className="relative w-[280px] h-[380px] xs:w-[320px] xs:h-[420px] sm:w-[380px] sm:h-[500px] md:w-[420px] md:h-[550px] lg:w-[450px] lg:h-[600px] xl:w-[480px] xl:h-[620px]">
                  <motion.img
                    src="./img/hero.png"
                    alt="Dr. Lt Col Arafat Jamil"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  
                  {/* Glow effect behind image */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full blur-3xl opacity-20"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute top-6 -left-4 sm:left-4 md:left-8 lg:-left-6 bg-white p-3 md:p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-bold text-gray-900">Gold Medalist</div>
                    <div className="text-xs md:text-sm text-gray-600">FCPS</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="absolute top-1/3 -right-2 sm:right-4 md:right-8 lg:-right-6 bg-gradient-to-r from-emerald-500 to-green-400 text-white p-3 md:p-4 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold">MD</div>
                  <div className="text-xs md:text-sm opacity-90">Medicine</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="absolute bottom-20 -left-2 sm:left-8 md:left-12 lg:-left-8 bg-gradient-to-r from-amber-500 to-yellow-400 text-white p-3 md:p-4 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold">Lt Col</div>
                  <div className="text-xs md:text-sm opacity-90">Army Medical</div>
                </div>
              </motion.div>

              <motion.div
                animate={rotateAnimation}
                className="absolute top-1/2 right-0 h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-200 to-sky-100 blur-3xl opacity-30"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}