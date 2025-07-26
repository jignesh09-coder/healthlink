// BookSlot.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from './records.json';
import Header from './Header';
import Footer from './Footer';
import img from '../images/labs.png';

const BookSlot = () => {
  const { labId, testId } = useParams();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);

  const lab = data.pathologyLabs.find(l => l.id === labId);
  const test = lab?.tests.find(t => t.id === testId);

  const handleConfirmBooking = () => {
    if (selectedSlot) {
      // Instead of alerting, navigate to the confirmation page
      navigate('/booking-confirmation');
    } else {
      alert("Please select a slot to book.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Book Slot for <span className="text-gray-800">{test?.name}</span>
          </h2>
          <div className="border-b pb-4 mb-6">
            <p className="text-lg"><strong>Lab:</strong> {lab?.name}</p>
            <p className="text-lg"><strong>Location:</strong> {lab?.location}</p>
            <div className="w-full h-48 mt-4 rounded-md flex items-center justify-center">
              <img src={img} alt="" className='w-[500px] h-[200px] rounded-xl' />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Available Slots</h3>
          <ul className="space-y-4">
            {lab?.slots.map(slot => (
              <li key={slot.id} className="bg-gray-50 rounded-lg p-4 border shadow-sm">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="slot"
                    value={slot.id}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    onChange={() => setSelectedSlot(slot)}
                  />
                  <span className="text-gray-700">
                    {new Date(slot.startTime).toLocaleString()} - {new Date(slot.endTime).toLocaleString()}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <button
            onClick={handleConfirmBooking}
            className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSlot;
