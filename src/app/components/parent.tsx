'use client'
import React, { useState } from 'react';
import Child1 from './child1';
import Child2 from './child2';

const Parent: React.FC = () => {
  const [money, setMoney] = useState<number>(0);

  const incrementMoney = () => {
    setMoney(money + 1000);
  };

  const decrementMoney = () => {
    setMoney(money - 500);
  };

  return (
    <div>
      <h1>Money: {money}</h1>
      <Child1 incrementMoney={incrementMoney} />
      <Child2 decrementMoney={decrementMoney} />
    </div>
  );
};

export default Parent;
