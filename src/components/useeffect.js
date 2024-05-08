// // About.js
// import React, { useEffect, useState } from 'react';
// //useEffect is used for handling side effects 
// //(e.g., data fetching, subscriptions, DOM manipulation) in functional components.
// function UseEffectComponent()  {
//        const [seconds, setSeconds] = useState(0);

//        useEffect(() => {
//         const intervalId = setInterval(() => {
//           setSeconds((prevSeconds) => prevSeconds + 1);
//         }, 1000);

//         return () => {
//           clearInterval(intervalId);
//         };
//        }, []);
//   return (
//     <div className=' mt-10  text-green-500 bg-gray-500'>
//        <p> Seconds elapsed: {seconds}</p>;
//     </div>
//   );
// }

// export default UseEffectComponent;




// import React, { useState, useEffect } from 'react';

// function UseEffectComponent() {
//   const [count, setCount] = useState(0);

//   // useEffect hook to subscribe to an  click event when component mounts

//   useEffect(() => {
//     // Function to handle the event subscription
//     const handleEvent = () => {
//       // Update count when the event occurs
//       setCount(prevCount => prevCount + 1);
//     };

//     // Subscribe to the event
//     window.addEventListener('click', handleEvent);

//     // Cleanup function to unsubscribe when component unmounts
//     return () => {
//       window.removeEventListener('click', handleEvent);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div>
//       <p>Click count: {count}</p>
//     </div>
//   );
// }

// export default UseEffectComponent;




// //using the useEffect hook in React to perform DOM manipulation in a functional component
// import React, { useState, useEffect } from 'react';

// function UseEffectComponent() {
//   const [color, setColor] = useState('red');

//   // useEffect hook for DOM manipulation
//   useEffect(() => {
//     // Update the background color of the body element
//     document.body.style.backgroundColor = color;

//     // Cleanup function to revert changes when component unmounts
//     return () => {

//     };
//   }, [color]); // Dependency array ensures effect runs when color changes

//   return (
//     <div>
//       <p>Change background color:</p>
//       <button onClick={() => setColor('red')}>Red</button>
//       <button onClick={() => setColor('green')}>Green</button>
//       <button onClick={() => setColor('blue')}>Blue</button>
//     </div>
//   );
// }
// export default UseEffectComponent;




// // using the useEffect hook in React 
// // to fetch data from an API (get data) in a functional component:(using async await in function)
// import React, { useState, useEffect } from 'react';

// function UseEffectComponent() {
//   const [data, setData] = useState(null);

//   useEffect(()=> {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/users/');
//         if(!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//         console.log(jsonData)
//       }    catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//      fetchData();
//   }, []); // empty array means this effect will only run once, similar to componentDidMount in class components


//   return (
//     <div>
//       {data ? (
//         <div>
//             {/* Render your data here */}
//             <pre>{JSON.stringify(data, null,2)}</pre>
//         </div>    
//       ) : (
//         <p>Loading....</p>
//       )}
//     </div>
//   )
// }
// export default UseEffectComponent;





// // using the fetch API  (to get json data) within the useEffect hook.
// import React, { useState, useEffect } from 'react';
// function UseEffectComponent() {
//   const [data, setData] = useState(null);
//   //restapiwithnodeandexpressapilink
//   const apiUrl = 'http://localhost:5000/users/';

//   useEffect(() => {
//     const fetchData = () => {
//       fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(jsonData => {
//         setData(jsonData);
//       })
//       .catch(error => {
//          console.error('Error fetching data:', error);
//       });
//     }
//     fetchData()

//     return () => {

//     }
//   }, []) // empty dependency array means this effect will only run once after initial render

//   return (
//     <div>
//       {data ? (
//         <div>
//            {/* Render your data here */}
//            <pre>{JSON.stringify(data, null, 2)}</pre>
//          </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   )
// }

// export default UseEffectComponent;



// //using axios to fetch data with useEffect  (get data)
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function UseEffectComponent() {
//   const [data, setData] = useState(null);
//   const apiUrl = 'http://localhost:5000/users';

//   useEffect(() => {
//     const fetchData = () => {
//       axios.get(apiUrl)
//         .then(response => {
//           setData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     };
//     console.log(data);

//     fetchData();

//     // Cleanup function if needed
//     return () => {
//       // Any cleanup code here if needed
//     };
//   }); // empty dependency array means this effect will only run once after initial render

//   return (
//     <div>
//       {data ? (
//         <div>
//           {/* Render your data here */}
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }
// export default UseEffectComponent;


// //fetching api data using axios without useEffect
// import React, { useState } from 'react';
// import axios from 'axios';

// function UseEffectComponent() {
//   const [data, setData] = useState(null);
//   const apiUrl = 'http://localhost:5000/users/';

//   const fetchData = () => {
//     axios.get(apiUrl)
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>
//       {data ? (
//         <div>
//           {/* Render your data here */}
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       ) : (
//         <div>No data fetched yet</div>
//       )}
//     </div>
//   );
// }

// export default UseEffectComponent;



//fetching api data using axios with async await in useEffect
import React, { useEffect } from 'react';
import axios from 'axios';

function UseEffectComponent() {
  const [data, setData] = React.useState(null);
  const apiUrl = 'http://localhost:5000/users/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Any cleanup code here if needed
    };
  }, []); // empty dependency array means this effect will only run once after initial render

  return (
    <div>
      {data ? (
        <div>
          {/* Render your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UseEffectComponent;


