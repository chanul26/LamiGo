import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Truck, Brain, Users, BarChart3, ArrowLeft } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Heshadha Mahaarachchi",
      role: "Model & Algorithm Lead",
      focus: "DeepFM Architecture, Simulated Annealing logic, and ML Pipeline",
      linkedin: "",
      github: ""
    },
    {
      name: "Pilleyan",
      role: "Implementation Lead (Frontend & Backend)",
      focus: "System Architecture, FastAPI Backend, and Web/Mobile Implementation",
      linkedin: "",
      github: ""
    },
    {
      name: "Nevith Perera",
      role: "Developer",
      focus: "Support for Mobile/Web frontend features",
      linkedin: "",
      github: ""
    },
    {
      name: "Chanul Navindu",
      role: "Developer / Business Analyst",
      focus: "Business Model Canvas and UI/UX Design coordination",
      linkedin: "",
      github: ""
    },
    {
      name: "Azmeth Sajjad",
      role: "Developer",
      focus: "Database integration and API service support",
      linkedin: "",
      github: ""
    },
    {
      name: "Kaarunjan Sathiyaseelan",
      role: "Quality Assurance",
      focus: "System testing, evaluation metrics (MAE/RMSE), and documentation",
      linkedin: "",
      github: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1965A5] to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About LamiGo</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A comprehensive Software-as-a-Service (SaaS) platform designed to bridge the critical "last-mile" gap in urban logistics.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            Born out of the necessity to modernize traditional, manual delivery processes in Sri Lanka, our platform replaces guesswork with data-driven precision.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-[#1965A5]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We aim to empower small and medium-sized enterprises (SMEs) with intelligent, affordable tools that reduce operational costs and enhance customer trust. By automating complex workflows, we enable logistics providers to focus on what matters most: delivering excellence.
          </p>
        </div>

        {/* Technical Innovation */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Brain className="w-6 h-6 text-[#1965A5]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Technical Innovation</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At the heart of LamiGo is a dual-engine architecture designed for maximum efficiency:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dynamic Route Optimization</h3>
              <p className="text-gray-700">
                Utilizing Simulated Annealing (SA) algorithms to generate the most fuel-efficient delivery sequences, minimizing travel distance and time wastage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Context-Aware ETA Prediction</h3>
              <p className="text-gray-700">
                Our platform goes beyond standard map data by using a Deep Factorization Machine (DeepFM) model. This AI component accounts for "human friction" like gate access delays, weather intensity, and driver behavior to provide minute-accurate arrival windows.
              </p>
            </div>
          </div>
        </div>

        {/* Unified Ecosystem */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BarChart3 className="w-6 h-6 text-[#1965A5]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">A Unified Ecosystem</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We provide a seamless experience for all stakeholders through three integrated components:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-[#1965A5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Driver Mobile App</h3>
              <p className="text-gray-600">For real-time navigation and status management.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#1965A5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Station Management System</h3>
              <p className="text-gray-600">A central "Control Tower" for branch managers to monitor fleets and handle exceptions.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#F49320]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Tracking Portal</h3>
              <p className="text-gray-600">Giving receivers transparency and the ability to pin precise delivery locations.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Development Team</h2>
          <p className="text-gray-600 text-center mb-12 text-lg">Meet the talented individuals behind LamiGo</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1965A5] to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#1965A5] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.focus}</p>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={member.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href={member.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
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