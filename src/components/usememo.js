// About.js
//. We’ll create a basic counter that increments by 1, and we’ll memoize the result to avoid unnecessary recalculations:
// import React, { useState, useMemo } from 'react';

// function UseMemoComponent() {
//   const [count, setCount] = useState(0);

//   // Memoize the doubledCount value
//   const doubledCount = useMemo(() => {
//     console.log('Calculating doubledCount...');
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Doubled Count: {doubledCount}</p>
//       <button onClick={() => setCount(count + 1)} className=' text-lg text-green-400'>Increment</button>
//     </div>
//   );
// }

// export default UseMemoComponent;






//useMemo hook in React to memoize the result of a basic computation:
import React, { useState, useMemo } from 'react';

const Square = ({ number }) => {
  const calculateSquare = (num) => {
    console.log("Calculating square...");
    return num * num;
  };

  const squaredNumber = useMemo(() => calculateSquare(number), [number]);

  return <p>The square of {number} is: {squaredNumber}</p>;
};

const UseMemoComponent = () => {
  const [input, setInput] = useState(0);

  return (
    <div>
      <h1>UseMemo Example</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <Square number={input} />
    </div>
  );
};

export default UseMemoComponent;





