import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Demo', href: '#demo' },
      { label: 'Integrations', href: '#integrations' }
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Security', href: '#security' },
      { label: 'Cookie Policy', href: '#cookies' }
    ]
  };

  return (
    <motion.footer className="bg-gray-100 text-gray-900" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Lamigo Logo" className="h-20 w-auto" />
            </div>

            <p className="text-gray-900 mb-6 leading-relaxed">
              AI-powered last-mile delivery optimization platform designed for courier companies in Sri Lanka. Transform your operations with intelligent automation.
            </p>

            <div className="space-y-3">
              <a href="amigo.sdgp@gmail.com" className="flex items-center space-x-2 text-gray-900 ">
                <Mail className="w-4 h-4" />
                <span>lamigo.sdgp@gmail.com</span>
              </a>
              <a href="tel:+94112345678" className="flex items-center space-x-2 text-gray-900">
                <Phone className="w-4 h-4" />
                <span>+94 11 234 5678</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  {link.label === 'About' ? (
                    <Link to="/about" className="text-gray-900">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-900">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-900 text-sm">
              © 2025 LamiGo. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <motion.a href="#" className="text-gray-900" whileHover={{ scale: 1.06 }}>
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-gray-900" whileHover={{ scale: 1.06 }}>
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
