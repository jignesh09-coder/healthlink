import React, { useState } from 'react';

const specialties = [
  { name: 'Orthopedists', icon: '🦴' },
  { name: 'Obesity', icon: '🍔' },
  { name: 'Neck Pain', icon: '😣' },
  { name: 'Neurology', icon: '🧠' },
  { name: 'Headache', icon: '🤕' },
  { name: 'Shoulder', icon: '💪' },
  { name: 'Eye Care', icon: '👁️' },
  { name: 'Pediatrics', icon: '👶' },
];

function AppointmentBooking() {
  const [selectedIndex, setSelectedIndex] = useState(0); // State to store selected button index

  const handleClick = (index) => {
    setSelectedIndex(index); // Update the selected button index when clicked
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6 text-left w-[500px]">
        Book An Appointment For An In-Clinic Consultation
      </h1>
      <div className="flex flex-wrap gap-4">
        {specialties.map((specialty, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)} // Handle button click
            className={`flex flex-col items-center p-4 rounded-lg transition-colors ${
              selectedIndex === index
                ? 'bg-indigo-900 text-white' // Selected button style
                : 'bg-gray-100 hover:bg-gray-200' // Non-selected button style
            }`}
          >
            <span className="text-2xl mb-2">{specialty.icon}</span>
            <span className="text-sm">{specialty.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppointmentBooking;
