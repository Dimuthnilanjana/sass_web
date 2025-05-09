import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface WorkCardProps {
  work: Work;
  index: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={cardRef}
      className={`work-card relative rounded-xl overflow-hidden group cursor-pointer`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className={`grid md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:flex md:flex-row-reverse'} items-center gap-8`}>
        <div className="relative h-60 md:h-80 overflow-hidden rounded-xl">
          <motion.div
            className="absolute inset-0 bg-dark-900/80 opacity-0 z-10 transition-opacity duration-300 flex items-center justify-center"
            whileHover={{ opacity: 1 }}
          >
            <button className="px-6 py-3 bg-accent-blue rounded-full text-white font-medium flex items-center">
              View Project
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
          
          <motion.img 
            src={work.image} 
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        
        <div className="px-4 py-6 md:py-0">
          <div className="flex items-center space-x-4 mb-3">
            <span className="text-accent-blue font-medium">{work.category}</span>
            <span className="text-gray-400">#{`00${work.id}`.slice(-3)}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-blue transition-colors">
            {work.title}
          </h3>
          
          <p className="text-gray-300 mb-6">
            {work.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-3 py-1 bg-dark-800 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;