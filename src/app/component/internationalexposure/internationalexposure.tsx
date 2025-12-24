'use client';

import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Plane, 
  Award, 
  Shield,
  MapPin, 
  BriefcaseMedical,
  Crosshair,
  Network,
  Star,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Users
} from 'lucide-react';

export default function InternationalExposure() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const officialDelegations = [
    { 
      country: 'Japan', 
      flag: '🇯🇵', 
      description: 'High-level diplomatic medical consultations and healthcare system analysis', 
      color: 'from-red-500/20 to-red-300/20',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    { 
      country: 'USA', 
      flag: '🇺🇸', 
      description: 'Medical diplomacy exchange and advanced healthcare protocols observation', 
      color: 'from-blue-600/20 to-blue-400/20',
      icon: <HeartPulse className="w-5 h-5" />
    },
    { 
      country: 'China', 
      flag: '🇨🇳', 
      description: 'Integration of traditional Chinese medicine with modern clinical practices', 
      color: 'from-red-600/20 to-yellow-500/20',
      icon: <Crosshair className="w-5 h-5" />
    },
    { 
      country: 'Egypt', 
      flag: '🇪🇬', 
      description: 'Study of ancient medical practices and contemporary healthcare infrastructure', 
      color: 'from-red-700/20 to-black/20',
      icon: <BriefcaseMedical className="w-5 h-5" />
    },
  ];

  const additionalCountries = [
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Pakistan', flag: '🇵🇰' },
    { name: 'Sri Lanka', flag: '🇱🇰' }
  ];

  const expertiseAreas = [
    { title: 'Global Health Diplomacy', description: 'Navigating international healthcare policies' },
    { title: 'Cross-Cultural Medical Practices', description: 'Adapting treatment across diverse populations' },
    { title: 'International Healthcare Systems', description: 'Comparative analysis of global health models' },
    { title: 'Diplomatic Medical Protocols', description: 'Official delegation healthcare management' },
    { title: 'Global Disease Management', description: 'International epidemiology and prevention' },
    { title: 'Medical Standards Integration', description: 'Harmonizing clinical practices globally' }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      } as Transition,
    },
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <section 
      ref={ref} 
      className="relative py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-sky-50"
    >
     
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-sky-100/30 to-transparent rounded-full blur-3xl"></div>
        
 
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-500/20 mb-8"
          >
            <Award className="w-4 h-4" />
            <span>International Medical Experience</span>
            <Shield className="w-4 h-4" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Global Health{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Leadership
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As the Personal Physician to the Chief Advisor, Dr. Jamil has accompanied high-level 
            international delegations, gaining unique insights into global healthcare systems and 
            cross-cultural medical practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="bg-white rounded-3xl shadow-xl shadow-blue-500/5 p-8 md:p-10 border border-gray-100">
             
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl">
                  <BriefcaseMedical className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Official Delegation Visits
                  </h3>
                  <p className="text-gray-500 mt-1">Accompanying the Chief Advisor</p>
                </div>
              </div>

             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {officialDelegations.map((country, index) => (
                  <motion.div
                    key={country.country}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <div className="h-full bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${country.color} border border-gray-100`}>
                          <div className="text-2xl">{country.flag}</div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xl font-bold text-gray-900">{country.country}</h4>
                            <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-sky-400 text-white text-xs font-medium rounded-full">
                              OFFICIAL
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Diplomatic Medical Mission</p>
                        </div>
                      </div>

                   
                      <p className="text-gray-600 mb-6 leading-relaxed">{country.description}</p>

                
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          {country.icon}
                          <span className="text-sm font-medium text-blue-600">Medical Diplomacy</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

         
          <div className="space-y-8">
           
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl shadow-blue-500/5 p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center">

                <div className="relative mb-6">
                  <motion.div
                    animate={pulseAnimation}
                    className="relative w-48 h-48"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-full flex items-center justify-center">
                      <Globe className="w-20 h-20 text-blue-600" />
                    </div>
                    
                  
                    <motion.div
                      animate={{
                        rotate: 360,
                        x: [0, 30, 0, -30, 0],
                        y: [0, 15, 0, -15, 0]
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                        x: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                        y: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }
                      }}
                      className="absolute top-4 right-4"
                    >
                      <Plane className="w-6 h-6 text-amber-500" />
                    </motion.div>
                  </motion.div>
                </div>

             
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-700">16+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-sky-50 rounded-xl">
                    <div className="text-2xl font-bold text-sky-700">4</div>
                    <div className="text-sm text-gray-600">Official Missions</div>
                  </div>
                </div>
              </div>
            </motion.div>

         
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl shadow-xl shadow-blue-500/5 p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-400 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">International Experience</h4>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {additionalCountries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group cursor-pointer"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-sm text-gray-700 group-hover:text-blue-700 font-medium">
                      {country.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50/50 to-sky-50/50 rounded-3xl p-8 md:p-10 border border-blue-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full text-sm font-semibold mb-4">
                <Network className="w-4 h-4" />
                Global Medical Expertise
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                International Healthcare Leadership
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized knowledge acquired through diplomatic medical missions and global health engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((expertise, index) => (
                <motion.div
                  key={expertise.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-sky-100 rounded-lg group-hover:from-blue-200 group-hover:to-sky-200 transition-colors">
                      <Star className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{expertise.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{expertise.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

        
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
              className="mt-12 pt-8 border-t border-blue-200 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
                <Users className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700 font-medium">
                  <span className="text-blue-600">Diplomatic Medical Consultant</span> • Integrating global insights with clinical excellence
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              FCPS (Internal Medicine)
            </span>
            <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
              Gold Medalist
            </span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              Military Doctor
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Diplomatic Physician
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}