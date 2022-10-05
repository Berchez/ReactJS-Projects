import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
};
