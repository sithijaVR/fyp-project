import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css'

function Navigation() {
  return (
    <nav className='tutorialNavigation'>
      <ul className='navigationContainer'>

        <li><Link to="/Sensors">Sensors</Link></li>
        <li><Link to="/Actuators">Actuators</Link></li>
        <li><Link to="/PLCProgramming">PLC Programming</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;