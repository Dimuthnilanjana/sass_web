import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Layout, Globe, Lightbulb, BarChart } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "We build fast, responsive, and accessible websites using modern technologies."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences that drive conversions."
  },
  {
    icon: Layout,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android."
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence and reach."
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Developing comprehensive brand strategies that connect with your audience."
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Data-driven insights to optimize your digital presence and performance."
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const Icon = service.icon;
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-accent-blue transition-all duration-300 hover:transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.3 });
  
  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            className="inline-block text-accent-teal font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            OUR SERVICES
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert solutions for digital growth
          </motion.h2>
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a comprehensive range of digital services to help your business succeed in the digital landscape.
          </motion.p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </section>
  );
};

export default Services;