import React, { useState } from 'react';
import { ChevronRight, Menu, X, BookOpen, Users, Award, CheckCircle, Star, ArrowRight, Play, Code, Database, Globe, Zap, Target, Clock, Linkedin, PlayCircle, ExternalLink } from 'lucide-react';

import CTASection from '../components/CTASection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import LearningPaths from '../components/LearningPaths.jsx';
import Navigation from '../components/Navigation';
import Testimonials from '../components/Testimonials';



// Main App Component
 function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <Features />
      <LearningPaths />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default HomePage;