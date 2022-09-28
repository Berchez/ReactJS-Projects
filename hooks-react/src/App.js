import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import UseStateFn from './pages/useState';
import UseEffectFn from './pages/useEffect';

function App() {
  return (
    // Rotas
    <Router>
      <Routes>
        <Route path="/" element={<UseStateFn />} />
        <Route path="/useEffect" element={<UseEffectFn />} />
      </Routes>
    </Router>
  );
}

export default App;
