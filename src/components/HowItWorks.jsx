import React, { useState } from 'react';
import { ChevronRight, Menu, X, BookOpen, Users, Award, CheckCircle, Star, ArrowRight, Play, Code, Database, Globe, Zap, Target, Clock, Linkedin, PlayCircle, ExternalLink } from 'lucide-react';



// How It Works Component
const HowItWorks = () => {
  const steps = [
    { step: 1, title: "Choose Your Path", desc: "Pick from coding basics, DSA, or MERN stack" },
    { step: 2, title: "Access Curated Content", desc: "Get the best videos from YouTube & Udemy" },
    { step: 3, title: "Complete Assignments", desc: "Practice with our exclusive hands-on projects" },
    { step: 4, title: "Build Your Portfolio", desc: "Showcase your completed projects to employers" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          How <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DodyDev</span> Works
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-2xl border border-purple-700/30 hover:border-purple-500/50 transition">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
              {item.step < 4 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-purple-500/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;