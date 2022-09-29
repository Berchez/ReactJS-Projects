import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import UseStateFn from './pages/useState';
import UseEffectFn from './pages/useEffect';
import UseCallbackFn from './pages/useCallback';
import UseMemoFn from './pages/useMemo';

function App() {
  return (
    // Rotas
    <Router>
      <Routes>
        <Route path="/" element={<UseStateFn />} />
        <Route path="/useEffect" element={<UseEffectFn />} />
        <Route path="/useCallback" element={<UseCallbackFn />} />
        <Route path="/useMemo" element={<UseMemoFn />} />
      </Routes>
    </Router>
  );
}

export default App;
