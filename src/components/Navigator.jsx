import React from 'react';

const Navigator = () => {
  return (
    <nav className="fixed top-4 right-4 bg-white shadow-lg rounded p-4">
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-600">Home</a></li>
        <li className="mb-2"><a href="#" className="text-blue-600">About</a></li>
        <li className="mb-2"><a href="#" className="text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigator;
