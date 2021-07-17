import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PuclicRoutes from './routes/public/routes';
import './App.css';

const App = () => (
  <Router>
    <PuclicRoutes />
  </Router>
);
export default App;
