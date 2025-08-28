import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Globe } from 'lucide-react';
import { learningPaths } from '../data/learningPaths';

const LearningPaths = () => {
  return (
    <section id="paths" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning Path</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you prefer free YouTube tutorials or premium Udemy courses, our assignments work with both!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {learningPaths.map((path) => (
            <div key={path.id} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-500/50 transition transform hover:scale-105">
              <div className={`h-2 bg-gradient-to-r ${path.gradient}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{path.title}</h3>
                  <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                    {path.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">{path.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{path.assignments} Assignments</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="w-4 h-4 mr-2 text-purple-400" />
                    <span>Available on: {path.platforms.join(" & ")}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Topics covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {path.topics.slice(0, 4).map((topic, idx) => (
                      <span key={idx} className="text-xs bg-purple-600/10 text-purple-300 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                    {path.topics.length > 4 && (
                      <span className="text-xs bg-purple-600/10 text-purple-300 px-2 py-1 rounded">
                        +{path.topics.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <Link 
                  to={`/paths/${path.slug}`}
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition"
                >
                  View Curriculum
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">More paths coming soon!</p>
          <Link 
            to="/custom-plan"
            className="inline-block border border-purple-500 px-6 py-2 rounded-full hover:bg-purple-500/10 transition"
          >
            Request a Path
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;