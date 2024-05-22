import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import MemberDashboard from './pages/Member/MemberDashboard';
import ClergyDashboard from './pages/Clergy/ClergyDashboard';
import About from './components/About/About';
import MainLogin from './pages/LoginRegister/MainLogin';
import EventsCalendar from './components/EventsCalendar/EventsCalendar'; 
import NotFound from './components/NotFound/NotFound';
import ProfileManagement from './pages/Member/ProfileManagement';
import AdminProfileManagement from './pages/Admin/AdminProfileManagement';
import Announcements from './components/Announcements/Announcements';
import PrayerRequests from './components/PrayerRequests/PrayerRequests';
import ClergyProfileManagement from './pages/Clergy/ClergyProfileManagement';
import PrayerRequestForm from './pages/Member/PrayerRequestForm';
import Announce from './pages/Clergy/Announce';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Muitable from './components/MuiTable/MuiTable';


function App() {
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || null); 

  useEffect(() => {
    localStorage.setItem('userRole', userRole);
  }, [userRole]);

  return (
    <Router>
      <ToastContainer />
      {userRole === null ? (
        <MainLogin setUserRole={setUserRole} />
      ) : (
        <div className="App">
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              {userRole === '0' && (
                <>
                  <Route path="/dashboard" element={<MemberDashboard />} />
                  <Route path="/profile-management" element={<ProfileManagement />} />
                  <Route path="/Announcements" element={<Announcements/>} />
                  <Route path="/prayer-requests" element={<PrayerRequestForm />} />
                </>
              )}
              {userRole === '1' && (
                <>
                  <Route path="/dashboard" element={<ClergyDashboard />} />
                  <Route path="/announce" element={<Announce />} />
                  <Route path="/Prayer-Requests" element={<PrayerRequests/>} />
                  <Route path="/clergy-profile-management" element={<ClergyProfileManagement/>} />
                </>
              )}
              {userRole === '2' && (
                <>
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin-profile-management" element={<AdminProfileManagement />} /> 
                </>
              )}
              <Route path="/about" element={<About />} />
              <Route path="/events-calendar" element={<EventsCalendar />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/Announcements" element={<Announcements />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/MuiTable" element={<Muitable />} />
            </Routes>
          </DefaultLayout>
        </div>
      )}
    </Router>
  );
}

export default App;