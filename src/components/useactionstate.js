//The useActionState hook doesn't exist as a built-in hook in React.
//useActionState that mimics the behavior of the built-in useState hook but with an additional action dispatcher. Here's how you can implement it:
// Inside the component, it uses the useActionState hook to manage the state of a boolean value 

import React, { useState } from 'react';

const useActionState = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleAction = (action) => {
    setState(action);
  };

  return [state, handleAction];
};

const UseActionStateComponent = () => {
  const [isActive, setIsActive] = useActionState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  );
};

export default UseActionStateComponent;
