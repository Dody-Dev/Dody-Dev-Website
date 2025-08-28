import React, { useState } from 'react';
import { ChevronRight, Menu, X, BookOpen, Users, Award, CheckCircle, Star, ArrowRight, Play, Code, Database, Globe, Zap, Target, Clock, Linkedin, PlayCircle, ExternalLink } from 'lucide-react';

// Enhanced Testimonials Component
const Testimonials = () => {
    const testimonials = [
      {
        name: "Priya Sharma",
        role: "Full Stack Developer @ TCS",
        content: "The structured assignments were exactly what I needed. After struggling with tutorial hell for months, DodyDev's approach finally helped me build real projects. I went from zero to landing a developer role in 6 months!",
        rating: 5,
        image: "/api/placeholder/80/80",
        linkedin: "https://linkedin.com/in/priyasharma",
        hasVideo: true,
        videoUrl: "https://youtube.com/shorts/example1"
      },
      {
        name: "Rahul Verma",
        role: "Frontend Developer @ Startup",
        content: "Being a college student, I couldn't afford expensive bootcamps. DodyDev's YouTube curation saved me thousands while the assignments ensured I actually learned. The DSA track especially helped me crack interviews!",
        rating: 5,
        image: "/api/placeholder/80/80",
        linkedin: "https://linkedin.com/in/rahulverma"
      },
      {
        name: "Sneha Patel",
        role: "Software Engineer @ Infosys",
        content: "What sets DodyDev apart is the quality of assignments. They're not just exercises - they're real-world problems. My GitHub is now full of projects that actually impressed recruiters!",
        rating: 5,
        image: "/api/placeholder/80/80",
        linkedin: "https://linkedin.com/in/snehapatel",
        hasVideo: true,
        videoUrl: "https://youtube.com/shorts/example2"
      },
      {
        name: "Amit Kumar",
        role: "MERN Stack Developer",
        content: "I was switching careers from mechanical engineering. The MERN stack path with carefully selected Udemy courses and practical assignments made the transition smooth. Now I'm building full-stack apps confidently!",
        rating: 5,
        image: "/api/placeholder/80/80",
        linkedin: "https://linkedin.com/in/amitkumar"
      },
      {
        name: "Pooja Singh",
        role: "Junior Developer @ Tech Mahindra",
        content: "The personalized learning path was a game-changer. They understood my time constraints and created a perfect mix of YouTube and Udemy content. Completed everything while working full-time!",
        rating: 5,
        image: "/api/placeholder/80/80",
        linkedin: "https://linkedin.com/in/poojasingh"
      },
      {
        name: "Karthik Reddy",
        role: "React Developer @ Wipro",
        content: "DodyDev doesn't just teach you to code - they teach you to think like a developer. The assignments progressively built my problem-solving skills. Worth every penny!",
        rating: 5,
        image: "/api/placeholder/80/80",
        linkedin: "https://linkedin.com/in/karthikreddy",
        hasVideo: true,
        videoUrl: "https://youtube.com/shorts/example3"
      }
    ];
  
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Real Success <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            From students to working professionals - see how DodyDev transformed their coding journey
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-800/10 to-pink-800/10 p-6 rounded-2xl border border-purple-700/30 hover:border-purple-500/50 transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-purple-500/50 mr-3"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <a 
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition"
                    title="View LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.content}"</p>
                
                {testimonial.hasVideo && (
                  <a 
                    href={testimonial.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    <PlayCircle className="w-4 h-4 mr-1" />
                    Watch video testimonial
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Join 500+ students who transformed their careers</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    );
  };

export default Testimonials;