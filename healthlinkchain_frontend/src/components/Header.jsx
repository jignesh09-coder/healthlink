import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  function scrollLabTests() {
    window.scrollBy({
      top: 880,
      behavior: 'smooth',
    });
  }
  const navigate=useNavigate();
  const onlogin=()=>{
    navigate(`/${"login"}`);
  }

  function scrollBlogs() {
    window.scrollBy({
      top: 1570,
      behavior: 'smooth',
    });
  }
 
  const oneclickhome=()=>
  {
    const navi=useNavigate();
    return navi('/');
  }

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <button onClick={oneclickhome} className="text-2xl font-bold text-indigo-900">HealthLink</button>
        <div className="ml-4">
          <span className="text-gray-600 text-sm">Select Location</span>
          <select className="ml-2  border rounded p-1 text-sm">
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chhattisgarh</option>
          <option>Goa</option>
          <option>Gujarat</option>
          <option>Haryana</option>
          <option>Himachal Pradesh</option>
          <option>Jharkhand</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Madhya Pradesh</option>
          <option>Maharashtra</option>
          <option>Manipur</option>
          <option>Meghalaya</option>
          <option>Mizoram</option>
          <option>Nagaland</option>
          <option>Odisha</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>Sikkim</option>
          <option>Tamil Nadu</option>
          <option>Telangana</option>
          <option>Tripura</option>
          <option selected>Uttar Pradesh</option>
          <option>Uttarakhand</option>
          <option>West Bengal</option>

          </select>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Find Clinics Labs Near you"
          className="border rounded p-2 mr-4 text-sm"
        />
        {/* Buttons with onClick functions for scrolling */}
        <button
          className="bg-orange-400 text-white px-4 py-2 rounded text-sm"
          onClick={scrollLabTests}
        >
          Lab Tests
        </button>
        <button
          className="ml-4 text-sm text-gray-600"
          onClick={scrollBlogs}
        >
          Blogs
        </button>
        <button className="ml-4 text-sm text-gray-600" onClick={onlogin}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
