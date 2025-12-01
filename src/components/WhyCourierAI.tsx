import { CheckCircle, TrendingDown, Heart, Settings, Navigation, TrendingUp, Shield } from 'lucide-react';

export default function WhyCourierAI() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Delays',
      description: 'AI-optimized routes eliminate unnecessary wait times'
    },
    {
      icon: TrendingDown,
      title: 'Lower Costs',
      description: 'Minimize fuel consumption and labour expenses'
    },
    {
      icon: Heart,
      title: 'Improve Satisfaction',
      description: 'Keep customers informed with accurate ETAs'
    },
    {
      icon: Settings,
      title: 'Standardise Operations',
      description: 'Consistent processes across all deliveries'
    },
    {
      icon: Navigation,
      title: 'Eliminate Manual Planning',
      description: 'No more guesswork in route optimization'
    },
    {
      icon: TrendingUp,
      title: 'Increase Success Rate',
      description: 'Higher first-attempt delivery completion'
    },
    {
      icon: Shield,
      title: 'Driver Accountability',
      description: 'Track performance and ensure reliability'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-orange-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-medium mb-6 shadow-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Why Choose CourierAI</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Delivery Operations
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            Join leading courier companies in Sri Lanka leveraging AI to revolutionize last-mile delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
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

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Impact Metrics</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-blue-100">Fuel Savings</span>
                    <span className="text-2xl font-bold">25-35%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-blue-100">Time Efficiency</span>
                    <span className="text-2xl font-bold">40%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-blue-100">Customer Satisfaction</span>
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
