import React, { useState } from 'react';
import { ChevronRight, Menu, X, BookOpen, Users, Award, CheckCircle, Star, ArrowRight, Play, Code, Database, Globe, Zap, Target, Clock, Linkedin, PlayCircle, ExternalLink } from 'lucide-react';




// Features Component
const Features = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Curated Learning Paths",
      description: "We find the best videos from YouTube & Udemy so you don't waste time searching"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Real-World Assignments",
      description: "Practice with industry-relevant projects that build your portfolio"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Flexible Learning",
      description: "Mix free YouTube videos with premium Udemy courses based on your budget"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-800/10 to-pink-800/10 p-8 rounded-2xl border border-purple-700/30 hover:border-purple-500/50 transition transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features;