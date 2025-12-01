import { Zap, Brain, Clock, MapPin, Shield, BarChart3, Bell, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
  const solutions = [
    {
      icon: Brain,
      title: 'Automated Route Optimization',
      description: 'AI-powered delivery sequencing that eliminates manual route planning'
    },
    {
      icon: Clock,
      title: 'Intelligent ETA Prediction',
      description: 'Machine learning considers traffic, service time, and driver behaviour for accurate estimates'
    },
    {
      icon: MapPin,
      title: 'Real-Time Driver Tracking',
      description: 'Live location monitoring for complete operational visibility'
    },
    {
      icon: Shield,
      title: 'Auto Exception Handling',
      description: 'Automated management of accidents, delays, and delivery issues'
    },
    {
      icon: Bell,
      title: 'Customer Communication',
      description: 'Web-based tracking with delivery instructions and notifications'
    },
    {
      icon: FileText,
      title: 'Digital Documentation',
      description: 'Notes, cancellations, and emergency reporting all digitized'
    },
    {
      icon: BarChart3,
      title: 'Driver Analytics Dashboard',
      description: 'Comprehensive statistics and performance tracking'
    },
    {
      icon: Zap,
      title: 'Station Operations Portal',
      description: 'Centralized management for payroll, assignments, and communication'
    }
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
  const card = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* no gradient overlay */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Intelligent Solution</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet{' '}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              CourierAI
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            A comprehensive platform that transforms last-mile delivery operations through artificial intelligence and automation
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={card}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-200"
            >
                <div className="w-12 h-12 bg-[#1965A5] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <solution.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {solution.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-[#1965A5] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Faster Route Planning</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-blue-100">ETA Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Delivery Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
