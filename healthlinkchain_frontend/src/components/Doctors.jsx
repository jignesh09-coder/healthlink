import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './records.json'; // Ensure this path is correct
import Header from './Header';
import Footer from './Footer';

const Doctors = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Flatten the doctor data to include slot details
  const doctors = data.doctors.map(doctor => ({
    ...doctor,
    availableSlots: doctor.slots, // Ensure slot data exists
  }));

  // Use useEffect to update filtered doctors whenever searchTerm changes
  useEffect(() => {
    const results = doctors.filter(doctor =>
      (doctor.name && doctor.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
      (doctor.specialization && doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredDoctors(results);
  }, [searchTerm, doctors]);  // Only run when searchTerm or doctors change

  // Handle search term change
  const handleSearch = (event) => setSearchTerm(event.target.value);

  // Navigate to the booking page for the selected doctor
  const handleBookSlot = (doctorId) => {
    navigate(`/doctors/${doctorId}/book`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="container mx-auto p-6 flex-grow">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Doctors</h2>
          <input
            type="text"
            placeholder="Search for doctors..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ul className="space-y-6">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(doctor => (
                <li key={doctor.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.specialization}</p>
                      <p className="text-gray-700 mt-2">
                        Location: <span className="font-semibold">{doctor.location}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => handleBookSlot(doctor.id)}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      Book Appointment
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No doctors found for this search.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
