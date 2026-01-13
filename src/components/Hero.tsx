import { ArrowRight, Play, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import { ThemeToggle } from './ThemeToggle';

type HeadlineWord = {
  text: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
  isOrange?: boolean;
  isBlue?: boolean;
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Headline words with animation directions
  const headlineWords: HeadlineWord[] = [
    { text: 'Last-Mile', direction: 'top', isOrange: true },
    { text: 'Delivery', direction: 'left' },
    { text: 'Optimisation', direction: 'bottom' },
    { text: 'Platform', direction: 'right', isBlue: true },
  ];

  // Animation variants for each direction
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
    <div className="relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Lamigo Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
              <ThemeToggle />
              <button className="px-6 py-2 bg-[#1965A5] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-300 ${isScrolled ? 'pt-24' : 'pt-32'} md:pt-40 lg:pt-48 pb-24 md:pb-40 lg:pb-48`}>
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="text-center space-y-8">
            {/* Animated Headline with words coming from different directions */}
            <div className="overflow-hidden">
              <motion.div
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
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
                    <span className={word.isOrange ? 'text-orange-500' : word.isBlue ? 'text-[#1965A5]' : ''}>
                      {word.text}
                    </span>
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Accurate ETAs, optimized delivery routes, real-time tracking, and seamless customer communication — all in one intelligent platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="group px-8 py-4 bg-[#1965A5] text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>


          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  changeColor: string;
  delay: number;
  isVisible: boolean;
}

function MetricCard({ label, value, change, changeColor, delay, isVisible }: MetricCardProps) {
  return (
    <motion.div
      className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#1965A5] transition-all duration-300"
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className={`text-xs ${changeColor} mt-1`}>{change}</p>
    </motion.div>
  );
}