import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link  to="/" className="text-white text-lg font-bold">Logo</Link>
        </div>
        <div className="hidden md:flex  md:flex-wrap">
          <Link to="/UseState" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseState</Link>
          <Link to="/UseEffect" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseEffect</Link>
          <Link to="/UseContext" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseContext</Link>
          <Link to="/UseActionState" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseActionState</Link>
          <Link to="/UseCallback" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseCallback</Link>
          <Link to="/UseDebugValue" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseDebugValue</Link>
          <Link to="/UseDeferredValue" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseDeferredValue</Link>
          <Link to="/UseId" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseId</Link>
          <Link to="/UseImperativeHandle" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseImperativeHandle</Link>
          <Link to="/UseInsertionEffect" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseInsertionEffect</Link>
          <Link to="/UseLayoutEffect" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseLayoutEffect</Link>
          <Link to="/UseMemo" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseMemo</Link>
          <Link to="/UseOptimistic" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseOptimistic</Link>
          <Link to="/UseReducer" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseReducer</Link>
          <Link to="/UseRef" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseRef</Link>
          <Link to="/UseSyncExternalStore" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseSyncExternalState</Link>
          <Link to="/UseTranslation" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">UseTranslation</Link>
   
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
