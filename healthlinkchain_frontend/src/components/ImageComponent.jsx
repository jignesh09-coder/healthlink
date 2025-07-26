import React from 'react';
import img from "../images/seminar2.png"

function ImageComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Blog Writing Column */}
      <div className="flex-1 bg-blue-100 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <button className="text-xs bg-gray-200 font-bold text-gray-700 px-3 py-1 strong rounded-md">✍️ Blog</button>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900">Write About Your Health Journey</h3>
        <p className="text-sm text-gray-700 mb-4">
          Share your personal experiences, health tips, and wellness journey. Inspire others to take control of their health!
        </p>
        
        {/* Text Area for Blog Input */}
        <textarea
          className="w-full h-32 p-3 rounded-md border border-gray-300 resize-none"
          placeholder="Start writing your story here... Share your thoughts, tips, or experiences that might help others on their health journey."
        />
        
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors">
            Post Blog
          </button>
        </div>
      </div>

      {/* Live Event Column */}
      <div className="flex-1">
        <div className="bg-purple-200 p-6 rounded-lg h-full flex flex-col justify-between">
          <div>
            <button className="text-xs bg-gray-200 font-bold text-gray-700 px-3 py-1 rounded-md mb-2">🔴 Live Event</button>
            <h3 className="text-xl font-bold text-purple-900 mb-1">Healthy Habits for a Happy Heart</h3>
            <p className="text-gray-700">Feb 28, 2023 | 08:00 PM</p>
          </div>
          <div>
            <img src={img} alt="" className='h-[150px] w-[300px] rounded-3xl p-4 pb-1' />
          </div>
          <p className="text-gray-600 mt-4">
            Learn heart-healthy habits that could make a significant difference. Join the live session and start making impactful lifestyle changes!
          </p>
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-green-300 p-6 rounded-lg h-[200px] justify-center flex flex-col items-center">
          <h2 className="text-6xl font-bold text-green-900">08</h2>
          <p className="text-gray-800 text-2xl">Years Experience</p>
        </div>
        <div className="bg-pink-200 p-6 rounded-lg h-[210px] flex justify-center flex-col items-center">
          <h2 className="text-6xl font-bold text-pink-900">120k</h2>
          <p className="text-gray-800 text-2xl">Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
