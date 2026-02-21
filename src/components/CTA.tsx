import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-lamigo-soft-white dark:bg-lamigo-gunmetal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative bg-lamigo-gunmetal rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-lamigo-orange rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-lamigo-orange rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, ease: [0.86, 0, 0.07, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-lamigo-soft-white mb-6"
            >
              Transform Your Delivery Operations{' '}
              <span className="block mt-2">With Intelligent Automation</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl text-lamigo-soft-white/90 mb-10 max-w-2xl mx-auto"
            >
              Join forward-thinking courier companies in Sri Lanka that are
              revolutionizing last-mile delivery with AI
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.button
                className="group px-8 py-4 bg-lamigo-soft-white text-lamigo-gunmetal hover:text-lamigo-orange rounded-lg font-semibold flex items-center space-x-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Request Early Access</span>
                <motion.div
                  className="w-5 h-5"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight />
                </motion.div>
              </motion.button>

              <motion.button
                className="group px-8 py-4 bg-lamigo-orange hover:bg-lamigo-orange/90 border-2 border-lamigo-orange text-lamigo-soft-white rounded-lg font-semibold flex items-center space-x-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(250, 125, 67, 0.4)",
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                <span>Contact Sales</span>
              </motion.button>
            </motion.div>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
