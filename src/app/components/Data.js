'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

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
    <div className='row'>
<div className='col-md-6 mt-5 text-center'>
<Image className='split1 imgm' data-aos="fade-up" data-aos-duration="500"
        src="/split1.jpg"
        alt="home stay"
        width={90}
        height={300}
        priority={true}
      /><Image  className='split2 imgm' data-aos="fade-down" data-aos-duration="500"
      src="/split2.jpg"
      alt="home stay"
      width={90}
      height={300}
      priority={true}
    /><Image  className='split3 imgm' data-aos="fade-up" data-aos-duration="500"
    src="/split3.jpg"
    alt="home stay"
    width={90}
    height={300}
    priority={true}
  /><Image  className='split4 imgm' data-aos="fade-down" data-aos-duration="500"
  src="/split4.jpg"
  alt="home stay"
  width={90}
  height={300}
  priority={true}
/>
<Image  className='split5 imgm' data-aos="fade-up" data-aos-duration="500"
        src="/split5.jpg"
        alt="home stay"
        width={90}
        height={300}
        priority={true}
      />

</div>
<div className='col-md-6 mt'><h1 data-aos="fade-up"
     data-aos-duration="500">Your Perfect Getaway: <span className='shs'>Shakthi Homestay</span>- Your Home in Nature</h1>
<p data-aos="fade-up"
     data-aos-duration="500">Shakthi Homestay is located in the picturesque region of Chikmagalur, known for its breathtaking coffee plantations. These plantations, nestled within the Western Ghats, are characterized by lush greenery and rolling hills, creating a serene natural backdrop. The landscape is adorned with vast stretches of coffee estates, painting the scenery in vibrant shades of green. This unique setting offers guests a tranquil and immersive experience in the heart of nature.</p>
<button type="button" className="btn btn-outline-secondary mt-3  mybutton "data-aos="fade-up"
     data-aos-duration="500"data-aos-anchor-placement="top-bottom">Contacu Us</button>
</div>
    </div>
      <div className='row pt-5 mt-5 pe-5 ps-5 s-hide'>  
    <table>
  <tbody>
    <tr>
      <td><h4>Results speak louder than words</h4><p className='text-secondary'>Take a look at what we've already achieved</p></td>
      <td> <div className="card cardouter ">
  <div className="card-body large cardcolor p-3">
    <div className='col myflex'> <h2>Happy Customers</h2><h1 className='sizeof'>  <div ref={counterRef}>
  {inView && <CountUp end={99} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary">
    At our homestay, customer satisfaction is our top priority. We understand the importance of providing a comfortable, welcoming, and memorable experience for our guests    </p>
  </div>
</div></td>
      <td rowspan="2"> <div className="card cardouter  ">
  <div className="card-body card3 cardcolor p-3"> 
<div className='col'>
  </div>
    <div className='col myflex'><h2>Safety</h2> <h1 className='sizeof'>  <div ref={counterRef}>
  {inView && <CountUp end={100} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary">
    Ensuring the safety and well-being of our guests is our top priority. We have implemented several measures to create a secure environment during your stay at our homestay
    We have fire safety equipment installed, including fire extinguishers and smoke detectors, to mitigate any potential fire hazards. Regular maintenance and checks are conducted to ensure their functionality.Our staff is trained in emergency response procedures, including evacuation plans, first aid, and contacting relevant authorities if needed.</p>
  </div>
</div></td>
    </tr>
    <tr>
  
      <td> <div className="card cardouter ">
  <div className="card-body large cardcolor p-3">
  <div className='col myflex'><h2>Loyal Customers</h2> <h1 className='sizeof'>  <div ref={counterRef}>
  {inView && <CountUp end={86} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary">
    Trust and Familiarity: Returning guests are not just visitors; they're family. They trust our homestay for the comfort, security, and warm hospitality we offer.
         </p>
  </div>
</div></td>
      <td> <div className="card cardouter ">
  <div className="card-body large cardcolor p-3">
     <div className='col myflex'><h2>Hygiene</h2> <h1 className='sizeof'>  <div ref={counterRef}>
  {inView && <CountUp end={100} className='fs'/>}%
</div></h1></div>
    <p className="card-text textsecondary">
    We adhere to a rigorous cleaning schedule that covers all areas of our homestay. This includes bedrooms, bathrooms, common areas, and kitchen facilities.
    </p>
  </div>
</div></td>
    </tr>
  </tbody>
</table> </div> </div>
  )
}

export default Data