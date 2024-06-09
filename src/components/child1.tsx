import React from 'react';


interface Child1Props {
  incrementMoney: () => void;
}

const Child1: React.FC<Child1Props> = ({ incrementMoney }) => {
  return (
    <div>
      <button onClick={incrementMoney}>Increment by 1000</button>
    </div>
  );
};

export default Child1;
