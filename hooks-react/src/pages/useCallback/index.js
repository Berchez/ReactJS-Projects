import P from 'prop-types';
import './styles.css';
import React, { useState, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho Renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function UseCallbackFn() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizou');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default UseCallbackFn;
