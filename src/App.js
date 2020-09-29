import React from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
    </Router>
  );
}

export default App;
