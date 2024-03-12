import React, { useState } from 'react';

import { CounterStyled } from './styled';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterStyled>
      <div className='counter-content'>
        <button className='counter-button' onClick={decrement}>-</button>
        <h2 className='counter-result'>Counter: {count}</h2>
        <button className='counter-button' onClick={increment}>+</button>
      </div>
    </CounterStyled>
  );
};

export default Counter;
