import React from 'react';
import { GiPartyPopper,GiReceiveMoney,GiCampfire } from 'react-icons/gi';
import {SiAdguard} from 'react-icons/si';
  function Features() {
  return (
<div className="d-flex justify-content-center">
      <div className="card card1 shadow-lg" style={{ width: '70%' }}>
        <div className="card-body">
          <ul className='features'>
          <li className='d-inline text-end myicon'  data-aos="zoom-in" data-aos-duration="200">       <GiPartyPopper size={42}/><p>Parties</p>
 </li>
          <li className='d-inline text-center myicon' data-aos="zoom-in" data-aos-duration="300"><SiAdguard size={30} className='guard'/><p>Safety</p>
             </li>
          <li className='d-inline text-center myicon' data-aos="zoom-in" data-aos-duration="600"><GiReceiveMoney size={42}/><p>No cancellation fee</p> </li>
          <li className='d-inline  text-center myicon' data-aos="zoom-in" data-aos-duration="900"><GiCampfire size={42}/><p>Campfire</p> </li>        
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
