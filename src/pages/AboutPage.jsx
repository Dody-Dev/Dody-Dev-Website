import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Users, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DodyDev</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to make quality coding education accessible to everyone, 
              regardless of their budget or background.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  DodyDev was born out of frustration. As a self-taught developer, I spent months jumping between 
                  YouTube tutorials and expensive courses, never knowing if I was learning the right things in the 
                  right order.
                </p>
                <p>
                  The biggest problem? <span className="text-purple-400 font-semibold">Tutorial hell</span>. 
                  I watched hundreds of videos but couldn't build anything on my own. The missing piece was 
                  structured practice with real-world assignments.
                </p>
                <p>
                  That's when I realized: learners don't need more courses. They need a 
                  <span className="text-pink-400 font-semibold"> clear path</span> and 
                  <span className="text-purple-400 font-semibold"> hands-on practice</span>.
                </p>
                <p>
                  Today, DodyDev helps hundreds of students escape tutorial hell by combining the best free and 
                  paid resources with exclusive assignments that actually prepare you for real development work.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400/1e1b4b/c084fc?text=Our+Journey" 
                alt="Our journey"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-800/20 backdrop-blur-sm rounded-xl p-4 border border-purple-700/30">
                <p className="text-sm text-gray-300 mb-2">Started in</p>
                <p className="text-2xl font-bold text-purple-400">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            The <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">DodyDev</span> Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-800/10 to-pink-800/10 p-8 rounded-2xl border border-purple-700/30">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Learning</h3>
              <p className="text-gray-400">
                We watch hundreds of hours of content so you don't have to. Every resource is handpicked 
                for quality and teaching effectiveness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-800/10 to-pink-800/10 p-8 rounded-2xl border border-purple-700/30">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Practice</h3>
              <p className="text-gray-400">
                Our assignments aren't just exercises - they're mini-projects that build your portfolio 
                while teaching core concepts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-800/10 to-pink-800/10 p-8 rounded-2xl border border-purple-700/30">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Budget Friendly</h3>
              <p className="text-gray-400">
                Mix free YouTube content with premium Udemy courses based on your budget. Quality 
                education shouldn't break the bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Why We're Different</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">We're Not Another Course Platform</h4>
                  <p className="text-gray-400">
                    We don't create courses. We organize existing excellent content and add what's missing - 
                    structured practice.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Platform Agnostic</h4>
                  <p className="text-gray-400">
                    Found a better YouTube video? We'll include it. Prefer Udemy? That works too. 
                    We care about your learning, not platform loyalty.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Built by Developers, for Developers</h4>
                  <p className="text-gray-400">
                    We understand the journey because we've been through it. Every assignment is designed 
                    to build real skills employers want.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-700/30">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Students Helped</span>
                    <span className="font-bold text-purple-400">500+</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Assignments Created</span>
                    <span className="font-bold text-pink-400">150+</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Job Placements</span>
                    <span className="font-bold text-purple-400">87%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img 
                src="https://placehold.co/200x200/1e1b4b/c084fc?text=Founder" 
                alt="Founder"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500/50"
              />
              <h3 className="font-semibold text-lg">Dody</h3>
              <p className="text-purple-400 text-sm mb-2">Founder & Lead Instructor</p>
              <p className="text-gray-400 text-sm">
                Self-taught developer passionate about making coding accessible to everyone.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://placehold.co/200x200/1e1b4b/c084fc?text=Dev" 
                alt="Lead Developer"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500/50"
              />
              <h3 className="font-semibold text-lg">Sarah Chen</h3>
              <p className="text-purple-400 text-sm mb-2">Curriculum Designer</p>
              <p className="text-gray-400 text-sm">
                Former bootcamp instructor with a knack for creating engaging assignments.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://placehold.co/200x200/1e1b4b/c084fc?text=Support" 
                alt="Support Lead"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500/50"
              />
              <h3 className="font-semibold text-lg">Mike Johnson</h3>
              <p className="text-purple-400 text-sm mb-2">Student Success</p>
              <p className="text-gray-400 text-sm">
                Helps students navigate their learning journey and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ students who are building real skills with DodyDev
          </p>
          <Link 
            to="/paths"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105"
          >
            Explore Learning Paths
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;