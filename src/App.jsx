import { useState } from 'react';
import people from './data/people.json'; // JSON import
import ProfileDetailsPage from './Pages/ProfileDetailsPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router> {/* Use Router instead of BrowserRouter */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ProfileDetailsPage' element={<ProfileDetailsPage people={people} />} />
      </Routes>
    </Router>
  );
}

export default App;