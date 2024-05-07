import React, { useState} from 'react';
//useState allows you to manage state within a functional component.

const  UseStateComponent = () => {
     const [count, setCount] = useState(0);
  return (
    <div className=' mt-10  text-green-500 bg-gray-500'>
        <p>Count: {count}</p>
         <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}

export default UseStateComponent;


