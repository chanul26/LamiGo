import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Truck, Users, BarChart3, ArrowLeft, Zap, Target, Boxes, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '../assets/LamiGo_Logo_Light.svg';
import logoDark from '../assets/LamiGo_Logo_Dark.svg';
import Kaarunjan from '../assets/Kaarunjan.png';
import Azmeth from '../assets/Azmeth.png';
import Laksayan from '../assets/Laksayan.png';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const teamMembers = [
  {
    name: "Heshadha Mahaarachchi",
    role: "Model & Algorithm Lead",
    focus: "DeepFM Architecture, Simulated Annealing logic, and ML Pipeline",
    image: "",
    linkedin: "https://www.linkedin.com/in/heshadha/",
    github: "https://github.com/heshadha"
  },
  {
    name: "Chanul Navindu",
    role: "Implementation Lead (Frontend & Backend)",
    focus: "System Architecture, FastAPI Backend, and Web/Mobile Implementation",
    image: "",
    linkedin: "https://www.linkedin.com/in/chanul-nanvidu/",
    github: "https://github.com/chanul26"
  }
  ,
  {
    name: "Nevith Perera",
    role: "Quality Assurance & Documentation Lead",
    focus: "Quality Assurance, Testing, and Documentation",
    image: "",
    linkedin: "https://www.linkedin.com/in/nevith-perera-287298233/",
    github: "https://github.com/nevith20241162-pixel"
  },
  {
    name: "Laksayan Uthayakumaran",
    role: "Developer",
    focus: "Support for Mobile/Web frontend features",
    image: Laksayan,
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7356612468716068865/",
    github: "https://github.com/LaksayanUthayakumaran"
  },
  {
    name: "Azmeth Sajjad",
    role: "Developer",
    focus: "Database integration and API service support",
    image: Azmeth,
    linkedin: "https://www.linkedin.com/in/azmeth-sajjad-485793254/",
    github: "https://github.com/Azmeth20230153"
  },
  {
    name: "Kaarunjan Sathiyaseelan",
    role: "developer",
    focus: "System testing, evaluation metrics (MAE/RMSE), and documentation",
    image: Kaarunjan,
    linkedin: "https://www.linkedin.com/in/kaarunjan-sathiyaseelan-8738582b3/",
    github: "https://github.com/Kaarunjan"
  }
];

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const logo = theme === 'dark' ? logoDark : logoLight;

  useEffect(() => {
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
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.02,
      y: -4,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  const teamCardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <ArrowLeft className="w-5 h-5 text-black dark:text-white group-hover:text-[#1965A5] transition-colors" />
              <img src={logo} alt="Lamigo Logo" className="h-8 md:h-12 w-auto transition-all duration-300" />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/#features" className="text-black dark:text-gray-300 hover:text-[#1965A5] font-medium transition-colors">Features</Link>
              <Link to="/about" className="text-[#F49320] font-bold">About</Link>
              <Link to="/#contact" className="text-black dark:text-gray-300 hover:text-[#1965A5] font-medium transition-colors">Contact</Link>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-400 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative z-[110]"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[105] w-[80%] max-w-sm bg-white dark:bg-gray-950 p-6 pt-24 md:hidden shadow-2xl"
            >
              <div className="flex flex-col space-y-6">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-gray-900 dark:text-white p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-[#F49320] p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-gray-900 dark:text-white p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section with Asymmetric Design */}
      <motion.div
        className={`relative transition-all duration-300 ${isScrolled ? 'pt-20' : 'pt-24'}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-[#F49320] opacity-10 lg:opacity-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block bg-black text-white px-4 py-2 mb-6 font-bold tracking-wider text-sm">
                WHO WE ARE
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight dark:text-white">
                About<br />
                <span className="text-[#F49320]">Lami</span><span className="text-[#1965A5]">Go</span>
              </h1>
              <div className="w-20 h-1 bg-[#1965A5] mb-6 mx-auto lg:mx-0"></div>
              <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-2xl font-medium">
                Bridging the critical "last-mile" gap in urban logistics through intelligent software solutions.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 relative w-full max-w-xl lg:max-w-none"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute -right-4 md:-right-12 top-0 w-full h-full bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-700 transform rotate-3 md:rotate-6 hidden md:block"></div>
              <div className="relative bg-[#1965A5] p-8 md:p-12 text-white border-4 border-black dark:border-gray-700 shadow-2xl">
                <p className="text-lg leading-relaxed font-medium">
                  Born from Sri Lanka's need to modernize manual delivery processes, we replace guesswork with data-driven precision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission Section - Modern Styled Boxes */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            className="p-10 relative rounded-[2.5rem] bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden group cursor-default"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
            <Target className="w-12 h-12 text-[#1965A5] mb-6 relative z-10" />
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight dark:text-white relative z-10">Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10 font-medium">
              Empower SMEs with intelligent, affordable tools that reduce costs and enhance customer trust through workflow automation.
            </p>
          </motion.div>

          {/* Innovation */}
          <motion.div
            className="p-10 relative rounded-[2.5rem] bg-[#F49320] shadow-2xl overflow-hidden group cursor-default"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
            <Zap className="w-12 h-12 text-white mb-6 relative z-10" />
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white relative z-10">Innovation</h3>
            <p className="text-white/90 leading-relaxed font-bold relative z-10">
              Dual-engine architecture combining route optimization algorithms with AI-powered ETA predictions.
            </p>
          </motion.div>

          {/* Platform */}
          <motion.div
            className="p-10 relative rounded-[2.5rem] bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden group cursor-default"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 dark:bg-orange-900/10 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
            <Boxes className="w-12 h-12 text-[#F49320] mb-6 relative z-10" />
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight dark:text-white relative z-10">Platform</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10 font-medium">
              Unified ecosystem connecting drivers, managers, and customers through seamless integration.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Technical Innovation */}
      <motion.div
        className="bg-black dark:bg-gray-900 text-white py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <motion.h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Technical Core</motion.h2>
          <motion.div className="w-32 h-2 bg-[#1965A5] mb-12 mx-auto md:mx-0"></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div className="p-8 bg-white dark:bg-gray-800 text-black dark:text-white rounded-3xl shadow-xl border-4 border-[#1965A5] text-left">
              <h3 className="text-2xl font-black uppercase mb-4">Dynamic Route Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Simulated Annealing (SA) algorithms generate fuel-efficient delivery sequences, minimizing travel distance and time wastage across entire fleets.
              </p>
            </motion.div>
            <motion.div className="p-8 bg-white dark:bg-gray-800 text-black dark:text-white rounded-3xl shadow-xl border-4 border-[#F49320] text-left">
              <h3 className="text-2xl font-black uppercase mb-4">Context-Aware ETA</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Deep Factorization Machine (DeepFM) model accounts for human friction—gate delays, weather, driver behavior—delivering minute-accurate windows.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Ecosystem Components */}
      <motion.div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase dark:text-white">Our Ecosystem</h2>
        <div className="w-32 h-2 bg-[#F49320] mb-16 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-2">
            <Truck className="w-12 h-12 text-[#1965A5] mx-auto mb-6" />
            <h3 className="text-xl font-black mb-3 uppercase dark:text-white">Driver Mobile App</h3>
            <p className="text-gray-600 dark:text-gray-400">Real-time navigation and status management at drivers' fingertips.</p>
          </div>
          <div className="bg-[#1965A5] p-10 text-white rounded-3xl shadow-xl transition-all hover:-translate-y-2">
            <BarChart3 className="w-12 h-12 text-white mx-auto mb-6" />
            <h3 className="text-xl font-black mb-3 uppercase">Station Control Tower</h3>
            <p className="opacity-90">Central hub for branch managers to monitor fleets and handle exceptions.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-2">
            <Users className="w-12 h-12 text-[#F49320] mx-auto mb-6" />
            <h3 className="text-xl font-black mb-3 uppercase dark:text-white">Customer Portal</h3>
            <p className="text-gray-600 dark:text-gray-400">Transparency with precise location pinning and real-time tracking.</p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div className="bg-gray-50 dark:bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase text-center dark:text-white">Development Team</h2>
          <div className="w-32 h-2 bg-[#1965A5] mb-16 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 transition-all hover:shadow-2xl hover:-translate-y-2"
                variants={teamCardVariants}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Image Section */}
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-2xl object-cover mb-6 shadow-lg border-4 border-[#1965A5]"
                    />
                  ) : (
                    <div className="w-40 h-40 bg-gradient-to-br from-[#1965A5] to-[#F49320] rounded-2xl flex items-center justify-center text-white text-5xl font-black mb-6 shadow-lg">
                      {member.name.charAt(0)}
                    </div>
                  )}

                  {/* Details Section */}
                  <h3 className="text-xl font-black mb-2 uppercase dark:text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#F49320] font-bold mb-4 uppercase text-sm tracking-widest">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                    {member.focus}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    {member.linkedin && member.linkedin.length > 0 && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-[#1965A5]/10 rounded-xl flex items-center justify-center hover:bg-[#1965A5] transition-all group"
                      >
                        <Linkedin className="w-5 h-5 text-[#1965A5] group-hover:text-white" />
                      </a>
                    )}
                    {member.github && member.github.length > 0 && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-black/10 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-black dark:hover:bg-gray-600 transition-all group"
                      >
                        <Github className="w-5 h-5 text-black dark:text-white group-hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
