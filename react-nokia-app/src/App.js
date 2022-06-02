import React from 'react';
import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/tasks' component={Tasks} />
        </Routes>
      </Router>
    </>
  );
}

export default App;