import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyCourierAI() {

  return (
    <section className="py-24 bg-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-medium mb-6 shadow-sm"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Why Choose llamigo</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Transform Your <span className="text-[#F49320]">Delivery Operations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Experience the power of AI-driven logistics that adapts to your business needs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Built for Sri Lankan Courier Companies
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                CourierAI understands the unique challenges of last-mile delivery in Sri Lanka. Our platform is designed to handle local road networks, traffic patterns, and operational requirements.
              </p>
              <ul className="space-y-3">
                {[
                  'Local traffic pattern recognition',
                  'Multi-language support',
                  'SMS-based customer communication',
                  'Cash-on-delivery tracking',
                  'Area-specific optimization'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div className="bg-[#1965A5] rounded-xl p-8 text-white" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="text-2xl font-bold mb-6">Impact Metrics</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-blue-100">Fuel Savings</span>
                    <span className="text-2xl font-bold">25-35%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div className="bg-white h-2 rounded-full" initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 0.9 }} viewport={{ once: true }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-blue-100">Time Efficiency</span>
                    <span className="text-2xl font-bold">40%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div className="bg-white h-2 rounded-full" initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ duration: 0.9, delay: 0.12 }} viewport={{ once: true }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-blue-100">Customer Satisfaction</span>
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div className="bg-white h-2 rounded-full" initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ duration: 0.9, delay: 0.22 }} viewport={{ once: true }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
