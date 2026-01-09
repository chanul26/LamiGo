import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Truck, Users, BarChart3, ArrowLeft, Zap, Target, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo1.png';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Heshadha Mahaarachchi",
      role: "Model & Algorithm Lead",
      focus: "DeepFM Architecture, Simulated Annealing logic, and ML Pipeline",
      image: "", // Add your image path here
      linkedin: "",
      github: ""
    },
    {
      name: "Laksayan",
      role: "Implementation Lead (Frontend & Backend)",
      focus: "System Architecture, FastAPI Backend, and Web/Mobile Implementation",
      image: "", // Add your image path here
      linkedin: "",
      github: ""
    },
    {
      name: "Nevith Perera",
      role: "Developer",
      focus: "Support for Mobile/Web frontend features",
      image: "", // Add your image path here
      linkedin: "",
      github: ""
    },
    {
      name: "Chanul Navindu",
      role: "Developer / Business Analyst",
      focus: "Business Model Canvas and UI/UX Design coordination",
      image: "", // Add your image path here
      linkedin: "",
      github: ""
    },
    {
      name: "Azmeth Sajjad",
      role: "Developer",
      focus: "Database integration and API service support",
      image: "", // Add your image path here
      linkedin: "",
      github: ""
    },
    {
      name: "Kaarunjan Sathiyaseelan",
      role: "Quality Assurance",
      focus: "System testing, evaluation metrics (MAE/RMSE), and documentation",
      image: "", // Add your image path here
      linkedin: "",
      github: ""
    }
  ];

  // Animation variants
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
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 border-b-2 border-black">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <ArrowLeft className="w-5 h-5 text-black group-hover:text-[#1965A5] transition-colors" />
            <img src={logo} alt="Lamigo Logo" className="h-16 w-auto" />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/#features" className="text-black hover:text-[#1965A5] font-medium transition-colors">Features</Link>
            <Link to="/about" className="text-[#F49320] font-bold">About</Link>
            <Link to="/#contact" className="text-black hover:text-[#1965A5] font-medium transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Asymmetric Design */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F49320]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-16">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block bg-black text-white px-4 py-2 mb-6 font-bold tracking-wider text-sm">
                WHO WE ARE
              </div>
              <h1 className="text-6xl font-black mb-6 leading-tight">
                About<br/>
                <span className="text-[#F49320]">Lami</span><span className="text-[#1965A5]">Go</span>
              </h1>
              <div className="w-20 h-1 bg-[#1965A5] mb-6"></div>
              <p className="text-xl text-gray-800 leading-relaxed max-w-2xl font-medium">
                Bridging the critical "last-mile" gap in urban logistics through intelligent software solutions.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute -right-12 top-0 w-96 h-96 bg-white border-4 border-black transform rotate-6"></div>
              <div className="relative bg-[#1965A5] p-12 text-white border-4 border-black">
                <p className="text-lg leading-relaxed font-medium">
                  Born from Sri Lanka's need to modernize manual delivery processes, we replace guesswork with data-driven precision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission Section - Bold Cards */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div 
            className="border-4 border-black bg-white p-8 relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#1965A5]"></div>
            <Target className="w-12 h-12 text-[#1965A5] mb-4" />
            <h3 className="text-2xl font-black mb-4 uppercase">Mission</h3>
            <p className="text-gray-800 leading-relaxed">
              Empower SMEs with intelligent, affordable tools that reduce costs and enhance customer trust through workflow automation.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="border-4 border-black bg-[#F49320] p-8 relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
            <Zap className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-black mb-4 uppercase text-white">Innovation</h3>
            <p className="text-white leading-relaxed font-medium">
              Dual-engine architecture combining route optimization algorithms with AI-powered ETA predictions.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div 
            className="border-4 border-black bg-white p-8 relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#F49320]"></div>
            <Boxes className="w-12 h-12 text-[#F49320] mb-4" />
            <h3 className="text-2xl font-black mb-4 uppercase">Platform</h3>
            <p className="text-gray-800 leading-relaxed">
              Unified ecosystem connecting drivers, managers, and customers through seamless integration.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Technical Innovation - Split Layout */}
      <motion.div 
        className="bg-black text-white py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-black mb-4 uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Technical <span className="text-[#F49320]">Core</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-2 bg-[#1965A5] mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'left' }}
          ></motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Route Optimization */}
            <motion.div 
              className="border-4 border-[#1965A5] p-8 bg-white text-black"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1965A5] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-2xl">01</span>
                </div>
                <h3 className="text-2xl font-black uppercase pt-2">Dynamic Route Optimization</h3>
              </div>
              <p className="text-gray-800 leading-relaxed font-medium">
                Simulated Annealing (SA) algorithms generate fuel-efficient delivery sequences, minimizing travel distance and time wastage across entire fleets.
              </p>
            </motion.div>

            {/* ETA Prediction */}
            <motion.div 
              className="border-4 border-[#F49320] p-8 bg-white text-black"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#F49320] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-2xl">02</span>
                </div>
                <h3 className="text-2xl font-black uppercase pt-2">Context-Aware ETA</h3>
              </div>
              <p className="text-gray-800 leading-relaxed font-medium">
                Deep Factorization Machine (DeepFM) model accounts for human friction—gate delays, weather, driver behavior—delivering minute-accurate windows.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Ecosystem Components - Grid Layout */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-5xl font-black mb-4 uppercase text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          Our <span className="text-[#1965A5]">Ecosystem</span>
        </motion.h2>
        <motion.div 
          className="w-32 h-2 bg-[#F49320] mb-16 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'center' }}
        ></motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-px bg-black border-4 border-black"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Driver App */}
          <motion.div 
            className="bg-white p-10"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="w-16 h-16 bg-[#1965A5] flex items-center justify-center mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Driver Mobile App</h3>
            <p className="text-gray-700 font-medium">Real-time navigation and status management at drivers' fingertips.</p>
          </motion.div>

          {/* Station Management */}
          <motion.div 
            className="bg-[#1965A5] p-10 text-white"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-[#1965A5]" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Station Control Tower</h3>
            <p className="font-medium">Central hub for branch managers to monitor fleets and handle exceptions.</p>
          </motion.div>

          {/* Customer Portal */}
          <motion.div 
            className="bg-white p-10"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="w-16 h-16 bg-[#F49320] flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Customer Portal</h3>
            <p className="text-gray-700 font-medium">Transparency with precise location pinning and real-time tracking.</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Team Section - Bold Style */}
      <motion.div 
        className="bg-white py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-black mb-4 uppercase text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Development <span className="text-[#F49320]">Team</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-2 bg-[#1965A5] mb-6 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'center' }}
          ></motion.div>
          <motion.p 
            className="text-gray-800 text-center mb-16 text-lg font-bold uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            The Minds Behind <span className="text-[#F49320]">Lami</span><span className="text-[#1965A5]">Go</span>
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-4 border-black"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 hover:bg-gray-50 transition-all group"
                variants={teamCardVariants}
                whileHover="hover"
              >
                <div className="flex flex-col items-center text-center">
                  {member.image ? (
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#1965A5] transform translate-x-2 translate-y-2"></div>
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 object-cover border-4 border-black relative z-10"
                      />
                    </div>
                  ) : (
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#F49320] transform translate-x-2 translate-y-2"></div>
                      <div className="w-28 h-28 bg-[#1965A5] border-4 border-black flex items-center justify-center text-white text-4xl font-black relative z-10">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-black mb-2 uppercase">{member.name}</h3>
                  <div className="w-12 h-1 bg-[#1965A5] mb-3"></div>
                  <p className="text-[#F49320] font-bold mb-4 uppercase text-sm tracking-wider">{member.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium mb-6">{member.focus}</p>

                  <div className="flex gap-3">
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1965A5] hover:bg-black flex items-center justify-center transition-colors border-2 border-black"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black hover:bg-[#F49320] flex items-center justify-center transition-colors border-2 border-black"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;