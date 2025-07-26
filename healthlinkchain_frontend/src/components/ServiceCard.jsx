import React from 'react';
import { useNavigate } from 'react-router-dom';

// A mapping from the dynamic `bgi` to the darker color classes
const colorMap = {
  yellow: 'bg-yellow-500 hover:bg-yellow-900',
  pink: 'bg-pink-500 hover:bg-pink-900',
  green: 'bg-green-500 hover:bg-green-900',
  indigo: 'bg-indigo-500 hover:bg-indigo-900',
};

function ServiceCard({ title, description, icon, color, bg, route ,book}) {
  const buttonBgColor = colorMap[bg] || 'bg-gray-700 hover:bg-gray-900';  // Fallback to gray if `bgi` is not in the map

const navigate= useNavigate();
const onBookNow=()=>{
  navigate(`/${route}`);
}

  return (
    <div className={`${color} p-6 rounded-lg`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <button 
        onClick={onBookNow} // Attach the click handler here
        className={`${buttonBgColor} text-white px-3 py-1.5 text-sm rounded-3xl mt-4 transition-colors`}>
        {icon} {book}
      </button>
    </div>
  );
}

export default ServiceCard;
