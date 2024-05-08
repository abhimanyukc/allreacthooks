// The useDebugValue hook in React is typically used for debugging purposes,
//  to display a label for custom hooks in React DevTools.


import React, { useState, useEffect, useDebugValue } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulating fetching data from an API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [url]);

  // Displaying loading state in React DevTools
  useDebugValue(isLoading ? 'Loading...' : 'Data loaded');
    console.log(data)
  return { data, isLoading };
};

const UseDebugValueComponent = () => {
  const { data, isLoading } = useFetchData('http://localhost:5000/users/');

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        {isLoading ? (
          <p className="text-xl font-bold">Loading...</p>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-4">Data Loaded:</h1>
            <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseDebugValueComponent;

