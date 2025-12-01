import { AlertCircle, TrendingDown, MapPin, Clock, MessageSquare, Fuel, Users, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      stat: '40-41%',
      title: 'Of Total Logistics Cost',
      description: 'Last-mile delivery accounts for nearly half of all logistics expenses'
    },
    {
      icon: MapPin,
      stat: 'Manual',
      title: 'Route Planning',
      description: 'Couriers guess routes manually leading to inefficient and inconsistent deliveries'
    },
    {
      icon: Clock,
      stat: 'No ETAs',
      title: 'Unreliable Timing',
      description: 'Customers receive no reliable delivery time estimates'
    },
    {
      icon: MessageSquare,
      stat: 'WhatsApp',
      title: 'Incident Reporting',
      description: 'Issues communicated via messaging apps with no proper logs or tracking'
    },
    {
      icon: Fuel,
      stat: 'High Waste',
      title: 'Fuel & Time Losses',
      description: 'Poor planning causes excessive fuel consumption and delays'
    },
    {
      icon: Users,
      stat: 'No Visibility',
      title: 'Tracking Issues',
      description: 'Branches have no real-time location visibility of drivers'
    },
    {
      icon: XCircle,
      stat: 'Failed',
      title: 'Delivery Attempts',
      description: 'Customer unavailability leads to failed deliveries and extra costs'
    },
    {
      icon: AlertCircle,
      stat: 'Unstructured',
      title: 'No Management System',
      description: 'Complete absence of structured tracking or delivery management'
    }
  ];

  // motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const card = {
    hidden: { opacity: 0, y: 24, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
    hover: { scale: 1.05, y: -8, transition: { duration: 0.3 } }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <AlertCircle className="w-4 h-4" />
            <span>Industry Challenges</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            The Last-Mile Delivery{' '}
            <span className="text-orange-500">Crisis</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Sri Lanka's courier industry faces critical inefficiencies that impact both operations and customer satisfaction
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover="hover"
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <problem.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-orange-500 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                {problem.stat}
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
