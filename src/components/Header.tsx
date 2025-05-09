import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <motion.a
    href={href}
    className="group relative px-3 py-2 text-sm font-medium transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">{text}</span>
    <motion.span
      className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent-blue"
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.2 }}
    />
  </motion.a>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          className="text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          ATHOS
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink href="#home" text="Home" />
          <NavLink href="#about" text="About" />
          <NavLink href="#works" text="Works" />
          <NavLink href="#services" text="Services" />
          <motion.button
            className="px-5 py-2 rounded-full bg-accent-blue text-white font-medium flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-dark-900/95 z-40 pt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6 items-center">
            <NavLink href="#home" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#works" text="Works" />
            <NavLink href="#services" text="Services" />
            <motion.button
              className="w-full px-5 py-3 rounded-full bg-accent-blue text-white font-medium flex items-center justify-center"
              whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;