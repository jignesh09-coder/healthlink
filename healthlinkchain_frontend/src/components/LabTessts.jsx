import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './records.json';
import Header from './Header';
import Footer from './Footer';

const LabTests = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTests, setFilteredTests] = useState([]);

  // Flatten the tests data to include lab details
  const tests = data.pathologyLabs.flatMap(lab =>
    lab.tests.map(test => ({
      ...test,
      labName: lab.name,
      labLocation: lab.location,
      labId: lab.id,
      availableSlots: lab.slots,
    }))
  );

  // Use useEffect to update filtered tests whenever searchTerm changes
  useEffect(() => {
    const results = tests.filter(test =>
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTests(results);
  }, [searchTerm, tests]);  // Only run when searchTerm or tests change

  // Handle search term change
  const handleSearch = (event) => setSearchTerm(event.target.value);

  // Navigate to the booking page for the selected test
  const handleBookSlot = (labId, testId) => {
    navigate(`/lab-tests/${labId}/book/${testId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="container mx-auto p-6 flex-grow">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Lab Tests</h2>
          <input
            type="text"
            placeholder="Search for tests..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ul className="space-y-6">
            {filteredTests.map(test => (
              <li key={test.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{test.name}</h3>
                    <p className="text-gray-600">{test.description}</p>
                    <p className="text-gray-700 mt-2">
                      Price: <span className="font-semibold">${test.price}</span>
                    </p>
                    <p className="text-gray-700">
                      Lab: <span className="font-semibold">{test.labName}</span> ({test.labLocation})
                    </p>
                  </div>
                  <button
                    onClick={() => handleBookSlot(test.labId, test.id)}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Book Slot
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LabTests;
