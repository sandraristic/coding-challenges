import React, { useState } from 'react';
import usePrevious from '../hooks/usePrevious';

const ChallengeTwo = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  const [text, setText] = useState("");

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <p>Challenge #2</p>

      <span>Count: {count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <div>Previous count: {previousCount}</div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
};

export default ChallengeTwo;
