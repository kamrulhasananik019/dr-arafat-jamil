'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  GraduationCap,
  Hospital,
  Award,
  Stethoscope,
  HeartPulse,
  Users,
  Shield,
  Brain,
  Target,
  Heart,
  Star,
  Sparkles,
} from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
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

  const approachPoints = [
    { icon: Users, text: 'Careful listening', color: 'from-blue-500 to-cyan-400' },
    { icon: Brain, text: 'Accurate diagnosis', color: 'from-violet-500 to-purple-400' },
    { icon: Target, text: 'Structured treatment planning', color: 'from-emerald-500 to-green-400' },
    { icon: Shield, text: 'Preventive health', color: 'from-amber-500 to-yellow-400' },
    { icon: HeartPulse, text: 'Lifestyle modification', color: 'from-rose-500 to-pink-400' },
    { icon: Heart, text: 'Long-term partnership', color: 'from-indigo-500 to-blue-400' },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-sky-50 via-white to-blue-50 py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-sky-200 to-transparent rounded-full blur-3xl opacity-20" />
      
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          rotate: [0, 120, 240],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 left-10"
      >
        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full opacity-20"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full text-sm font-semibold shadow-lg">
            <Stethoscope className="w-4 h-4" />
            <Sparkles className="w-4 h-4" />
            About Dr. Jamil
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            A Career Built on
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Clinical Excellence & Trust
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          <div>
            <motion.div variants={itemVariants} className="relative">
              <motion.div animate={floatAnimation} className="relative mx-auto max-w-md">
                <div className="relative aspect-[4/4] rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-blue-500/20 border-[10px] border-white">
                  <Image 
                    src="/img/about.jpeg" 
                    alt="Dr. Arafat Jamil" 
                    fill 
                    className="object-cover" 
                    priority 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-400/10 rounded-[2.5rem]"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute -top-4 -left-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-white p-4 rounded-2xl shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Gold Medalist</p>
                      <p className="text-xs opacity-90">FCPS Excellence</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-2xl shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Military Doctor</p>
                      <p className="text-xs opacity-90">Lt. Colonel</p>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r from-blue-200 to-sky-100 blur-2xl opacity-30" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-gradient-to-r from-sky-200 to-blue-100 blur-2xl opacity-30" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 lg:mt-12 grid lg:grid-cols-2 md:grid-cols-1 gap-6">
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }} 
                className="relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 shadow-lg border border-amber-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-200 to-yellow-100 rounded-bl-full opacity-50" />
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-xl">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-700 flex items-center gap-2">
                      {inView && <CountUp start={0} end={1} duration={2} />}
                      <Star className="w-5 h-5 fill-amber-500" />
                    </div>
                    <p className="text-sm font-medium text-amber-800">Gold Medal</p>
                    <p className="text-xs text-amber-600">FCPS Academic Excellence</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }} 
                className="relative bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 shadow-lg border border-blue-200 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-200 to-sky-100 rounded-bl-full opacity-50" />
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl">
                    <Hospital className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-700">
                      {inView && <CountUp start={0} end={15} duration={2.5} />}+
                    </div>
                    <p className="text-sm font-medium text-blue-800">Years Experience</p>
                    <p className="text-xs text-blue-600">Military & Navy Hospitals</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-sky-400 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Education & Excellence</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Dr. Arafat Jamil completed his <strong>MBBS from Armed Forces Medical College (AFMC)</strong>,
                    followed by <strong>FCPS in Internal Medicine</strong> from the Bangladesh College of
                    Physicians and Surgeons, where he was awarded the <strong className="text-amber-600">Gold Medal for outstanding academic excellence</strong>.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-400 rounded-lg">
                      <Hospital className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Clinical Experience</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    He has served across multiple <strong>Combined Military Hospitals</strong> and <strong>Bangladesh Navy Hospitals</strong>, managing complex internal medicine cases, delivering acute care, and guiding multidisciplinary treatment plans.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 shadow-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-400 rounded-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Leadership Role</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Currently serving as <strong>Personal Physician to the Chief Advisor</strong>, his role bridges advanced medical care, diplomacy, and national leadership.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 bg-gradient-to-br from-white to-sky-50 rounded-2xl p-6 md:p-8 shadow-xl border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-400 rounded-xl">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Medical Philosophy</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {approachPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all"
              >
                <div className={`p-2 bg-gradient-to-r ${point.color} rounded-lg`}>
                  <point.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800">{point.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}