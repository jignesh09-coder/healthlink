// Signup.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Signup() {
  const [role, setRole] = useState('user');
  const [formData, setFormData] = useState({
    pronoun: '',
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    contact: '',
    address: '',
    password: '',
    confirmPassword: '',
    occupation: '',
    otherOccupation: '',
    modeOfContact: '',
    workingHours: { start: '', end: '' },
    certifications: [],
    experience: '',
    speciality: '',
    testsAvailable: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({}); // Reset form data when role changes
  };

  const handleTestChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setFormData(prev => ({ ...prev, testsAvailable: selectedOptions }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, ...e.target.files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted form data:', formData);
  };

  return (
    <div>
      <Header />
      <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
        <h2 className="font-bold text-5xl mb-6">Sign Up</h2>
        <label className="font-semibold mb-2 text-xl">Register as:</label>
        <select onChange={handleRoleChange} value={role} className="mb-6 p-2 border">
          <option value="user">User</option>
          <option value="doctor">Doctor</option>
          <option value="pathology">Pathology Lab</option>
        </select>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md max-w-lg w-full space-y-6">
          {/* Common fields */}
          {role === 'user' && (
            <>
              <h3 className="font-bold text-2xl mb-2">Personal Information</h3>
              <div className="flex space-x-4">
                <div className="w-1/4">
                  <label className="font-semibold">Pronoun</label>
                  <select name="pronoun" onChange={handleChange} className="p-2 border w-full">
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                <div className="w-3/4">
                  <label className="font-semibold">Full Name</label>
                  <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="p-2 border w-full" />
                </div>
              </div>
              <div className=" flex">
              <label className="font-semibold mx-2  text-xl">Gender :</label>
              <div className="flex space-x-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
              
              </div>
                <div className='flex h-[40px]'>
                <label className="font-semibold text-base mt-2 w-[150px]">Date of Birth :</label>
                <input type="date" name="dob" onChange={handleChange} className="p-2 border w-full" />
              </div>
              <div className='flex'>
                <label className="ml-0 pl-0 font-semibold text-base mt-2 w-[150px]">Contact :</label>
                <input type="text" name="Contact" placeholder="Enter Mobile No" onChange={handleChange} className="p-2 border w-full" />
              </div>
              <div className='flex'>
                <label className="ml-0 pl-0 font-semibold text-base mt-2 w-[150px]">Address :</label>
                <input type="text" name="Address" placeholder="Enter Address" onChange={handleChange} className="p-2 border w-full" />
              </div>
              {/* Other fields in similar format */}
            </>
          )}

          {role === 'doctor' && (
            <>
              <h3 className="font-bold text-2xl mb-2">Doctor Details</h3>
              <div>
                <div className=''>
                  <label className="ml-0 pl-0 font-semibold text-base mt-2 w-[150px]">Full Name</label>
                  <input type="text" name="Address" placeholder="Enter Name" onChange={handleChange} className="p-2 border w-full" />
                </div>
                  <div className=" flex mt-3">
                    <label className="font-semibold mx-2 w-[80px]  text-xl">Gender :</label>
                    <div className="flex space-x-4 mx-2 mt-2">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Female
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Other
                      </label>
                  </div>
                </div>
              <div className='flex mx-2 mt-4'>
                  <label className=" font-semibold text-lg mt-2 w-[100px]">Contact :</label>
                  <input type="text" name="Contact" placeholder="Enter Mobile No" onChange={handleChange} className="p-2 border w-full" />
              </div>
              <div className='mt-5'>
                    <label className="font-semibold">Address</label>
                    <input type="text" name="Contact" placeholder="Enter Full Address" onChange={handleChange} className="p-2 border w-full" />
              </div>
              <div className='mt-5'>
                    <label className="font-semibold">Occupation</label>
                    <select name="occupation" onChange={(e) => {
                      handleChange(e);
                      if (e.target.value !== 'other') setFormData((prev) => ({ ...prev, otherOccupation: '' }));
                    }} className="p-2 border w-full">
                      <option value="">Select Occupation</option>
                      <option value="clinic">Clinic</option>
                      <option value="hospital">Hospital</option>
                      <option value="other">Other</option>
                    </select>
                    {formData.occupation === 'other' && (
                      <input
                        type="text"
                        name="otherOccupation"
                        placeholder="Specify Occupation"
                        onChange={handleChange}
                        className="p-2 border w-full mt-2"
                      />
                    )}
              </div>
              <div className='mt-5'>
              <label className="font-semibold">Speciality</label>
              <input type="text" name="Contact" placeholder="Enter Speciality" onChange={handleChange} className="p-2 border w-full" />
              </div>
              <div className='mt-5'>
                <label className="font-semibold">Mode of Contact</label>
                <select name="modeOfContact" onChange={handleChange} className="p-2 border w-full">
                  <option value="">Select</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Home">Can take sample from home</option>
              </select>
              </div>

              <div className='mt-5'>
                  <label className="font-semibold">Working Hours</label>
                  <div className="flex space-x-4">
                    <input
                      type="time"
                      name="workingHours.start"
                      onChange={(e) => setFormData((prev) => ({
                        ...prev,
                        workingHours: { ...prev.workingHours, start: e.target.value }
                      }))}
                      className="p-2 border w-1/2"
                    />
                    <div className='mt-2 text-sm'>to</div>
                    <input
                      type="time"
                      name="workingHours.end"
                      onChange={(e) => setFormData((prev) => ({
                        ...prev,
                        workingHours: { ...prev.workingHours, end: e.target.value }
                      }))}
                      className="p-2 border w-1/2"
                    />
                  </div>
              </div>

              <div className='mt-5'>
                    <label className="font-semibold">Certifications</label>
                    <input type="file" accept="application/pdf" multiple onChange={handleFileChange} className="p-2 border w-full" />
              </div>
              
            
              </div>
              </>
          )}

          {role === 'pathology' && (
            <>
              <h3 className="font-bold text-2xl mb-2">Pathology Lab Details</h3>
              <div>
                <div className=''>
                  <label className="ml-0 pl-0 font-semibold text-base mt-2 w-[150px]">Lab Name</label>
                  <input type="text" name="Address" placeholder="Enter Lab Name" onChange={handleChange} className="p-2 border w-full" />
                </div>
                  
              <div className=' mx-2 mt-4'>
                  <label className=" font-semibold mt-2 w-[100px]">Contact</label>
                  <input type="text" name="Contact" placeholder="Enter Mobile No" onChange={handleChange} className="p-2 border w-full" />
              </div>
              <div className='mt-5'>
                    <label className="font-semibold">Address</label>
                    <input type="text" name="Contact" placeholder="Enter Full Address" onChange={handleChange} className="p-2 border w-full" />
              </div>
              <div className='mt-5'>
                    <label className="font-semibold">Occupation</label>
                    <select name="occupation" onChange={(e) => {
                      handleChange(e);
                      if (e.target.value !== 'other') setFormData((prev) => ({ ...prev, otherOccupation: '' }));
                    }} className="p-2 border w-full">
                      <option value="">Select Occupation</option>
                      <option value="clinic">Clinic</option>
                      <option value="hospital">Hospital</option>
                      <option value="other">Other</option>
                    </select>
                    {formData.occupation === 'other' && (
                      <input
                        type="text"
                        name="otherOccupation"
                        placeholder="Specify Occupation"
                        onChange={handleChange}
                        className="p-2 border w-full mt-2"
                      />
                    )}
              </div>
              <div className='mt-4'>
              <label className="font-semibold">Tests Available</label>
              <select name="testsAvailable" multiple onChange={handleTestChange} className="p-2 border w-full">
                <option value="Blood Test">Blood Test</option>
                <option value="Urine Test">Urine Test</option>
                <option value="X-Ray">X-Ray</option>
                <option value="CT Scan">CT Scan</option>
                <option value="MRI">MRI</option>
                {/* Add more options as needed */}
              </select>
              </div>
              <div className='mt-5'>
                <label className="font-semibold">Mode of Contact</label>
                <select name="modeOfContact" onChange={handleChange} className="p-2 border w-full">
                  <option value="">Select</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Home">Can take sample from home</option>
              </select>
              </div>

              <div className='mt-5'>
                  <label className="font-semibold">Working Hours</label>
                  <div className="flex space-x-4">
                    <input
                      type="time"
                      name="workingHours.start"
                      onChange={(e) => setFormData((prev) => ({
                        ...prev,
                        workingHours: { ...prev.workingHours, start: e.target.value }
                      }))}
                      className="p-2 border w-1/2"
                    />
                    <div className='mt-2 text-sm'>to</div>
                    <input
                      type="time"
                      name="workingHours.end"
                      onChange={(e) => setFormData((prev) => ({
                        ...prev,
                        workingHours: { ...prev.workingHours, end: e.target.value }
                      }))}
                      className="p-2 border w-1/2"
                    />
                  </div>
              </div>

              <div className='mt-5'>
                    <label className="font-semibold">Certifications</label>
                    <input type="file" accept="application/pdf" multiple onChange={handleFileChange} className="p-2 border w-full" />
              </div>
              
            
              </div>
            </>
          )}

          {/* Common password fields */}
          <h3 className="font-bold text-2xl mb-2">Create Account</h3>
          <div>
          <label className="font-semibold mb-0">Password</label>
          <input type="password" name="password" placeholder="Create Password" onChange={handleChange} className=" mt-0 pt-0 mb-4 p-2 border w-full" />

          <label className="font-semibold">Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="p-2  border w-full" />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full font-semibold mt-4">Sign Up</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
