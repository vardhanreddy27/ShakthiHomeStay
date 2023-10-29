'use client'
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import List from './List';


function Data() {
  const counterRef = useRef();

const [inView, setInView] = useState(false);
useEffect(() => {
  const options = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(([entry]) => {
    setInView(entry.isIntersecting);
  }, options);
  observer.observe(counterRef.current);
  // Clean up observer on component unmount
  return () => {
    observer.disconnect();
  };
}, []);  
	  return (
		<div className='container mt-5'>
    
{/* <List /> */}

      <div className='row pt-5 mt-5 pe-5 ps-5 s-hide'>  
    <table>
  <tbody>
    <tr >
      <td><h4 data-aos="fade-up"  data-aos-duration="300">Results speak louder than words</h4><p className='text-secondary'h4 data-aos="fade-up"     data-aos-duration="300">Take a look at what we've already achieved</p></td>
      <td> <div className="card ch shadow-lg cardouter "data-aos="fade-up"     data-aos-duration="300">
  <div className="card-body large cardcolor p-3">
    <div className='col myflex'> <h2 data-aos="fade-up" data-aos-duration="500">Hygiene</h2><h1 className='sizeof'data-aos="fade-up"     data-aos-duration="500">  <div ref={counterRef}>
  {inView && <CountUp end={99} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary" data-aos="fade-up"     data-aos-duration="500">
    We adhere to a rigorous cleaning schedule that covers all areas of our homestay. This includes bedrooms, bathrooms, common areas, and kitchen facilities.
     </p>
  </div>
</div></td>
      <td rowspan="2"> <div className="card cardouter shadow-lg "data-aos="fade-up" data-aos-duration="600">
  <div className="card-body card3 cardcolor p-3"> 
<div className='col'>
  </div>
    <div className='col myflex'><h2 data-aos="fade-up" data-aos-duration="800">Safety</h2> <h1 data-aos="fade-up" data-aos-duration="800" className='sizeof'>  <div ref={counterRef}>
  {inView && <CountUp end={100} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary" data-aos="fade-up"     data-aos-duration="800">
    Ensuring the safety and well-being of our guests is our top priority. We have implemented several measures to create a secure environment during your stay at our homestay
    We have fire safety equipment installed, including fire extinguishers and smoke detectors, to mitigate any potential fire hazards. Regular maintenance and checks are conducted to ensure their functionality.Our staff is trained in emergency response procedures, including evacuation plans, first aid, and contacting relevant authorities if needed.</p>
  </div>
</div></td>
    </tr>
    <tr>
  
      <td> <div className="card shadow-lg cardouter "data-aos="fade-up"     data-aos-duration="800">
  <div className="card-body large cardcolor p-3">
  <div className='col myflex'><h2 data-aos="fade-up"     data-aos-duration="1000">Loyal Customers</h2> <h1 data-aos="fade-up"     data-aos-duration="1000" className='sizeof'>  <div ref={counterRef}>
  {inView && <CountUp end={86} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary" data-aos="fade-up"     data-aos-duration="1000">
    Trust and Familiarity: Returning guests are not just visitors; they're family. They trust our homestay for the comfort, security, and warm hospitality we offer.
         </p>
  </div>
</div></td>
      <td> <div className="card shadow-lg cardouter "data-aos="fade-up"     data-aos-duration="1000">
  <div className="card-body large cardcolor p-3">
     <div className='col myflex'><h2 data-aos="fade-up"     data-aos-duration="1300">Happy  Customers</h2> <h1 className='sizeof'data-aos="fade-up"     data-aos-duration="1300">  <div ref={counterRef}>
  {inView && <CountUp end={100} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary"data-aos="fade-up"     data-aos-duration="1300">
    At our homestay, customer satisfaction is our top priority. We understand the importance of providing a comfortable and memorable experience for our guests   
    </p>
  </div>
</div></td>
    </tr>
  </tbody>
</table> </div> </div>
  )
}

export default Data