import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './ClergyDashboard.css';
import MetaData from '../../components/MetaData';

function ClergyDashboard() {

  return (
    <main className='main-container'>
      <MetaData title="Clergy Dashboard" />
      <div className='main-title'>
        <h3>CLERGY DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>MEMBERS</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>320</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CLERGY STAFF</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>15</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRAYER REQUESTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>22</h1>
        </div>
      </div>
    </main>
  );
}

export default ClergyDashboard;

