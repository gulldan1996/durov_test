import React from 'react';
import './App.scss';
import { HashRouter as Router } from "react-router-dom";
import RouterNav from './pages/RouterNav';

const App = () => {
  return (
    <Router>
      <RouterNav />
    </Router>
  );
}

export default App;
