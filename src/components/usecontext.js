  //using useContext hook to access the context value
import React, { createContext, useContext } from 'react';
//create a context
 const Context = createContext();
 // Define a component that provides the context
const ParentComponent = () => {
  //using useContext hook to access the context value
  const contextValue = useContext(Context);
  return (
    <Context.Provider value="Hello context">   
  return <p>{contextValue}</p>;
    </Context.Provider>
  )
};


// Usage
const UseContextComponent = () => {
  return (
    <div>
      <h1>Using useContext Hook</h1>
      <ParentComponent />
    </div>
  );
};

export default UseContextComponent;


