import { Smartphone, Globe, Building2, Navigation, Phone, FileText, AlertCircle, MapPin, Clock, Users, DollarSign, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlatformComponents() {
  const components = [
    {
      icon: Smartphone,
      title: 'Driver Mobile App',
      color: 'bg-[#1965A5]',
      features: [
        { icon: Navigation, text: 'Optimally sorted delivery sequence' },
        { icon: MapPin, text: 'Open route in Google Maps' },
        { icon: Phone, text: 'Call customer directly' },
        { icon: Package, text: 'Update delivery statuses' },
        { icon: FileText, text: 'Add/view special notes' },
        { icon: AlertCircle, text: 'Accident reporting' },
        { icon: Clock, text: 'Track distance, time, progress' },
        { icon: FileText, text: 'Cancel deliveries' }
      ]
    },
    {
      icon: Globe,
      title: 'Customer Web Interface',
      color: 'bg-[#F49320]',
      features: [
        { icon: Clock, text: 'View accurate ETA' },
        { icon: FileText, text: 'Add delivery instructions' },
        { icon: AlertCircle, text: 'Cancel delivery' },
        { icon: MapPin, text: 'Pin exact location on map' },
        { icon: MapPin, text: 'Edit pinned location' },
        { icon: Package, text: 'Request return-trip delivery' }
      ]
    },
    {
      icon: Building2,
      title: 'Station Management System',
      color: 'bg-black',
      features: [
        { icon: Package, text: 'View all packages & delivery batches' },
        { icon: Users, text: 'Assign drivers' },
        { icon: Package, text: 'Group deliveries' },
        { icon: DollarSign, text: 'Manage payroll' },
        { icon: FileText, text: 'Access past records' },
        { icon: MapPin, text: 'Track drivers live' },
        { icon: Phone, text: 'Communicate with drivers & customers' }
      ]
    }
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
  const card = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            <span>Platform Components</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Powerful Interfaces,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              One Ecosystem
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            Purpose-built tools for drivers, customers, and station managers
          </p>
        </div>

        <motion.div className="grid lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }}>
          {components.map((component, idx) => (
            <motion.div key={idx} variants={card} className="group bg-white rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className={`${component.color} p-8 text-white`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <component.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {component.title}
                </h3>
              </div>

              <div className="p-6 space-y-3">
                {component.features.map((feature, featureIdx) => (
                  <div
                    key={featureIdx}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed pt-1">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
