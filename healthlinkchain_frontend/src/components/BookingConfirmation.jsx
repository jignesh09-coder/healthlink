// BookingConfirmation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Using an icon for the tick mark
import Header from './Header';
import Footer from './Footer';

const BookingConfirmation = () => {
  return (
    <div>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <FaCheckCircle className="text-green-600 text-6xl mb-4" />
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Thank You for Your Confirmation!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your slot has been successfully booked. We look forward to seeing you soon!
          </p>
          <Link
            to="/lab-tests"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Go Back to Lab Tests
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingConfirmation;
