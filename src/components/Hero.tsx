// import { ArrowRight, Play, MapPin, Clock, TrendingUp, CheckCircle } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative overflow-hidden bg-white">
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0" style={{ 
//         backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
//         backgroundSize: '50px 50px'
//       }}></div>

//       {/* Navigation */}
//       <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-[#1965A5] rounded-lg flex items-center justify-center">
//               <MapPin className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold text-[#1965A5]">llamigo</span>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
//             <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
//             <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
//             <button className="px-6 py-2.5 bg-[#1965A5] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div 
//               className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'all 0.6s ease-out'
//               }}
//             >
//               <TrendingUp className="w-4 h-4" />
//               <span>AI-Powered Logistics Platform</span>
//             </div>

//             <h1 
//               className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'all 0.7s ease-out 0.1s'
//               }}
//             >
//               AI-Powered Last-Mile Delivery{' '}
//               <span className="text-[#1965A5]">Optimisation</span>
//             </h1>

//             <p 
//               className="text-xl text-gray-600 leading-relaxed"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'all 0.8s ease-out 0.2s'
//               }}
//             >
//               Accurate ETAs, optimized delivery routes, real-time tracking, and seamless customer communication — all in one intelligent platform.
//             </p>

//             <div 
//               className="flex flex-col sm:flex-row gap-4"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'all 0.9s ease-out 0.3s'
//               }}
//             >
//               <button className="group px-8 py-4 bg-[#1965A5] text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
//                 <span>Get Started</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="group px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
//                 <Play className="w-5 h-5" />
//                 <span>Watch Demo</span>
//               </button>
//             </div>

//             <div 
//               className="flex items-center space-x-8 pt-8"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transition: 'all 1s ease-out 0.4s'
//               }}
//             >
//               <div className="flex items-center space-x-2">
//                 <Clock className="w-5 h-5 text-[#1965A5]" />
//                 <span className="text-sm text-gray-600">AI-Powered ETAs</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="w-5 h-5 text-[#1965A5]" />
//                 <span className="text-sm text-gray-600">Real-Time Tracking</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Metrics Card */}
//           <div 
//             className="relative"
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
//               transition: 'all 0.9s ease-out 0.5s'
//             }}
//           >
//             <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between pb-6 border-b border-gray-200">
//                   <h3 className="text-xl font-bold text-gray-900">Platform Metrics</h3>
//                   <div className="flex items-center space-x-2">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <span className="text-sm font-medium text-gray-600">Live</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <MetricCard 
//                     label="Active Deliveries" 
//                     value="247" 
//                     change="↑ 12% from yesterday"
//                     changeColor="text-green-600"
//                     delay={0.6}
//                     isVisible={isVisible}
//                   />
//                   <MetricCard 
//                     label="Avg. ETA Accuracy" 
//                     value="94%" 
//                     change="↑ 3% this week"
//                     changeColor="text-green-600"
//                     delay={0.7}
//                     isVisible={isVisible}
//                   />
//                   <MetricCard 
//                     label="Routes Optimized" 
//                     value="1,429" 
//                     change="Today"
//                     changeColor="text-blue-600"
//                     delay={0.8}
//                     isVisible={isVisible}
//                   />
//                   <MetricCard 
//                     label="Time Saved" 
//                     value="18h" 
//                     change="Per driver/day"
//                     changeColor="text-blue-600"
//                     delay={0.9}
//                     isVisible={isVisible}
//                   />
//                 </div>

//                 <div className="pt-4 border-t border-gray-200">
//                   <div className="flex items-center justify-between text-sm">
//                     <span className="text-gray-600">System Performance</span>
//                     <span className="font-semibold text-green-600 flex items-center space-x-1">
//                       <CheckCircle className="w-4 h-4" />
//                       <span>Optimal</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Border */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
//     </div>
//   );
// }

// function MetricCard({ label, value, change, changeColor, delay, isVisible }: {
//   label: string;
//   value: string;
//   change: string;
//   changeColor: string;
//   delay: number;
//   isVisible: boolean;
// }) {
//   return (
//     <div
//       className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#1965A5] transition-all duration-300"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
//         transition: `all 0.6s ease-out ${delay}s`
//       }}
//     >
//       <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
//       <p className="text-3xl font-bold text-gray-900">{value}</p>
//       <p className={`text-xs ${changeColor} mt-1`}>{change}</p>
//     </div>
//   );
// }

import { ArrowRight, Play, MapPin, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              <TrendingUp className="w-4 h-4" />
              <span>AI-Powered Logistics Platform</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s ease-out 0.1s'
              }}
            >
              AI-Powered Last-Mile Delivery{' '}
              <span className="text-[#1965A5]">Optimisation</span>
            </h1>

            <p
              className="text-xl text-gray-600 leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              Accurate ETAs, optimized delivery routes, real-time tracking, and seamless customer communication — all in one intelligent platform.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s ease-out 0.3s'
              }}
            >
              <button className="group px-8 py-4 bg-[#1965A5] text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div
              className="flex items-center space-x-8 pt-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out 0.4s'
              }}
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#1965A5]" />
                <span className="text-sm text-gray-600">AI-Powered ETAs</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#1965A5]" />
                <span className="text-sm text-gray-600">Real-Time Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Content - Metrics Card */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 0.9s ease-out 0.5s'
            }}
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

                <div className="grid grid-cols-2 gap-4">
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
          </div>
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
    <div
      className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#1965A5] transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: `all 0.6s ease-out ${delay}s`
      }}
    >
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className={`text-xs ${changeColor} mt-1`}>{change}</p>
    </div>
  );
}
