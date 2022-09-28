import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import UseStateFn from './pages/useState';
import UseEffectFn from './pages/useEffect';
import UseCallbackFn from './pages/useCallback';

function App() {
  return (
    // Rotas
    <Router>
      <Routes>
        <Route path="/" element={<UseStateFn />} />
        <Route path="/useEffect" element={<UseEffectFn />} />
        <Route path="/useCallback" element={<UseCallbackFn />} />
      </Routes>
    </Router>
  );
}

export default App;
