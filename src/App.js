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
import Announcements from './pages/Clergy/Announcements';


function App() {
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || null); 

  useEffect(() => {
    localStorage.setItem('userRole', userRole);
  }, [userRole]);

  return (
    <Router>
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
                </>
              )}
              {userRole === '1' && (
                <>
                  <Route path="/dashboard" element={<ClergyDashboard />} />
                  <Route path="/Announcements" element={<Announcements />} />
                </>
              )}
              {userRole === '2' && (
                <>
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin-profile-management" element={<AdminProfileManagement />} /> 
                </>
              )}
              <Route path="/about" element={<About />} />
              <Route path="/events-calendar" element={<EventsCalendar />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DefaultLayout>
        </div>
      )}
    </Router>
  );
}

export default App;
