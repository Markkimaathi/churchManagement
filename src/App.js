import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import AdminDashboard from './pages/clergy/AdminDashboard';
import About from './components/About';
import MainLogin from './pages/LoginRegister/MainLogin';

function App() {
  return (

    
    <Router>
      <div className="App">
        <DefaultLayout> 
          <Routes>
            <Route path="/" element={<AdminDashboard />} />  
            <Route path="/about" element={<About />} />  
          </Routes>
        </DefaultLayout>
      </div>
    </Router>
  );
}

export default App;