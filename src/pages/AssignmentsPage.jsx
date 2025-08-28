import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Play, FileCode, Terminal, CheckCircle, Lock, Unlock, Monitor, Smartphone, Award, Brain, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AssignmentsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCodeEditor, setShowCodeEditor] = useState(false);

  const assignmentCategories = [
    { id: 'all', name: 'All Assignments', count: 150 },
    { id: 'coding', name: 'Coding Challenges', count: 80 },
    { id: 'projects', name: 'Projects', count: 50 },
    { id: 'algorithms', name: 'Algorithms', count: 20 }
  ];

  const sampleAssignments = [
    {
      id: 1,
      title: 'Todo List App',
      category: 'projects',
      difficulty: 'Beginner',
      type: 'Project-Based',
      description: 'Build a functional todo list with add, delete, and complete features',
      skills: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      preview: 'https://placehold.co/400x300/1e1b4b/c084fc?text=Todo+App+Preview',
      locked: false
    },
    {
      id: 2,
      title: 'Binary Search Implementation',
      category: 'algorithms',
      difficulty: 'Intermediate',
      type: 'Coding Challenge',
      description: 'Implement binary search algorithm with edge cases handling',
      skills: ['Algorithms', 'Problem Solving', 'Time Complexity'],
      preview: 'https://placehold.co/400x300/1e1b4b/c084fc?text=Binary+Search',
      locked: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'projects',
      difficulty: 'Intermediate',
      type: 'Project-Based',
      description: 'Create a weather app using external API with location search',
      skills: ['API Integration', 'Async JavaScript', 'UI Design'],
      preview: 'https://placehold.co/400x300/1e1b4b/c084fc?text=Weather+App',
      locked: true
    },
    {
      id: 4,
      title: 'Array Manipulation Challenges',
      category: 'coding',
      difficulty: 'Beginner',
      type: 'Coding Challenge',
      description: 'Solve 10 array manipulation problems with increasing difficulty',
      skills: ['Arrays', 'Loops', 'Problem Solving'],
      preview: 'https://placehold.co/400x300/1e1b4b/c084fc?text=Array+Challenges',
      locked: false
    }
  ];

  const filteredAssignments = activeCategory === 'all' 
    ? sampleAssignments 
    : sampleAssignments.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Practice with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Real Assignments</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From coding challenges to full projects, our assignments help you build a portfolio 
              while mastering programming concepts.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <FileCode className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <p className="text-3xl font-bold">150+</p>
              <p className="text-gray-400">Assignments</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <Brain className="w-8 h-8 mx-auto mb-2 text-pink-400" />
              <p className="text-3xl font-bold">3</p>
              <p className="text-gray-400">Difficulty Levels</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-400">Projects</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-pink-400" />
              <p className="text-3xl font-bold">AI</p>
              <p className="text-gray-400">Code Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Two Ways to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Practice</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-700/30">
              <div className="flex items-center mb-4">
                <Terminal className="w-8 h-8 mr-3 text-purple-400" />
                <h3 className="text-xl font-semibold">Coding Challenges</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Solve algorithmic problems in our built-in code editor with instant feedback.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  In-browser code editor
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Multiple test cases
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Instant execution
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 p-8 rounded-2xl border border-purple-700/30">
              <div className="flex items-center mb-4">
                <Github className="w-8 h-8 mr-3 text-purple-400" />
                <h3 className="text-xl font-semibold">Project-Based</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Build complete projects locally and submit via GitHub for AI-powered review.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Real-world projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  GitHub integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  AI code review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assignment Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {assignmentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'border border-purple-500 hover:bg-purple-500/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Assignment Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredAssignments.map((assignment) => (
              <div key={assignment.id} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-500/50 transition">
                <div className="relative">
                  <img 
                    src={assignment.preview} 
                    alt={assignment.title}
                    className="w-full h-48 object-cover"
                  />
                  {assignment.locked && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Lock className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      assignment.difficulty === 'Beginner' ? 'bg-green-600/80' :
                      assignment.difficulty === 'Intermediate' ? 'bg-yellow-600/80' :
                      'bg-red-600/80'
                    }`}>
                      {assignment.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{assignment.title}</h3>
                  <p className="text-gray-400 mb-4">{assignment.description}</p>
                  
                  <div className="flex items-center text-sm text-purple-400 mb-4">
                    <Code className="w-4 h-4 mr-2" />
                    {assignment.type}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {assignment.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-purple-600/10 text-purple-300 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {!assignment.locked ? (
                    <button 
                      onClick={() => setShowCodeEditor(true)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition flex items-center justify-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Assignment
                    </button>
                  ) : (
                    <button className="w-full bg-gray-700 py-2 rounded-lg cursor-not-allowed flex items-center justify-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Unlock with Course
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Editor Modal */}
      {showCodeEditor && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="bg-gray-800 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Code Editor - Todo List App</h3>
              <button 
                onClick={() => setShowCodeEditor(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="grid lg:grid-cols-2 h-[70vh]">
              <div className="bg-gray-950 p-4 overflow-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">script.js</span>
                  <button className="bg-purple-600 px-4 py-1 rounded text-sm hover:bg-purple-700 transition">
                    Run Code
                  </button>
                </div>
                <pre className="text-sm text-gray-300 font-mono">
{`// Todo List Implementation
function addTodo() {
  const input = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    todoList.appendChild(li);
    input.value = '';
  }
}

// Add your code here...`}
                </pre>
              </div>
              
              <div className="bg-gray-900 p-4 border-l border-gray-800">
                <h4 className="text-sm text-gray-400 mb-4">Output / Instructions</h4>
                <div className="bg-gray-950 rounded p-4 mb-4">
                  <h5 className="font-semibold mb-2">Assignment Requirements:</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Create a todo list with add functionality</li>
                    <li>• Implement delete todo feature</li>
                    <li>• Add complete/incomplete toggle</li>
                    <li>• Style with CSS for better UX</li>
                  </ul>
                </div>
                <div className="bg-gray-950 rounded p-4">
                  <h5 className="font-semibold mb-2">Test Cases:</h5>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      <span>Can add new todos</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-600"></div>
                      <span>Can delete todos</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 rounded-full border-2 border-gray-600"></div>
                      <span>Can mark as complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AssignmentsPage;