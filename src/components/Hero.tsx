import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef1.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });
      
      gsap.from(textRef2.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-blue/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="overflow-hidden">
            <div ref={textRef1} className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent-blue/80">
                Creating Digital Experiences That Matter
              </h1>
            </div>
          </div>
          
          <div className="overflow-hidden">
            <div ref={textRef2}>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                We design and develop exceptional digital products that connect brands with their audience through meaningful interactions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  className="px-8 py-3 rounded-full bg-accent-blue text-white font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Our Work</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                
                <motion.button
                  className="px-8 py-3 rounded-full bg-dark-700 text-white font-medium border border-dark-600"
                  whileHover={{ scale: 1.05, backgroundColor: '#2C2C2C' }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="flex items-center flex-col"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;