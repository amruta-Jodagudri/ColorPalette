import React from 'react';

interface Child2Props {
  decrementMoney: () => void;
}

const Child2: React.FC<Child2Props> = ({ decrementMoney }) => {
  return (
    <div>
      <button onClick={decrementMoney}>Decrement by 500</button>
    </div>
  );
};

export default Child2;
