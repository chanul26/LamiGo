import { ArrowRight, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoLight from '../assets/LamiGo_Logo_Light.svg';
import logoDark from '../assets/LamiGo_Logo_Dark.svg';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

type HeadlineWord = {
  text: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
  isAccent?: boolean;
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const logo = theme === 'dark' ? logoDark : logoLight;

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const headlineWords: HeadlineWord[] = [
    { text: 'Last-Mile', direction: 'top', isAccent: true },
    { text: 'Delivery', direction: 'left' },
    { text: 'Optimisation', direction: 'bottom' },
    { text: 'Platform', direction: 'right', isAccent: true },
  ];

  const getVariant = (direction: 'top' | 'bottom' | 'left' | 'right') => {
    const directionOffsets = {
      top: { y: [-60, 0], x: [0, 0] },
      bottom: { y: [60, 0], x: [0, 0] },
      left: { y: [0, 0], x: [-60, 0] },
      right: { y: [0, 0], x: [60, 0] },
    };

    const offset = directionOffsets[direction];
    return {
      hidden: {
        opacity: 0,
        y: offset.y[0],
        x: offset.x[0],
        filter: 'blur(10px)',
      },
      show: {
        opacity: 1,
        y: offset.y[1],
        x: offset.x[1],
        filter: 'blur(0px)',
        transition: {
          duration: 0.9,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };
  };

  return (
    <div className="relative overflow-hidden bg-lamigo-soft-white dark:bg-lamigo-gunmetal transition-colors duration-300">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(31,41,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(31,41,55,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] bg-lamigo-soft-white dark:bg-lamigo-gunmetal border-b border-lamigo-gunmetal/10 dark:border-lamigo-soft-white/20 transition-all duration-300 ${isScrolled ? 'py-2 shadow-xl' : 'py-4 shadow-none'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="Lamigo Logo" className="h-8 md:h-12 w-auto transition-all duration-300" />
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#features" 
                className="text-lamigo-gunmetal dark:text-lamigo-soft-white hover:text-lamigo-orange transition-colors font-semibold"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Features
              </motion.a>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/about" className="text-lamigo-gunmetal dark:text-lamigo-soft-white hover:text-lamigo-orange transition-colors font-semibold">About</Link>
              </motion.div>
              <motion.a 
                href="#contact" 
                className="text-lamigo-gunmetal dark:text-lamigo-soft-white hover:text-lamigo-orange transition-colors font-semibold"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.a>
              <ThemeToggle />
              <motion.button 
                className="px-6 py-2 bg-lamigo-orange text-lamigo-soft-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
            
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-lamigo-gunmetal dark:text-lamigo-soft-white p-2 hover:bg-lamigo-gunmetal/10 dark:hover:bg-lamigo-soft-white/10 rounded-lg transition-all relative z-[110]"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-lamigo-gunmetal/60 backdrop-blur-md md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-[105] w-[85%] max-w-sm bg-lamigo-soft-white dark:bg-lamigo-gunmetal shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full pt-24 pb-12 px-8">
                <div className="flex flex-col space-y-4 flex-1">
                  <a 
                    href="#features" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-lamigo-gunmetal dark:text-lamigo-soft-white p-4 rounded-2xl hover:bg-lamigo-gunmetal/5 dark:hover:bg-lamigo-soft-white/5 transition-colors"
                  >
                    Features
                  </a>
                  <Link 
                    to="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-lamigo-gunmetal dark:text-lamigo-soft-white p-4 rounded-2xl hover:bg-lamigo-gunmetal/5 dark:hover:bg-lamigo-soft-white/5 transition-colors"
                  >
                    About
                  </Link>
                  <a 
                    href="#contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-lamigo-gunmetal dark:text-lamigo-soft-white p-4 rounded-2xl hover:bg-lamigo-gunmetal/5 dark:hover:bg-lamigo-soft-white/5 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
                <button className="w-full py-5 bg-lamigo-orange text-lamigo-soft-white rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-transform">
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-300 ${isScrolled ? 'pt-24' : 'pt-32'} md:pt-40 lg:pt-48 pb-28 md:pb-80 lg:pb-78`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="overflow-hidden">
            <motion.div
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-lamigo-gunmetal dark:text-lamigo-soft-white leading-tight"
              initial="hidden"
              animate={isVisible ? 'show' : 'hidden'}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={getVariant(word.direction)}
                  className="inline-block"
                  style={{
                    marginRight: idx < headlineWords.length - 1 ? '0.3em' : 0,
                  }}
                >
                  <span className={word.isAccent ? 'text-lamigo-orange' : ''}>
                    {word.text}
                  </span>
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.p
            className="text-xl text-lamigo-gunmetal/80 dark:text-lamigo-soft-white/80 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Accurate ETAs, optimized delivery routes, real-time tracking, and seamless customer communication — all in one intelligent platform.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="group px-8 py-4 bg-lamigo-orange text-lamigo-soft-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-lamigo-gunmetal/70 dark:text-lamigo-soft-white/70" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-lamigo-gunmetal/10 dark:bg-lamigo-soft-white/20"></div>

      <motion.button
        animate={isScrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 bg-lamigo-orange text-lamigo-soft-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
