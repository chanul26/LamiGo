import { ArrowRight, Play, MapPin, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  // simple entrance variants
  const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1965A5] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#1965A5]">CourierAI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <button className="px-6 py-2.5 bg-[#1965A5] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>AI-Powered Logistics Platform</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              AI-Powered Last-Mile Delivery{' '}
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Optimisation
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed">
              Accurate ETAs, optimized delivery routes, real-time tracking, and seamless customer communication — all in one intelligent platform.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#1965A5] text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white border-2 border-orange-400 text-orange-600 rounded-lg hover:border-orange-500 hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">AI-Powered ETAs</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-600">Real-Time Tracking</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative lg:block">
            <motion.div className="relative bg-[#1965A5] rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900">Live Deliveries</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">24 Active</span>
                </div>

                <div className="space-y-3">
                  {[
                    { driver: 'Kasun P.', status: 'En Route', eta: '12 min', progress: 75 },
                    { driver: 'Nimal S.', status: 'Delivering', eta: '5 min', progress: 90 },
                    { driver: 'Saman W.', status: 'Next Stop', eta: '18 min', progress: 60 }
                  ].map((delivery, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {delivery.driver.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{delivery.driver}</p>
                            <p className="text-sm text-gray-500">{delivery.status}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">{delivery.eta}</p>
                          <p className="text-xs text-gray-500">ETA</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" initial={{ width: 0 }} whileInView={{ width: `${delivery.progress}%` }} transition={{ duration: 0.9, delay: idx * 0.08 }} viewport={{ once: true }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1965A5] rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1965A5] rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
}
