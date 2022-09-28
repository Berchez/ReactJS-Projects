import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const eventFn = () => {
  console.log('h1 clicado');
};

function UseEffectFn() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMount - executa uma vez
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);
  }, []);

  //com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>
        Contador: {counter} Contador2: {counter2}{' '}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
      <br></br>
      <button>
        <Link to="/useCallback">UseCallBack</Link>
      </button>
    </div>
  );
}

export default UseEffectFn;
