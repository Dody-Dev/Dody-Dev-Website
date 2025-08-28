import React, { useState } from 'react';
import { ChevronRight, Menu, X, BookOpen, Users, Award, CheckCircle, Star, ArrowRight, Play, Code, Database, Globe, Zap, Target, Clock, Linkedin, PlayCircle, ExternalLink } from 'lucide-react';


// CTA Section Component
const CTASection = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800/20 to-pink-800/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Need a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Personalized Path?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's create a custom curriculum tailored to your specific goals and timeline
        </p>
        
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-purple-700/30 mb-8">
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-3 text-purple-400">YouTube Curation</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Always Free</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Handpicked quality videos</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Structured learning path</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-pink-400">Udemy Enhanced</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Starting at $10</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Premium course access</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" />Mix with free content</li>
              </ul>
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105 text-lg">
          Get Your Custom Plan
        </button>
      </div>
    </section>
  );
};

export default CTASection;