import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      {/* <div className='circle'>
        <img src='/images/concentric_circles.jpg' alt='' />
      </div> */}

      <div className='txtHeader'>
        <Link className='txtHeader' to='/'>
          Instaclone
        </Link>
      </div>

      <div className='camera'>
        <Link to='/form'>
          <img src='http://clipartmag.com/images/camera-logo-png-22.png' alt='' />
        </Link>
      </div>
    </div>
  );
}
