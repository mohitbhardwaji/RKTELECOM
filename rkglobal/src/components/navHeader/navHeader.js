import React from 'react';
import './NavHeader.css';

export const NavHeader = () => {
  return (
    <>
      <div className='nav-header'>
        <div className='part1'>
          {/* <image/> */}
          <p>R K GLobal</p>
        </div>
        <div className='part2'>
            <p className='part23'>Clients</p>
            <p className='part23'>Division</p>
            <p className='part23'>About</p>
            <p className='part23'>Contact</p>
        </div>
      </div>
    </>
  );
}

