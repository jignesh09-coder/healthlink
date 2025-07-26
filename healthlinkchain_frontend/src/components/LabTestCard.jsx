import React from 'react';

function LabTestCard({ title, description, image, price, discount }) {
  return (
    <div className="bg-white text-black rounded-lg p-6 shadow-md flex flex-col items-center transition-transform duration-300 ease-in-out hover:bg-stone-200 hover:shadow-xl hover:scale-105">
      <img src={image} alt={title} className="rounded-3xl w-70 h-32 mb-4" />  {/* Increased image size */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>  {/* Reduced font size */}
      <p className="text-gray-500 text-sm mb-4">{description}</p>  {/* Reduced font size */}
      <div className="flex items-center text-sm"> {/* Reduced font size */}
        <span className="text-gray-500 font-bold">₹{price}</span>
        <span className="text-red-500 ml-2 line-through">₹{(price * 1.6).toFixed(2)}</span>
        <span className="text-green-500 ml-2">{discount}% OFF</span>
      </div>
    </div>
  );
}

export default LabTestCard;
