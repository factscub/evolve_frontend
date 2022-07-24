import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Workout from './Pages/Workout';
import Nutrition from './Pages/Nutrition';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='/:id/workout' element={<Workout />} />
      <Route path='/:id/nutrition' element={<Nutrition />} />
      <Route path='*' element={<p style={{ color: 'white' }}>404 page.</p>} />
    </Routes>
  </BrowserRouter>
);

