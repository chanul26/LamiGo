import { Brain, Zap, Eye, Wrench, Heart, TrendingUp } from 'lucide-react';

export default function Features() {
  const featureCategories = [
    {
      icon: Brain,
      title: 'AI & Automation',
      color: 'from-blue-500 to-blue-700',
      items: [
        'Machine-learning ETA prediction',
        'Route sequencing (TSP/VRP optimization)',
        'Real-time traffic integration'
      ]
    },
    {
      icon: Eye,
      title: 'Visibility & Tracking',
      color: 'from-blue-600 to-blue-800',
      items: [
        'Live driver location',
        'ETA updates',
        'Emergency alerts'
      ]
    },
    {
      icon: Wrench,
      title: 'Operational Tools',
      color: 'from-orange-500 to-orange-600',
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
      color: 'from-orange-400 to-orange-500',
      items: [
        'ETA link via SMS',
        'Real-time updates',
        'Location pinning'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Feature Highlights</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            Comprehensive features designed to streamline every aspect of your delivery operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl"></div>

              <div className="relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start space-x-2 text-gray-600"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mt-2"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-gray-900 mb-2">150+</h4>
            <p className="text-gray-700">Deliveries Per Day</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-gray-900 mb-2">30%</h4>
            <p className="text-gray-700">Time Savings</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl">
            <Heart className="w-12 h-12 text-white mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-white mb-2">95%</h4>
            <p className="text-gray-300">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
