import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-gray-900 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Delivery Operations{' '}
              <span className="block mt-2">With Intelligent Automation</span>
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join forward-thinking courier companies in Sri Lanka that are revolutionizing last-mile delivery with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 font-semibold flex items-center space-x-2">
                <span>Request Early Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 border-2 border-orange-500 text-white rounded-lg transition-all duration-200 font-semibold flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Contact Sales</span>
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm">Setup in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
