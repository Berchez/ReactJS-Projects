import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import UseStateFn from './pages/useState';
import UseEffectFn from './pages/useEffect';
import UseCallbackFn from './pages/useCallback';
import UseMemoFn from './pages/useMemo';
import UseRefFn from './pages/useRef';
import UseContextFn from './pages/useContext';
import UseReducerFn from './pages/useReducer';

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
        <Route path="/useReducer" element={<UseReducerFn />} />
      </Routes>
    </Router>
  );
}

export default App;
