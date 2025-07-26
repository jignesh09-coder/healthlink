import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import docimg from '../images/docimg.png';
import { TbDropletPlus } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Hero() {
  const navigate = useNavigate(); // Correctly initialize useNavigate
  
  const onbooking = () => {
    navigate('book-consultation'); // Navigation path corrected
  };

  return (
    <div className="w-full bg-indigo-950 text-white pb-0 p-8 rounded-3xl flex items-center justify-between mt-4 relative">
      <div className="w-full">
        <div className="flex-col b-full">
          <div className="flex justify-center">
            <h2 className="text-7xl font-calleo max-w font-bold">HealthLink</h2>
          </div>
          <div className="flex flex-row max-w">
            <div className="flex flex-col mb-4">
              <div className="flex flex-row">
                <div className="rounded-full mr-2 bg-green-400 p-1">
                  <TbDropletPlus />
                </div>
                <span className="p-1 bg-green-400 text-4xl text-white rounded-full text-sm">
                  Seamless, secure healthcare access for all
                </span>
              </div>
              <p className="mb-4 pt-28 text-xs text-white w-[300px] font-bold">
                IF YOU'RE LOOKING FOR A CREATIVE AND EASY WAY TO CONNECT WITH TRUSTED DOCTORS, LABS, AND PATIENTS, HEALTHLINK IS THE PERFECT SOLUTION.
              </p>
            </div>
            <div className="px-8">
              <img src={docimg} alt="Healthcare professional" className="w-[470px]  h-full object-cover" />
            </div>
            <div className="flex justify-end w-full">
              <div className="flex flex-col items-end">
                <div className="px-3 font-bold py-1 rounded-full text-sm">
                  No more waiting for reports to be picked up. Access your medical results securely and confidentially from anywhere, ensuring a seamless and stress-free experience for both patients and healthcare professionals.
                </div>
                <div className="h-[60px]"></div>
                <div className="flex flex-row">
                  <button className="bg-pink-400 text-white px-3 mr-2 p-1 rounded-full text-sm" onClick={onbooking}>
                    Book Consultation
                  </button>
                  <button onClick={onbooking} className="rounded-full bg-pink-400 p-1">
                    <FaRegArrowAltCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
