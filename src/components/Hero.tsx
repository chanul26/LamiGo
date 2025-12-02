import { ArrowRight, Play, MapPin, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Headline words with animation directions
  const headlineWords = [
    { text: 'AI-Powered', direction: 'top' },
    { text: 'Last-Mile', direction: 'left' },
    { text: 'Delivery', direction: 'bottom' },
    { text: 'Optimisation', direction: 'right', isHighlight: true },
  ];

  // Animation variants for each direction
  const getVariant = (direction: string) => {
    const baseVariant = {
      hidden: { opacity: 0, filter: 'blur(8px)' },
      show: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1], // smooth elastic easing
        },
      },
    };

    const directionOffsets: Record<string, { y: number[]; x: number[] }> = {
      top: { y: [-60, 0], x: [0, 0] },
      bottom: { y: [60, 0], x: [0, 0] },
      left: { y: [0, 0], x: [-60, 0] },
      right: { y: [0, 0], x: [60, 0] },
    };

    const offset = directionOffsets[direction];
    return {
      hidden: {
        opacity: 0,
        y: offset.y[0],
        x: offset.x[0],
        filter: 'blur(10px)',
      },
      show: {
        opacity: 1,
        y: offset.y[1],
        x: offset.x[1],
        filter: 'blur(0px)',
        transition: {
          duration: 0.9,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1965A5] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-montserrat">
            <span className="text-blue-900">Lami</span>
            <span className="text-orange-500">Go</span>
          </span>
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
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="text-center space-y-8">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-4 h-4" />
              <span>AI-Powered Logistics Platform</span>
            </motion.div>

            {/* Animated Headline with words coming from different directions */}
            <div className="overflow-hidden">
              <motion.div
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                initial="hidden"
                animate={isVisible ? 'show' : 'hidden'}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {headlineWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={getVariant(word.direction)}
                    className="inline-block"
                    style={{
                      marginRight: idx < headlineWords.length - 1 ? '0.3em' : 0,
                    }}
                  >
                    <span className={word.isHighlight ? 'text-[#1965A5]' : ''}>
                      {word.text}
                    </span>
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Accurate ETAs, optimized delivery routes, real-time tracking, and seamless customer communication — all in one intelligent platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="group px-8 py-4 bg-[#1965A5] text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-8 pt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#1965A5]" />
                <span className="text-sm text-gray-600">AI-Powered ETAs</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#1965A5]" />
                <span className="text-sm text-gray-600">Real-Time Tracking</span>
              </div>
            </motion.div>
          </div>

          {/* Metrics Card Below */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Platform Metrics</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-600">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <MetricCard
                    label="Active Deliveries"
                    value="247"
                    change="↑ 12% from yesterday"
                    changeColor="text-green-600"
                    delay={0.6}
                    isVisible={isVisible}
                  />
                  <MetricCard
                    label="Avg. ETA Accuracy"
                    value="94%"
                    change="↑ 3% this week"
                    changeColor="text-green-600"
                    delay={0.7}
                    isVisible={isVisible}
                  />
                  <MetricCard
                    label="Routes Optimized"
                    value="1,429"
                    change="Today"
                    changeColor="text-blue-600"
                    delay={0.8}
                    isVisible={isVisible}
                  />
                  <MetricCard
                    label="Time Saved"
                    value="18h"
                    change="Per driver/day"
                    changeColor="text-blue-600"
                    delay={0.9}
                    isVisible={isVisible}
                  />
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">System Performance</span>
                    <span className="font-semibold text-green-600 flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Optimal</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </div>
  );
}

function MetricCard({ label, value, change, changeColor, delay, isVisible }: {
  label: string;
  value: string;
  change: string;
  changeColor: string;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#1965A5] transition-all duration-300"
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className={`text-xs ${changeColor} mt-1`}>{change}</p>
    </motion.div>
  );
}