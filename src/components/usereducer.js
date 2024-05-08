// About.js
//useReducer is an alternative to useState 
//for managing more complex state logic.
// import React, { useReducer } from 'react';


// const initialState = {count:0};

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {count: state.count +1};
//             default:
//                 return state;
//     }
// }

// const UseReducerComponent = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className=' mt-10  text-green-500 bg-gray-500'>
//       <p>Count: {state.count}</p>
//        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
//     </div>
//   );
// }

// export default UseReducerComponent;




//We define an initial state object with a count property.
//We define a reducer function that takes state and an action, and returns a new state based on the action type.
//We use the useReducer hook to manage state and actions within our component.
//We dispatch actions to update the state based on user interactions with buttons.

import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  count: 0
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

// Define your component
const UseReducerComponent = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      {/* Dispatch actions */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default UseReducerComponent;

