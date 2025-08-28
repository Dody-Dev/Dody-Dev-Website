export const learningPaths = [
    {
      id: 'basic-coding',
      slug: 'basic-coding',
      title: 'Basic Coding Fundamentals',
      description: 'Master the basics of programming with hands-on projects',
      longDescription: 'Start your coding journey with a comprehensive introduction to programming concepts. This path is designed for absolute beginners and covers everything from setting up your development environment to building your first projects.',
      duration: '8 weeks',
      assignments: 25,
      difficulty: 'Beginner',
      price: {
        youtube: 'Free',
        udemy: '$47'
      },
      platforms: ['YouTube', 'Udemy'],
      topics: ['Variables', 'Functions', 'Loops', 'Arrays', 'Objects', 'DOM Manipulation'],
      gradient: 'from-blue-500 to-purple-600',
      curriculum: [
        {
          week: 1,
          title: 'Introduction to Programming',
          topics: [
            { title: 'Setting up VS Code', youtube: 'CodeWithHarry', udemy: 'Colt Steele' },
            { title: 'Your First Program', youtube: 'freeCodeCamp', udemy: 'Jonas Schmedtmann' },
            { title: 'Understanding Variables', youtube: 'Traversy Media', udemy: 'Maximilian Schwarzmüller' }
          ],
          assignments: ['Hello World Variations', 'Variable Calculator', 'Data Type Explorer']
        },
        {
          week: 2,
          title: 'Control Flow & Functions',
          topics: [
            { title: 'If-Else Statements', youtube: 'The Net Ninja', udemy: 'Angela Yu' },
            { title: 'Loops and Iteration', youtube: 'Dev Ed', udemy: 'Brad Traversy' },
            { title: 'Functions Basics', youtube: 'Academind', udemy: 'Andrew Mead' }
          ],
          assignments: ['Grade Calculator', 'Pattern Printer', 'Function Library']
        }
      ],
      outcomes: [
        'Build interactive web applications',
        'Understand core programming concepts',
        'Write clean, maintainable code',
        'Debug programs effectively'
      ]
    },
    {
      id: 'dsa-fundamentals',
      slug: 'dsa-fundamentals',
      title: 'Data Structures & Algorithms',
      description: 'Learn searching, sorting, recursion, and 2D arrays',
      longDescription: 'Dive deep into the world of data structures and algorithms. This intermediate path will prepare you for technical interviews and help you write more efficient code.',
      duration: '12 weeks',
      assignments: 40,
      difficulty: 'Intermediate',
      price: {
        youtube: 'Free',
        udemy: '$67'
      },
      platforms: ['YouTube', 'Udemy'],
      topics: ['Searching', 'Sorting', 'Recursion', '2D Arrays', 'Stacks', 'Queues'],
      gradient: 'from-purple-500 to-pink-600',
      curriculum: [
        {
          week: 1,
          title: 'Arrays and Searching',
          topics: [
            { title: 'Array Fundamentals', youtube: 'Abdul Bari', udemy: 'Andrei Neagoie' },
            { title: 'Linear Search', youtube: 'CS Dojo', udemy: 'Colt Steele' },
            { title: 'Binary Search', youtube: 'mycodeschool', udemy: 'Stephen Grider' }
          ],
          assignments: ['Search Implementation', 'Array Manipulator', 'Performance Analyzer']
        },
        {
          week: 2,
          title: 'Sorting Algorithms',
          topics: [
            { title: 'Bubble Sort', youtube: 'GeeksforGeeks', udemy: 'Zero to Mastery' },
            { title: 'Quick Sort', youtube: 'Abdul Bari', udemy: 'Coding Interview University' },
            { title: 'Merge Sort', youtube: 'Back to Back SWE', udemy: 'AlgoExpert' }
          ],
          assignments: ['Sort Visualizer', 'Algorithm Comparison', 'Custom Sort Implementation']
        }
      ],
      outcomes: [
        'Master common data structures',
        'Implement efficient algorithms',
        'Solve complex coding problems',
        'Ace technical interviews'
      ]
    },
    {
      id: 'mern-stack',
      slug: 'mern-stack',
      title: 'Full MERN Stack',
      description: 'Build modern web apps with MongoDB, Express, React & Node',
      longDescription: 'Become a full-stack developer by mastering the MERN stack. Build production-ready applications from scratch and deploy them to the cloud.',
      duration: '16 weeks',
      assignments: 60,
      difficulty: 'Advanced',
      price: {
        youtube: 'Free',
        udemy: '$97'
      },
      platforms: ['YouTube', 'Udemy'],
      topics: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Authentication'],
      gradient: 'from-pink-500 to-orange-600',
      curriculum: [
        {
          week: 1,
          title: 'Introduction to Programming',
          topics: [
            { title: 'Setting up VS Code', youtube: 'CodeWithHarry', udemy: 'Colt Steele' },
            { title: 'Your First Program', youtube: 'freeCodeCamp', udemy: 'Jonas Schmedtmann' },
            { title: 'Understanding Variables', youtube: 'Traversy Media', udemy: 'Maximilian Schwarzmüller' }
          ],
          assignments: ['Hello World Variations', 'Variable Calculator', 'Data Type Explorer']
        },
        {
          week: 2,
          title: 'Control Flow & Functions',
          topics: [
            { title: 'If-Else Statements', youtube: 'The Net Ninja', udemy: 'Angela Yu' },
            { title: 'Loops and Iteration', youtube: 'Dev Ed', udemy: 'Brad Traversy' },
            { title: 'Functions Basics', youtube: 'Academind', udemy: 'Andrew Mead' }
          ],
          assignments: ['Grade Calculator', 'Pattern Printer', 'Function Library']
        },
        {
          week: 3,
          title: 'Arrays and Objects',
          topics: [
            { title: 'Arrays Basics', youtube: 'freeCodeCamp', udemy: 'Colt Steele' },
            { title: 'Object Structures', youtube: 'Traversy Media', udemy: 'Brad Traversy' },
            { title: 'Array Methods', youtube: 'Web Dev Simplified', udemy: 'Maximilian Schwarzmüller' }
          ],
          assignments: ['Student Data Array', 'Shopping Cart Object', 'Array Transformer']
        },
        {
          week: 4,
          title: 'DOM Manipulation',
          topics: [
            { title: 'Intro to DOM', youtube: 'CodeWithHarry', udemy: 'Angela Yu' },
            { title: 'Selectors and Events', youtube: 'The Net Ninja', udemy: 'Jonas Schmedtmann' },
            { title: 'DOM Projects', youtube: 'Dev Ed', udemy: 'Colt Steele' }
          ],
          assignments: ['Counter App', 'Color Changer', 'Simple To-Do List']
        },
        {
          week: 5,
          title: 'Debugging & Clean Code',
          topics: [
            { title: 'Debugging Techniques', youtube: 'Fireship', udemy: 'Maximilian Schwarzmüller' },
            { title: 'Writing Clean Code', youtube: 'Web Dev Simplified', udemy: 'Brad Traversy' },
            { title: 'Code Reviews & Linting', youtube: 'The Net Ninja', udemy: 'Angela Yu' }
          ],
          assignments: ['Bug Hunt Challenge', 'Refactor Old Code', 'Lint & Review Project']
        }
      ],
      outcomes: [
        'Build full-stack web applications',
        'Design and implement REST APIs',
        'Create responsive React interfaces',
        'Deploy apps to production'
      ]
    }
  ];