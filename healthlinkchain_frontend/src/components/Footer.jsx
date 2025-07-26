import React from 'react';
import apple from '../images/apple_fin.png';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" p-6 bg-indigo-950 rounded-lg">
      <div className="container mx-auto">
        <div className='bg-white'>
            <div className="border-b-0 pb-0 p-10 grid grid-cols-1 rounded-lg bg-white md:grid-cols-4 gap-8">
                <div className="col-span-1 p-5 px-10">
                    <h3 className="text-lg font-bold mb-4">Company</h3>
                    <ul>
                        <li><a href="#">What's New</a></li>
                        <li><a href="#">About</a></li>
                        < li><a href="#">Press</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Social Good</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-span-1 p-5">
                    <h3 className="text-lg font-bold mb-4">Community</h3>
                    <ul>
                        <li><a href="#">Medicare For Business</a></li>
                        <li><a href="#">2022 Creator Report</a></li>
                        <li><a href="#">Charities</a></li>
                        <li><a href="#">Creator Profile Directory</a></li>
                        <li><a href="#">Explore Templates</a></li>
                    </ul>
                </div>
                <div className="col-span-1 p-5">
                    <h3 className="text-lg font-bold mb-4">Support</h3>
                    <ul>
                        <li><a href="#">Help Topics</a></li>
                        <li><a href="#">Getting Started</a></li>
                        <li><a href="#">Link Tree Pro</a></li>
                        <li><a href="#">Features & How-Tops</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Report A Violation</a></li>
                    </ul>
                </div>
                <div className="col-span-1 p-5">
                    <h3 className="text-lg font-bold mb-4">Trust & Legal</h3>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Notice</a></li>
                        <li><a href="#">Cookie Notice</a></li>
                        <li><a href="#">Trust Centre</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                    </ul>
                </div>
            </div>

            <button className='bg-blue-900 mr-4 text-white px-4 h-10 rounded mt-3 border-b-7 border-0'>
                <div className='flex flex-row'>
                    <img src={apple} alt="App Store" className="ml-0 w-[45px] h-[43px] " />
                    <span className='p-2 pl-0 text-white text-xl'>App Store</span> 
                </div>
            </button>
            <button className='bg-blue-900 text-white px-4 h-10 rounded mt-4 border-b-7'>
                <div className='flex flex-row'>
                    <div className='py-3'><IoLogoGooglePlaystore /></div>
                    <span className='p-2 text-white text-xl'>Google Play</span> 
                </div>
            </button>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div>
            <a href="#" className="text-gray-500 mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 mr-4">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="text-white flex flex-row text-center mt-4">
          <p>&copy; 2024 Medicare</p>
          <p>Design & Developed by Tony Stark</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
