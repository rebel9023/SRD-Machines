'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, slideInFromBottom } from '../utils/animations';

const HeroSection = ({ title, subtitle, description, backgroundImage, showVerticalLine = true }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop'})`
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgb(49,48,116) 0%, #1E1D54 70%, #F26D83 100%)",
            opacity: 0.65,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {showVerticalLine && (
              <div className="flex items-center space-x-4">
                <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {title || "Powering Progress with"}
                </h1>
              </div>
            )}
            
            {!showVerticalLine && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {title || "Powering Progress with"}
              </h1>
            )}
            
            {subtitle && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {subtitle}
              </h2>
            )}
            
            {description && (
              <motion.p
                variants={slideInFromBottom}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
              >
                {description}
              </motion.p>
            )}
          </motion.div>

          {/* Right Content - Optional for specific pages */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* This can be used for additional content on specific pages */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
