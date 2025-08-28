import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Youtube, DollarSign, Clock, Target, Zap, Calendar, Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomPlanPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentLevel: '',
    goals: '',
    timeCommitment: '',
    budget: '',
    preferredPlatform: '',
    startDate: '',
    topics: [],
    additionalNotes: ''
  });

  const skillLevels = [
    { value: 'complete-beginner', label: 'Complete Beginner', desc: 'Never coded before' },
    { value: 'some-experience', label: 'Some Experience', desc: 'Know basics, need structure' },
    { value: 'intermediate', label: 'Intermediate', desc: 'Can code, want to level up' },
    { value: 'advanced', label: 'Advanced', desc: 'Looking for specific skills' }
  ];

  const timeOptions = [
    { value: '5-10', label: '5-10 hours/week', desc: 'Casual learning pace' },
    { value: '10-20', label: '10-20 hours/week', desc: 'Part-time commitment' },
    { value: '20-40', label: '20-40 hours/week', desc: 'Serious dedication' },
    { value: '40+', label: '40+ hours/week', desc: 'Full-time learning' }
  ];

  const topicOptions = [
    'Web Development', 'Data Structures', 'Algorithms', 'React', 
    'Node.js', 'Python', 'Machine Learning', 'Mobile Development',
    'Database Design', 'System Design', 'DevOps', 'Other'
  ];

  const handleTopicToggle = (topic) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Custom Learning Path</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your goals, and we'll create a personalized curriculum 
              that fits your schedule, budget, and learning style.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-700/30">
              <Target className="w-8 h-8 mb-3 text-purple-400" />
              <h3 className="font-semibold mb-2">Tailored to You</h3>
              <p className="text-sm text-gray-400">
                Curriculum designed specifically for your goals and current skill level
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-700/30">
              <Zap className="w-8 h-8 mb-3 text-pink-400" />
              <h3 className="font-semibold mb-2">Flexible Pricing</h3>
              <p className="text-sm text-gray-400">
                Mix free YouTube content with premium courses based on your budget
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-700/30">
              <Calendar className="w-8 h-8 mb-3 text-purple-400" />
              <h3 className="font-semibold mb-2">Your Schedule</h3>
              <p className="text-sm text-gray-400">
                Learn at your own pace with a timeline that works for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Current Skill Level */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30">
              <h2 className="text-2xl font-bold mb-6">Current Skill Level</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {skillLevels.map((level) => (
                  <label
                    key={level.value}
                    className={`relative cursor-pointer p-4 rounded-xl border-2 transition ${
                      formData.currentLevel === level.value
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-purple-700/30 hover:border-purple-600/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="currentLevel"
                      value={level.value}
                      checked={formData.currentLevel === level.value}
                      onChange={(e) => setFormData({...formData, currentLevel: e.target.value})}
                      className="sr-only"
                    />
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 ${
                        formData.currentLevel === level.value
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-600'
                      }`}>
                        {formData.currentLevel === level.value && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{level.label}</p>
                        <p className="text-sm text-gray-400">{level.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Learning Goals */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30">
              <h2 className="text-2xl font-bold mb-6">Learning Goals</h2>
              <textarea
                required
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 bg-gray-900/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                placeholder="What do you want to achieve? (e.g., 'Get a job as a frontend developer', 'Build my own web app', 'Switch careers to tech')"
              />
              <p className="text-sm text-gray-400 mt-2">
                Be specific about your goals so we can create the perfect path for you
              </p>
            </div>

            {/* Time Commitment */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30">
              <h2 className="text-2xl font-bold mb-6">Time Commitment</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {timeOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`relative cursor-pointer p-4 rounded-xl border-2 transition ${
                      formData.timeCommitment === option.value
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-purple-700/30 hover:border-purple-600/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeCommitment"
                      value={option.value}
                      checked={formData.timeCommitment === option.value}
                      onChange={(e) => setFormData({...formData, timeCommitment: e.target.value})}
                      className="sr-only"
                    />
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 ${
                        formData.timeCommitment === option.value
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-600'
                      }`}>
                        {formData.timeCommitment === option.value && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{option.label}</p>
                        <p className="text-sm text-gray-400">{option.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget & Platform */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30">
              <h2 className="text-2xl font-bold mb-6">Budget & Platform Preference</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  >
                    <option value="">Select budget</option>
                    <option value="free">Free (YouTube only)</option>
                    <option value="10-30">$10-30/month</option>
                    <option value="30-50">$30-50/month</option>
                    <option value="50+">$50+/month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Platform Preference</label>
                  <select
                    value={formData.preferredPlatform}
                    onChange={(e) => setFormData({...formData, preferredPlatform: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  >
                    <option value="">Select preference</option>
                    <option value="youtube">YouTube (Free)</option>
                    <option value="udemy">Udemy (Paid)</option>
                    <option value="mix">Mix of Both</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-600/10 rounded-lg border border-purple-700/30">
                <div className="flex items-center">
                  <Youtube className="w-5 h-5 mr-3 text-red-500" />
                  <span className="text-sm">YouTube content is always free</span>
                </div>
                <div className="flex items-center mt-2">
                  <DollarSign className="w-5 h-5 mr-3 text-purple-400" />
                  <span className="text-sm">Udemy courses typically range from $10-50</span>
                </div>
              </div>
            </div>

            {/* Topics of Interest */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30">
              <h2 className="text-2xl font-bold mb-6">Topics of Interest</h2>
              <p className="text-gray-400 mb-4">Select all that apply</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {topicOptions.map((topic) => (
                  <label
                    key={topic}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition text-center ${
                      formData.topics.includes(topic)
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-purple-700/30 hover:border-purple-600/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.topics.includes(topic)}
                      onChange={() => handleTopicToggle(topic)}
                      className="sr-only"
                    />
                    <span className="text-sm">{topic}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-purple-700/30">
              <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-purple-700/30 rounded-lg focus:border-purple-500 focus:outline-none transition"
                    placeholder="Any specific requirements, constraints, or questions?"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105 text-lg font-semibold"
              >
                <Send className="mr-2 w-5 h-5" />
                Get My Custom Plan
              </button>
              <p className="text-sm text-gray-400 mt-4">
                We'll review your information and send a personalized learning path within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-700/30">
              <h3 className="font-semibold mb-2">Is the custom plan really free?</h3>
              <p className="text-gray-400">
                Yes! Creating a custom learning path is completely free. You only pay for the course content 
                if you choose Udemy courses. YouTube content is always free.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-700/30">
              <h3 className="font-semibold mb-2">How detailed is the custom plan?</h3>
              <p className="text-gray-400">
                Your custom plan includes week-by-week curriculum, specific video recommendations, 
                assignment schedules, and milestones tailored to your goals and timeline.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-700/30">
              <h3 className="font-semibold mb-2">Can I change my plan later?</h3>
              <p className="text-gray-400">
                Absolutely! Learning is flexible. You can adjust your pace, switch between YouTube 
                and Udemy resources, or request plan modifications anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomPlanPage;