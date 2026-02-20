import { Smartphone, Globe, Building2, Navigation, Phone, FileText, AlertCircle, MapPin, Clock, Users, DollarSign, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlatformComponents() {
  const components = [
    {
      icon: Smartphone,
      title: 'Driver Mobile App',
      color: 'bg-lamigo-orange',
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
      color: 'bg-lamigo-gunmetal',
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
      color: 'bg-lamigo-orange',
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

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
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
    <section id="features" className="py-20 bg-lamigo-gunmetal/5 dark:bg-lamigo-gunmetal/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-lamigo-gunmetal dark:text-lamigo-soft-white mb-4">Platform Components</h2>
          <p className="text-xl text-lamigo-gunmetal/80 dark:text-lamigo-soft-white/80">
            Purpose-built tools for drivers, customers, and station managers
          </p>
        </div>

        <motion.div className="grid lg:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }}>
          {components.map((component, idx) => (
            <motion.div key={idx} variants={card} className="group bg-lamigo-soft-white dark:bg-lamigo-gunmetal rounded-2xl border border-lamigo-gunmetal/10 dark:border-lamigo-soft-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className={`${component.color} p-8 text-lamigo-soft-white`}>
                <div className="w-16 h-16 bg-lamigo-soft-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-lamigo-gunmetal/5 dark:hover:bg-lamigo-soft-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-lamigo-gunmetal/10 dark:bg-lamigo-soft-white/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-lamigo-orange" />
                    </div>
                    <span className="text-lamigo-gunmetal dark:text-lamigo-soft-white text-sm leading-relaxed pt-1">
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
