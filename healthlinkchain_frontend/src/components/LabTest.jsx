import React, { useState } from 'react';
import pro from '../images/proxy1.jpeg';
import ct from '../images/ctscan.jpg';
import ult from '../images/ultra.jpg';
import orth from '../images/ortho.jpg';
import bl from '../images/blood.jpg';
import dia from '../images/diabetes.jpg';
import cho from '../images/cholestrol.jpg';
import LabTestCard from './LabTestCard';

function LabTest() {
  const [showAllTests, setShowAllTests] = useState(false); // State to control visibility

  const testSections = [
    {
      title: 'Imaging Tests',
      description: 'Imaging tests, such as X-rays, CT scans, and MRIs',
      image: ct,
      price: 120,
      discount: 60,
    },
    {
      title: 'Blood Test',
      description: 'Comprehensive blood tests to assess your health',
      image: bl,
      price: 150,
      discount: 50,
    },
    {
      title: 'Ultrasound',
        description: 'Detects conditions of organs and tissues.',
        image: ult,
        price: 150,
        discount: 50,
      },
    {
      title: 'Orthopedists tests',
      description: 'Orthopedists can diagnose and treat various types of back and neck pain',
      image: orth,
      price: 120,
      discount: 60,
    },
    
    {
      title: 'Diabetes Test',
      description: 'Tests to monitor your blood sugar levels effectively',
      image: dia,
      price: 180,
      discount: 40,
    },
    {
      title: 'Cholesterol Test',
      description: 'Check your cholesterol levels to maintain heart health',
      image: cho,
      price: 200,
      discount: 30,
    },
  ];

  return (
    <div className="font-bold rounded-lg text-white bg-indigo-950 p-8 container"> 
      <div className='flex flex-row justify-between mb-4'>
        <div className='text-3xl'>Frequently Booked Lab Tests</div>
        <button 
          className='text-blue-300 hover:underline'
          onClick={() => setShowAllTests(!showAllTests)}
        >
          {showAllTests ? "Hide Tests" : "View All Tests"}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {testSections.slice(0, 3).map((section, index) => (
          <LabTestCard key={index} {...section} />
        ))}
      </div>
      <div className={`grid grid-cols-3 gap-6 transition-all duration-500 ${showAllTests ? 'block' : 'hidden'}`}>
        {testSections.slice(3).map((section, index) => (
          <div
            key={index + 3}
            className={`transform transition-transform duration-1000 ease-in-out delay-${index * 1000} ${showAllTests ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'} mt-5 mb-2`}
          >
            <LabTestCard {...section} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabTest;
