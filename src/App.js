
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import MemberDashboard from './pages/Member/MemberDashboard';
import ClergyDashboard from './pages/Clergy/ClergyDashboard';
import About from './components/About';
import MainLogin from './pages/LoginRegister/MainLogin';

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));   

  // Fetch the userRole from local storage whenever it changes
  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    setUserRole(storedUserRole);
  }, []);

  return (
    <Router>
      {userRole === null ? (
        <MainLogin/>    
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
                <Route path="/" element={<AdminDashboard />} />
              )}
              <Route path="/about" element={<About />} />
            </Routes>
          </DefaultLayout>
        </div>
      )}
    </Router>
  );
}

export default App;
