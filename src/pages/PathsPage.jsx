import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Globe, DollarSign, Filter, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { learningPaths } from '../data/learningPaths';

const PathsPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredPaths = selectedDifficulty === 'all' 
    ? learningPaths 
    : learningPaths.filter(path => path.difficulty.toLowerCase() === selectedDifficulty);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              All <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning Paths</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your path and start building real projects. Each path includes curated videos 
              from YouTube & Udemy plus exclusive hands-on assignments.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedDifficulty('all')}
              className={`px-6 py-2 rounded-full transition ${
                selectedDifficulty === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'border border-purple-500 hover:bg-purple-500/10'
              }`}
            >
              All Paths
            </button>
            <button
              onClick={() => setSelectedDifficulty('beginner')}
              className={`px-6 py-2 rounded-full transition ${
                selectedDifficulty === 'beginner'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'border border-purple-500 hover:bg-purple-500/10'
              }`}
            >
              Beginner
            </button>
            <button
              onClick={() => setSelectedDifficulty('intermediate')}
              className={`px-6 py-2 rounded-full transition ${
                selectedDifficulty === 'intermediate'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'border border-purple-500 hover:bg-purple-500/10'
              }`}
            >
              Intermediate
            </button>
            <button
              onClick={() => setSelectedDifficulty('advanced')}
              className={`px-6 py-2 rounded-full transition ${
                selectedDifficulty === 'advanced'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'border border-purple-500 hover:bg-purple-500/10'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>
      </section>

      {/* Paths Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPaths.map((path) => (
              <div 
                key={path.id} 
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-500/50 transition"
              >
                <div className={`h-3 bg-gradient-to-r ${path.gradient}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                      <p className="text-gray-400">{path.longDescription}</p>
                    </div>
                    <span className="text-sm bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full whitespace-nowrap">
                      {path.difficulty}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-6">
                    <div className="bg-gray-900/50 p-4 rounded-xl">
                      <div className="flex items-center text-sm text-gray-400 mb-1">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration
                      </div>
                      <p className="font-semibold">{path.duration}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl">
                      <div className="flex items-center text-sm text-gray-400 mb-1">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Assignments
                      </div>
                      <p className="font-semibold">{path.assignments} Projects</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl">
                      <div className="flex items-center text-sm text-gray-400 mb-1">
                        <Globe className="w-4 h-4 mr-2" />
                        YouTube
                      </div>
                      <p className="font-semibold text-green-400">{path.price.youtube}</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-xl">
                      <div className="flex items-center text-sm text-gray-400 mb-1">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Udemy
                      </div>
                      <p className="font-semibold text-purple-400">{path.price.udemy}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-purple-400">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {path.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-purple-400">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic, idx) => (
                        <span key={idx} className="text-xs bg-purple-600/10 text-purple-300 px-3 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to={`/paths/${path.slug}`}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition"
                  >
                    View Full Curriculum
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Card */}
          <div className="mt-8 bg-gray-800/30 rounded-2xl border border-purple-700/30 p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">More Paths Coming Soon!</h3>
            <p className="text-gray-400 mb-6">
              We're constantly adding new learning paths based on student requests and industry demands.
            </p>
            <Link 
              to="/custom-plan"
              className="inline-flex items-center border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500/10 transition"
            >
              Request a Custom Path
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PathsPage;