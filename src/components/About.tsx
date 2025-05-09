import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layers, Gem } from 'lucide-react';
import gsap from 'gsap';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-dark-800/60 backdrop-blur-md rounded-xl p-6 border border-dark-700"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-accent-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isInView) {
        gsap.from(textRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    }, sectionRef);
    
    return () => ctx.revert();
  }, [isInView]);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={textRef}>
            <motion.span 
              className="inline-block text-accent-blue font-medium mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              ABOUT US
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We create meaningful digital solutions for forward-thinking brands
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Founded in 2020, Athos is a creative digital agency focused on crafting exceptional user experiences. 
              We combine strategic thinking with cutting-edge technologies to deliver solutions that drive business growth 
              and create meaningful connections with users.
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our multidisciplinary team brings together expertise in design, development, and strategy
              to create cohesive digital experiences that resonate with audiences and achieve business objectives.
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <span className="block text-3xl font-bold text-accent-blue">85+</span>
                <span className="text-gray-400">Projects Completed</span>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <span className="block text-3xl font-bold text-accent-teal">40+</span>
                <span className="text-gray-400">Happy Clients</span>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <span className="block text-3xl font-bold text-accent-pink">12+</span>
                <span className="text-gray-400">Team Members</span>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={Code} 
              title="Development" 
              description="We build robust, scalable web and mobile applications using modern technologies and frameworks."
              delay={0.1}
            />
            <FeatureCard 
              icon={Layers} 
              title="Design" 
              description="We create beautiful, intuitive interfaces that engage users and elevate brand experiences."
              delay={0.2}
            />
            <FeatureCard 
              icon={Gem} 
              title="Strategy" 
              description="We provide strategic guidance to help businesses grow and reach their full potential."
              delay={0.3}
            />
            <FeatureCard 
              icon={Layers} 
              title="Branding" 
              description="We craft memorable brand identities that connect with audiences and stand out."
              delay={0.4}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </section>
  );
};

export default About;