import React from 'react';

const specialties = [
  { name: 'Orthopedists', icon: '🦴' },
  { name: 'Obesity', icon: '🍔' },
  { name: 'Neck Pain', icon: '😣' },
  { name: 'Neurology', icon: '🧠' },
  { name: 'Headache', icon: '🤕' },
  { name: 'Shoulder', icon: '💪' },
  { name: 'Eye Care', icon: '👁️' },
];

function AppointmentBooking() {
  return (
    <div className="text-center p-6 ">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6 text-left w-[500px]">
        Book An Appointment For An In-Clinic Consultation
      </h1>
      <div className="flex flex-wrap gap-4">
        {specialties.map((specialty, index) => (
          <button
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg transition-colors ${
              index === 0
                ? 'bg-indigo-900 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
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