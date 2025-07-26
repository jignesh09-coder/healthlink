
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AppointmentBooking from './components/BookAppointment'
import LabTest from './components/LabTest';
import ImageComponent from './components/ImageComponent';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import BgImg from './components/BgImg';
import Help from './components/Help';
import Login from './components/Login';
import VideoConsultation from './components/VideoConsultaion';
import Doctors from './components/Doctors';
import Signup from './components/Signup';
import LabTests from './components/LabTessts';
import BookSlot from './components/BookSlot';
import BookingConfirmation from './components/BookingConfirmation';
import DoctorBooking from './components/DoctorBooking';

function App() {
  return (

    <Router>
      <Header />
      <Routes>

        <Route path='/' element={
          <div className="container mx-auto p-0">
            
            <Hero />
            <Services />
            <AppointmentBooking/>
            <LabTest/>
            <br/>
            <BgImg/>
            <br/>
            <ImageComponent/>
            <ReviewSection/>
            <br/>
            
          </div>
        }/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/video-consultation' element={<VideoConsultation/>}/>
        <Route path='/doctor-search' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/lab-tests" element={<LabTests />} />
        <Route path="/lab-tests/:labId/book/:testId" element={<BookSlot />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/doctors/:doctorId/book" element={<DoctorBooking />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
