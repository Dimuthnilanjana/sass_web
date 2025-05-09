import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Let's create something<br />amazing together
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Have a project in mind? We'd love to hear about it. Get in touch and let's bring your vision to life.
            </motion.p>
            <motion.button
              className="px-8 py-3 rounded-full bg-accent-blue text-white font-medium flex items-center"
              whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Email</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold text-white mb-2">ATHOS</p>
              <p className="text-gray-400">© 2025 Athos Digital. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;