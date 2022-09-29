import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import UseStateFn from './pages/useState';
import UseEffectFn from './pages/useEffect';
import UseCallbackFn from './pages/useCallback';
import UseMemoFn from './pages/useMemo';
import UseRefFn from './pages/useRef';
import UseContextFn from './pages/useContext';

function App() {
  return (
    // Rotas
    <Router>
      <Routes>
        <Route path="/" element={<UseStateFn />} />
        <Route path="/useEffect" element={<UseEffectFn />} />
        <Route path="/useCallback" element={<UseCallbackFn />} />
        <Route path="/useMemo" element={<UseMemoFn />} />
        <Route path="/useRef" element={<UseRefFn />} />
        <Route path="/useContext" element={<UseContextFn />} />
      </Routes>
    </Router>
  );
}

export default App;
