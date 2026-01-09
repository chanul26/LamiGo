import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Truck, Brain, Users, BarChart3, ArrowLeft, Zap, Target, Boxes } from 'lucide-react';
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
      name: "Pilleyan",
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
      <div className="relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F49320]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-16">
            <div className="flex-1">
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
            </div>
            <div className="flex-1 relative">
              <div className="absolute -right-12 top-0 w-96 h-96 bg-white border-4 border-black transform rotate-6"></div>
              <div className="relative bg-[#1965A5] p-12 text-white border-4 border-black">
                <p className="text-lg leading-relaxed font-medium">
                  Born from Sri Lanka's need to modernize manual delivery processes, we replace guesswork with data-driven precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section - Bold Cards */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="border-4 border-black bg-white p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#1965A5]"></div>
            <Target className="w-12 h-12 text-[#1965A5] mb-4" />
            <h3 className="text-2xl font-black mb-4 uppercase">Mission</h3>
            <p className="text-gray-800 leading-relaxed">
              Empower SMEs with intelligent, affordable tools that reduce costs and enhance customer trust through workflow automation.
            </p>
          </div>

          {/* Vision */}
          <div className="border-4 border-black bg-[#F49320] p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>
            <Zap className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-black mb-4 uppercase text-white">Innovation</h3>
            <p className="text-white leading-relaxed font-medium">
              Dual-engine architecture combining route optimization algorithms with AI-powered ETA predictions.
            </p>
          </div>

          {/* Values */}
          <div className="border-4 border-black bg-white p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#F49320]"></div>
            <Boxes className="w-12 h-12 text-[#F49320] mb-4" />
            <h3 className="text-2xl font-black mb-4 uppercase">Platform</h3>
            <p className="text-gray-800 leading-relaxed">
              Unified ecosystem connecting drivers, managers, and customers through seamless integration.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Innovation - Split Layout */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-4 uppercase">
            Technical <span className="text-[#F49320]">Core</span>
          </h2>
          <div className="w-32 h-2 bg-[#1965A5] mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Route Optimization */}
            <div className="border-4 border-[#1965A5] p-8 bg-white text-black">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1965A5] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-2xl">01</span>
                </div>
                <h3 className="text-2xl font-black uppercase pt-2">Dynamic Route Optimization</h3>
              </div>
              <p className="text-gray-800 leading-relaxed font-medium">
                Simulated Annealing (SA) algorithms generate fuel-efficient delivery sequences, minimizing travel distance and time wastage across entire fleets.
              </p>
            </div>

            {/* ETA Prediction */}
            <div className="border-4 border-[#F49320] p-8 bg-white text-black">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#F49320] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-2xl">02</span>
                </div>
                <h3 className="text-2xl font-black uppercase pt-2">Context-Aware ETA</h3>
              </div>
              <p className="text-gray-800 leading-relaxed font-medium">
                Deep Factorization Machine (DeepFM) model accounts for human friction—gate delays, weather, driver behavior—delivering minute-accurate windows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Components - Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black mb-4 uppercase text-center">
          Our <span className="text-[#1965A5]">Ecosystem</span>
        </h2>
        <div className="w-32 h-2 bg-[#F49320] mb-16 mx-auto"></div>

        <div className="grid md:grid-cols-3 gap-px bg-black border-4 border-black">
          {/* Driver App */}
          <div className="bg-white p-10">
            <div className="w-16 h-16 bg-[#1965A5] flex items-center justify-center mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Driver Mobile App</h3>
            <p className="text-gray-700 font-medium">Real-time navigation and status management at drivers' fingertips.</p>
          </div>

          {/* Station Management */}
          <div className="bg-[#1965A5] p-10 text-white">
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-[#1965A5]" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Station Control Tower</h3>
            <p className="font-medium">Central hub for branch managers to monitor fleets and handle exceptions.</p>
          </div>

          {/* Customer Portal */}
          <div className="bg-white p-10">
            <div className="w-16 h-16 bg-[#F49320] flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Customer Portal</h3>
            <p className="text-gray-700 font-medium">Transparency with precise location pinning and real-time tracking.</p>
          </div>
        </div>
      </div>

      {/* Team Section - Keep as is */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-4 uppercase text-center">
            Development <span className="text-[#F49320]">Team</span>
          </h2>
          <div className="w-32 h-2 bg-[#1965A5] mb-6 mx-auto"></div>
          <p className="text-gray-600 text-center mb-16 text-lg font-medium">
            Meet the talented individuals behind <span className="text-[#F49320]">Lami</span><span className="text-[#1965A5]">Go</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:shadow-2xl hover:border-[#1965A5] transition-all hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="mb-4 flex flex-col items-center">
                  {member.image ? (
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mb-4 shadow-md object-cover border-4 border-gray-100"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-br from-[#1965A5] to-[#F49320] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-md border-4 border-gray-100">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#1965A5] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.focus}</p>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 w-full justify-center">
                  <a
                    href={member.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-[#1965A5]" />
                  </a>
                  <a
                    href={member.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;