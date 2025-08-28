import React, { useState } from 'react';
import { ChevronRight, Menu, X, BookOpen, Users, Award, CheckCircle, Star, ArrowRight, Play, Code, Database, Globe, Zap, Target, Clock, Linkedin, PlayCircle, ExternalLink } from 'lucide-react';

import headerImage from "../images/dody-dev-header.png"


// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Master Coding with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Structured Paths
              </span>{' '}
              & Real Practice
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We curate the best resources from YouTube AND Udemy, then add exclusive assignments to accelerate your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105 flex items-center justify-center">
                Explore Learning Paths
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-500 px-8 py-3 rounded-full hover:bg-purple-500/10 transition flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-purple-400">500+</p>
                <p className="text-sm text-gray-400">Active Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-400">150+</p>
                <p className="text-sm text-gray-400">Assignments</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">4.9/5</p>
                <p className="text-sm text-gray-400">Student Rating</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30"></div>
            <img 
              src={headerImage} 
              alt="Learning illustration" 
              className="relative rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-2xl p-4 shadow-xl">
              <p className="text-sm text-gray-400 mb-1">Next assignment due</p>
              <p className="font-semibold">Binary Search Trees</p>
              <div className="flex items-center mt-2">
                <Clock className="w-4 h-4 text-purple-400 mr-1" />
                <span className="text-sm text-purple-400">2 days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;