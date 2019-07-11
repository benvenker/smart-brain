import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"><span role="img" description="alien"><img style={{ paddingTop: '5px' }} src={brain} alt='logo' /></span> </div>
      </Tilt>
    </div>
  )
}

export default Logo;