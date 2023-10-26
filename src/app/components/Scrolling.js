import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

function Scrolling() {
  return (
    <div className='container mt-5 back'>
      <div className='row text-center onlymob'><h3>We are also Available In </h3></div>
<div className='row mt-3 onlyinmob'>
<Marquee autoFill="true">
<div className='col iconscroll'>  <Image 
        src="/my.png"
        alt="make my trip"
        width={200}
        height={100}
        priority={true}
      /></div>
<div className='col iconscroll'><Image 
        src="/trip.png"
        alt="make my trip"
        width={200}
        height={100}
        priority={true}
      /></div>
<div className='col iconscroll'><Image 
        src="/jd.png"
        alt="make my trip"
        width={200}
        height={100}
        priority={true}
      /></div>
<div className='col iconscroll'><Image 
        src="/book.png"
        alt="make my trip"
        width={200}
        height={100}
        priority={true}
      /></div>
<div className='col iconscroll'><Image 
        src="/goibibo.png"
        alt="make my trip"
        width={200}
        height={100}
        priority={true}
      /></div>
 
    </Marquee>


  </div>    </div>
  )
}

export default Scrolling
