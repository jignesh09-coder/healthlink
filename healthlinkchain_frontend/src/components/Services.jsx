import React from 'react';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      <ServiceCard 
        title="Instant Video Consultation" 
        description="Connect within 60 secs" 
        icon="🎥" 
        color="bg-yellow-200"
        bg="yellow"
        route="video-consultation"  // Route for video consultation
        book="Chat now"
      />
      <ServiceCard 
        title="Find Doctors near you" 
        description="Confirmed appointments" 
        icon="👨‍⚕️" 
        color="bg-green-200"
        bg="green"
        route="doctor-search"  // Example route for doctor search
        book="Search now"
      />
      <ServiceCard 
        title="Health Blogs" 
        description="Go Write your own experience" 
        icon="💊" 
        color="bg-pink-200"
        bg="pink"
        route="health-blogs"  // Example route for medicines
        book="Write now"
      />
      <ServiceCard 
        title="Lab Tests" 
        description="Sample pickup at your home" 
        icon="🧪" 
        color="bg-indigo-200"
        bg="indigo"
        route="lab-tests"  // Example route for lab tests
        book="Book now"
      />
    </div>
  );
}

export default Services;
