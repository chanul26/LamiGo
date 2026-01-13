import { Brain, Zap, Eye, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const featureCategories = [
    {
      icon: Brain,
      title: 'AI & Automation',
      color: 'bg-[#1965A5]',
      items: [
        'Machine-learning ETA prediction',
        'Route sequencing (TSP/VRP optimization)',
        'Real-time traffic integration'
      ]
    },
    {
      icon: Eye,
      title: 'Visibility & Tracking',
      color: 'bg-[#1965A5]',
      items: [
        'Live driver location',
        'ETA updates',
        'Emergency alerts'
      ]
    },
    {
      icon: Wrench,
      title: 'Operational Tools',
      color: 'bg-[#F49320]',
      items: [
        'Delivery batching',
        'Commission calculation',
        'Digital notes & history',
        'Cancel/reschedule tools'
      ]
    },
    {
      icon: Heart,
      title: 'Customer Experience',
      color: 'bg-[#F49320]',
      items: [
        'ETA link via SMS',
        'Real-time updates',
        'Location pinning'
      ]
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
  const listItem = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl opacity-20"></div>

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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Feature Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Everything You Need to{' '}
            <span className="ext-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Succeed
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Comprehensive features designed to streamline every aspect of your delivery operations
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featureCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl"></div>

              <motion.div
                className="relative p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      variants={listItem}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}