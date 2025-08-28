import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Send, MapPin, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const contactReasons = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'custom-path', label: 'Custom Learning Path' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our learning paths? Need help getting started? 
              We're here to help you succeed in your coding journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-2xl border border-purple-700/30 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">For detailed inquiries and support</p>
              <a href="mailto:support@dodydev.com" className="text-purple-400 hover:text-purple-300 transition">
                support@dodydev.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-2xl border border-purple-700/30 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-pink-400" />
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">Quick questions? Chat with us</p>
              <button className="text-purple-400 hover:text-purple-300 transition">
                Available 9 AM - 9 PM IST
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-2xl border border-purple-700/30 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold text-lg mb-2">Response Time</h3>
              <p className="text-gray-400 mb-4">We typically respond within</p>
              <p className="text-purple-400 font-semibold">24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  >
                    <option value="">Select a topic</option>
                    {contactReasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition flex items-center justify-center font-semibold"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="lg:pl-12">
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30 mb-8">
                <h3 className="text-xl font-semibold mb-6">Quick Help</h3>
                <div className="space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer font-medium hover:text-purple-400 transition">
                      How do I get started?
                    </summary>
                    <p className="mt-2 text-gray-400 text-sm pl-4">
                      Browse our learning paths and choose one that matches your goals. 
                      Each path includes free YouTube options and premium Udemy alternatives.
                    </p>
                  </details>
                  
                  <details className="group">
                    <summary className="cursor-pointer font-medium hover:text-purple-400 transition">
                      Can I get a refund?
                    </summary>
                    <p className="mt-2 text-gray-400 text-sm pl-4">
                      We don't charge for YouTube content. For Udemy courses, their 
                      30-day refund policy applies. Our assignment packages have a 7-day 
                      satisfaction guarantee.
                    </p>
                  </details>
                  
                  <details className="group">
                    <summary className="cursor-pointer font-medium hover:text-purple-400 transition">
                      Do you offer mentorship?
                    </summary>
                    <p className="mt-2 text-gray-400 text-sm pl-4">
                      Currently, we focus on self-paced learning with community support. 
                      1-on-1 mentorship is coming soon!
                    </p>
                  </details>
                  
                  <details className="group">
                    <summary className="cursor-pointer font-medium hover:text-purple-400 transition">
                      How long do I have access?
                    </summary>
                    <p className="mt-2 text-gray-400 text-sm pl-4">
                      Once you purchase an assignment package, you have lifetime access. 
                      YouTube content is always free, and Udemy courses follow their 
                      lifetime access policy.
                    </p>
                  </details>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-700/30">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-purple-400" />
                    <span>Monday - Friday: 9 AM - 9 PM IST</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-purple-400" />
                    <span>Saturday: 10 AM - 6 PM IST</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-purple-400" />
                    <span>Sunday: Limited Support</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-purple-700/30">
                  <p className="text-sm text-gray-400">
                    Based in India, serving students worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;