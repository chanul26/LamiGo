import { AlertCircle, TrendingDown, MapPin, Clock, MessageSquare, Fuel, Users, XCircle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      stat: '40-41%',
      title: 'Of Total Logistics Cost',
      description: 'Last-mile delivery accounts for nearly half of all logistics expenses'
    },
    {
      icon: MapPin,
      stat: 'Manual',
      title: 'Route Planning',
      description: 'Couriers guess routes manually leading to inefficient and inconsistent deliveries'
    },
    {
      icon: Clock,
      stat: 'No ETAs',
      title: 'Unreliable Timing',
      description: 'Customers receive no reliable delivery time estimates'
    },
    {
      icon: MessageSquare,
      stat: 'WhatsApp',
      title: 'Incident Reporting',
      description: 'Issues communicated via messaging apps with no proper logs or tracking'
    },
    {
      icon: Fuel,
      stat: 'High Waste',
      title: 'Fuel & Time Losses',
      description: 'Poor planning causes excessive fuel consumption and delays'
    },
    {
      icon: Users,
      stat: 'No Visibility',
      title: 'Tracking Issues',
      description: 'Branches have no real-time location visibility of drivers'
    },
    {
      icon: XCircle,
      stat: 'Failed',
      title: 'Delivery Attempts',
      description: 'Customer unavailability leads to failed deliveries and extra costs'
    },
    {
      icon: AlertCircle,
      stat: 'Unstructured',
      title: 'No Management System',
      description: 'Complete absence of structured tracking or delivery management'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            <span>Industry Challenges</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Last-Mile Delivery{' '}
            <span className="text-orange-500">Crisis</span>
          </h2>

          <p className="text-xl text-gray-600">
            Sri Lanka's courier industry faces critical inefficiencies that impact both operations and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-6 h-6 text-blue-600" />
              </div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                {problem.stat}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
