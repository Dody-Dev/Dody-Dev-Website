import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PathsPage from './pages/PathsPage';
import PathDetailPage from './pages/PathDetailPage';
import AssignmentsPage from './pages/AssignmentsPage';
import CustomPlanPage from './pages/CustomPlanPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/paths" element={<PathsPage />} />
        <Route path="/paths/:pathId" element={<PathDetailPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/custom-plan" element={<CustomPlanPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;