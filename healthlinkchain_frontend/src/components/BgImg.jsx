import React from 'react';
import img from '../images/coverimg.jpg';
import img2 from '../images/meds.jpg';

function BgImg() {
  return (
    <div>
      <div
        className="min-h-[50px] bg-fixed bg-center bg-no-repeat bg-cover rounded-3xl"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-6xl font-bold text-indigo-1000 p-10">Healthcare Solutions</h1>
          <p className="text-3xl mt-4 text-black font-bold p-4">Your health is our top priority</p>
        </div>
      </div>

      <div className="h-[800px] hidden">
        This div is only here to enable scrolling (height = 800 pixels).
      </div>
    </div>
  );
}

export default BgImg;