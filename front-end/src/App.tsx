import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateQuiz from './pages/CreateQuiz';
import EditQuiz from './pages/EditQuiz';
import NavMenu from './pages/NavMenu';

const App: React.FC = () => {
  return (
    <div>
     <Router>
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/edit-quiz/:id" element={<EditQuiz />} /> 
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;