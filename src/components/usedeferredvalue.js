// //particularly in situations where the state updates frequently 
// //but rendering it doesn't need to be immediate.
//  //One simple example where useDeferredValue might be useful is in a search bar component
//  // where you want to defer updating the search results until the user pauses typing. Here's a basic example:
//  import React, { useState, useEffect, useDeferredValue } from 'react';

// function UseDeferredValueComponent() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const deferredSearchTerm = useDeferredValue(searchTerm, { timeoutMs: 500 }); // Deferring searchTerm updates by 500 milliseconds

//   useEffect(() => {
//     // Simulating an API call to fetch search results
//     const fetchSearchResults = async () => {
//       // Perform search using deferredSearchTerm
//       console.log('Fetching results for:', deferredSearchTerm);
//       // Call your API here with deferredSearchTerm
//       // Example:
//       // const results = await fetch(`/api/search?query=${encodeURIComponent(deferredSearchTerm)}`);
//       // console.log(results);
//     };

//     const searchTimeout = setTimeout(() => {
//       fetchSearchResults();
//     }, 500); // Wait for 500ms after user stops typing

//     return () => clearTimeout(searchTimeout);
//   }, [deferredSearchTerm]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }

// export default UseDeferredValueComponent;




import React, { useState, useEffect, useDeferredValue } from 'react';

function UseDeferredValueComponent() {
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState('');
  
  // Using useDeferredValue to defer incoming messages updates
  const deferredIncomingMessage = useDeferredValue(incomingMessage, { timeoutMs: 1000 });

  useEffect(() => {
    // Simulating receiving new messages from a server
    const receiveMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Simulating a function to handle incoming messages
    const handleIncomingMessage = () => {
      if (deferredIncomingMessage) {
        receiveMessage(deferredIncomingMessage);
      }
    };

    // Debouncing message rendering
    const debounceTimeout = setTimeout(() => {
      handleIncomingMessage();
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [deferredIncomingMessage]);

  const handleInputChange = (e) => {
    setIncomingMessage(e.target.value);
    
  };

  const handleSendMessage = () => {
    if (incomingMessage.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
      setIncomingMessage('');
      
    }
  };
  console.log(handleSendMessage)

  return (
    <div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={incomingMessage}
        onChange={handleInputChange}
      />
      
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default UseDeferredValueComponent;

