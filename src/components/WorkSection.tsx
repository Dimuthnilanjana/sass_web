import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkCard from './WorkCard';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: 1,
    title: "Nebula Digital Platform",
    category: "Web Development",
    description: "A comprehensive digital platform for managing and analyzing cloud resources.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    id: 2,
    title: "Pulse Analytics Dashboard",
    category: "UI/UX Design",
    description: "An intuitive analytics dashboard providing real-time insights for business intelligence.",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI/UX", "Data Visualization", "Dashboard"],
  },
  {
    id: 3,
    title: "Vortex E-commerce",
    category: "Web Development",
    description: "A modern e-commerce platform with seamless shopping experience and integrated payment solutions.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["E-commerce", "React", "Payment Integration"],
  },
  {
    id: 4,
    title: "Quantum Brand Identity",
    category: "Branding",
    description: "Complete brand identity redesign for a tech startup, including logo, guidelines, and marketing materials.",
    image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Branding", "Logo Design", "Identity"],
  },
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll('.work-card');
    
    gsap.set(cards, { 
      y: 100,
      opacity: 0
    });

    ScrollTrigger.batch(cards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out"
        });
      },
      start: "top 80%"
    });

    // Create the stacking effect on scroll
    if (cards.length > 1 && window.innerWidth > 768) {
      gsap.to(cards, {
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        y: (i) => i * 20, // Each card moves down a bit as you scroll
        ease: "none"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="works" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            className="inline-block text-accent-purple font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            OUR WORK
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Selected projects we're proud of
          </motion.h2>
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our portfolio of innovative digital solutions that have helped our clients achieve their business goals.
          </motion.p>
        </div>
        
        <div ref={cardsContainerRef} className="space-y-10 md:space-y-16">
          {works.map((work, index) => (
            <WorkCard 
              key={work.id} 
              work={work} 
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <motion.button
            className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:bg-dark-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </section>
  );
};

export default WorkSection;