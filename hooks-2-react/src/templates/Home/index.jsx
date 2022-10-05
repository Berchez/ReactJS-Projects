import { useEffect } from 'react';
import Button from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <Heading />

      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
      </div>
    </div>
  );
};
