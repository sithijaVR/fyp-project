import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css'

function Navigation() {
  return (
    <div className='tutorialNavigation'>
      <ul className='navigationContainer'>
        <li className="box-link"><Link to="/Sensors" style={{textDecoration:"none"}}>Sensors</Link></li>
        <li className="box-link"><Link to="/Actuators" style={{textDecoration:"none"}}>Actuators</Link></li>
        <li className="box-link"><Link to="/PLCProgramming" style={{textDecoration:"none"}}>PLC Programming</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;