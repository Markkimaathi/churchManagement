
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import MemberDashboard from './pages/Member/MemberDashboard';
import ClergyDashboard from './pages/Clergy/ClergyDashboard';
import About from './components/About';
import MainLogin from './pages/LoginRegister/MainLogin';
import EventsCalendar from './components/EventsCalendar'; 
import NotFound from './components/NotFound';

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole')); 

  return (
    <Router>
      {userRole === null ? (
        <MainLogin setUserRole={setUserRole} />
      ) : (
        <div className="App">
          <DefaultLayout>
            <Routes>
              {userRole === '0' && (
                <Route path="/" element={<MemberDashboard />} />
              )}
              {userRole === '1' && (
                <Route path="/" element={<ClergyDashboard />} />
              )}
              {userRole === '2' && (
                <Route path="/admin" element={<AdminDashboard />} />
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
