import React from 'react';
import { GiPartyPopper,GiCampfire } from 'react-icons/gi';
import {SiAdguard} from 'react-icons/si';
import {BsPeopleFill} from 'react-icons/bs';
  function Features() {
  return (
<div className="d-flex justify-content-center">
      <div className="card card1 myr shadow-lg" >
        <div className="card-body">
          <ul className='features'>
          <li className='d-inline text-center myicon'  data-aos="zoom-in" data-aos-duration="200">       <GiPartyPopper size={42}/><p>Parties</p>
 </li>
          <li className='d-inline text-center myicon' data-aos="zoom-in" data-aos-duration="300"><SiAdguard size={30} className='guard'/><p>Safety</p>
             </li>
          <li className='d-inline text-center myicon' data-aos="zoom-in" data-aos-duration="600"><BsPeopleFill size={42}/><p>Caretaker</p> </li>
          <li className='d-inline  text-center myicon' data-aos="zoom-in" data-aos-duration="900"><GiCampfire size={42}/><p>Campfire</p> </li>        
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
