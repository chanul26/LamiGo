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

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section className="py-24 bg-lamigo-soft-white dark:bg-lamigo-gunmetal transition-colors duration-300 relative overflow-hidden">
      {/* no gradient overlay */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-lamigo-orange/20 text-lamigo-orange rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Intelligent Solution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-lamigo-gunmetal dark:text-lamigo-soft-white mb-6"
          >
            Meet{' '}
            <span className="text-lamigo-gunmetal dark:text-lamigo-soft-white">
              Lami
            </span>
            <span className="text-lamigo-orange">
              Go
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-lamigo-gunmetal/80 dark:text-lamigo-soft-white/80"
          >
            A comprehensive platform that transforms last-mile delivery operations through artificial intelligence and automation
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover="hover"
              className="group p-6 bg-lamigo-soft-white dark:bg-lamigo-gunmetal/80 rounded-xl border border-lamigo-orange/30 hover:border-lamigo-orange hover:shadow-xl transition-all duration-300"
            >
                <motion.div 
                  className="w-12 h-12 bg-lamigo-orange rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                <solution.icon className="w-6 h-6 text-lamigo-soft-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-lamigo-gunmetal dark:text-lamigo-soft-white mb-2">
                {solution.title}
              </h3>

              <p className="text-lamigo-gunmetal/80 dark:text-lamigo-soft-white/80 text-sm leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-lamigo-orange rounded-2xl p-8 md:p-12 text-lamigo-soft-white shadow-xl"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '85%', label: 'Faster Route Planning' },
              { value: '92%', label: 'ETA Accuracy' },
              { value: '60%', label: 'Cost Reduction' },
              { value: '99%', label: 'Delivery Success Rate' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className=""
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lamigo-soft-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}