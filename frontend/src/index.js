
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
    <Route path='/user/:id' element={<Home/>} />
    </Routes>
    </Router>
  </React.StrictMode>
);


