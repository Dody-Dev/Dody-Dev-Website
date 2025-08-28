import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BookOpen, Globe, DollarSign, Play, CheckCircle, Star, Users, Award, ChevronDown, ChevronUp, Youtube, ExternalLink, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { learningPaths } from '../data/learningPaths';

const PathDetailPage = () => {
  const { pathId } = useParams();
  const path = learningPaths.find(p => p.slug === pathId);
  const [expandedWeek, setExpandedWeek] = useState(0);
  const [activeTab, setActiveTab] = useState('curriculum');

  if (!path) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <Navigation />
        <div className="pt-24 text-center">
          <h1 className="text-4xl font-bold">Path not found</h1>
          <Link to="/paths" className="text-purple-400 hover:underline mt-4 inline-block">
            Back to all paths
          </Link>
        </div>
      </div>
    );
  }

  // Sample reviews data
  const reviews = [
    {
      name: "Anjali Mehta",
      role: "Now at Infosys",
      rating: 5,
      date: "2 weeks ago",
      content: "The structured approach with assignments made all the difference. I finally understood concepts that seemed impossible before.",
      image: "https://placehold.co/60x60/1e1b4b/c084fc?text=AM"
    },
    {
      name: "Rohit Sharma",
      role: "Frontend Developer",
      rating: 5,
      date: "1 month ago",
      content: "Best investment I made. The mix of YouTube and Udemy content saved me money while the assignments gave me real practice.",
      image: "https://placehold.co/60x60/1e1b4b/c084fc?text=RS"
    },
    {
      name: "Priya Patel",
      role: "Student",
      rating: 5,
      date: "1 month ago",
      content: "As a college student, this path perfectly complemented my studies. The assignments are industry-relevant!",
      image: "https://placehold.co/60x60/1e1b4b/c084fc?text=PP"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navigation />
      
      {/* Hero Banner with Video */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${path.gradient} opacity-10`}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full">
                  {path.difficulty}
                </span>
                <span className="text-sm text-gray-400">
                  <Users className="w-4 h-4 inline mr-1" />
                  234 students enrolled
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{path.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{path.longDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration
                  </div>
                  <p className="font-semibold text-lg">{path.duration}</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Assignments
                  </div>
                  <p className="font-semibold text-lg">{path.assignments} Projects</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/custom-plan"
                  className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition"
                >
                  Enroll Now
                  <ChevronDown className="ml-2 w-5 h-5" />
                </Link>
                <button className="flex items-center justify-center border border-purple-500 px-8 py-3 rounded-full hover:bg-purple-500/10 transition">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Intro
                </button>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://placehold.co/600x400/1e1b4b/c084fc?text=Course+Preview" 
                  alt="Course preview"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-purple-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-800/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-gray-300">Starting at</p>
                <p className="text-2xl font-bold">
                  <span className="text-green-400">{path.price.youtube}</span>
                  <span className="text-gray-400 text-sm"> or </span>
                  <span className="text-purple-400">{path.price.udemy}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-16 z-40 bg-gray-900/95 backdrop-blur-md border-y border-purple-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['curriculum', 'outcomes', 'reviews', 'instructors'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 capitalize border-b-2 transition whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Full Curriculum</h2>
              <div className="space-y-6">
                {path.curriculum.map((week, idx) => (
                  <div key={idx} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-700/30">
                    <button
                      onClick={() => setExpandedWeek(expandedWeek === idx ? -1 : idx)}
                      className="w-full p-6 flex items-center justify-between hover:bg-gray-800/70 transition"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold mr-4">
                          {week.week}
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-semibold">{week.title}</h3>
                          <p className="text-sm text-gray-400">{week.topics.length} lessons • {week.assignments.length} assignments</p>
                        </div>
                      </div>
                      {expandedWeek === idx ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {expandedWeek === idx && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-purple-700/30 pt-6">
                          <h4 className="font-semibold mb-4 text-purple-400">Video Lessons:</h4>
                          <div className="space-y-3 mb-6">
                            {week.topics.map((topic, topicIdx) => (
                              <div key={topicIdx} className="bg-gray-900/50 p-4 rounded-xl">
                                <h5 className="font-medium mb-2">{topic.title}</h5>
                                <div className="flex flex-col sm:flex-row gap-3">
                                  <div className="flex items-center text-sm text-gray-400">
                                    <Youtube className="w-4 h-4 mr-2 text-red-500" />
                                    <span>YouTube: {topic.youtube}</span>
                                  </div>
                                  <div className="flex items-center text-sm text-gray-400">
                                    <ExternalLink className="w-4 h-4 mr-2 text-purple-400" />
                                    <span>Udemy: {topic.udemy}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <h4 className="font-semibold mb-4 text-purple-400">Assignments:</h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {week.assignments.map((assignment, assignIdx) => (
                              <div key={assignIdx} className="bg-purple-600/10 p-3 rounded-lg flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                                <span className="text-sm">{assignment}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes Tab */}
          {activeTab === 'outcomes' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">What You'll Achieve</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Skills You'll Master</h3>
                  <ul className="space-y-3">
                    {path.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <Award className="w-5 h-5 mr-3 text-purple-400 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Career Opportunities</h3>
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-700/30">
                    <p className="text-gray-300 mb-4">
                      Graduates of this path have gone on to work at:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'Startups'].map((company) => (
                        <span key={company} className="bg-purple-600/20 px-3 py-1 rounded-full text-sm">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Student Reviews</h2>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="text-gray-400 ml-2">(87 reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-6 rounded-xl border border-purple-700/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <img 
                          src={review.image} 
                          alt={review.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-gray-400">{review.role} • {review.date}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructors Tab */}
          {activeTab === 'instructors' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Learn from the Best</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">YouTube Instructors</h3>
                  <p className="text-gray-300 mb-4">
                    We've handpicked the best YouTube educators for each topic:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Youtube className="w-4 h-4 mr-2 text-red-500" />
                      <span>CodeWithHarry - Hindi/English tutorials</span>
                    </li>
                    <li className="flex items-center">
                      <Youtube className="w-4 h-4 mr-2 text-red-500" />
                      <span>Traversy Media - Project-based learning</span>
                    </li>
                    <li className="flex items-center">
                      <Youtube className="w-4 h-4 mr-2 text-red-500" />
                      <span>The Net Ninja - Clear explanations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Udemy Instructors</h3>
                  <p className="text-gray-300 mb-4">
                    Premium courses from top-rated instructors:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      <span>Jonas Schmedtmann - 4.7★ rating</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      <span>Maximilian Schwarzmüller - 4.6★ rating</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      <span>Stephen Grider - 4.8★ rating</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800/20 to-pink-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 234 students already enrolled in this path
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/custom-plan"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105"
            >
              Get Started with {path.title}
            </Link>
            <Link 
              to="/paths"
              className="border border-purple-500 px-8 py-3 rounded-full hover:bg-purple-500/10 transition"
            >
              Explore Other Paths
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PathDetailPage;