import React, { useState, useCallback } from 'react';

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);

  // useCallback is used to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseCallbackComponent;
