'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function Modern() {
  const [imageSrc, setImageSrc] = useState('/chikmagalur.jpg');
  const [activeButton, setActiveButton] = useState('/chikmagalur.jpg');
  const [cutoutText, setCutoutText] = useState('Embrace In Nature');

  const handleButtonClick = (newImageSrc) => {
    setImageSrc(newImageSrc);
    setActiveButton(newImageSrc);

    if (newImageSrc === '/rooms.jpg') {
      setCutoutText('Clean & Hygiene');
    } else if (newImageSrc === '/exterior.png') { // Add condition for Exterior button
      setCutoutText('Parking Space');
    } else {
      setCutoutText('Embrace In Nature');
    }
  }

  return (
    <div className='m-5 pt-5'>
      <h1 className='ps-2' data-aos="fade-up" data-aos-duration="500">Where Nature Meets Comfort: Discover the </h1>
      <h1 data-aos="fade-up" data-aos-duration="500" className='ps-2 mb-4'>Perfect Getaway in Our Shakthi Homestay</h1>
      <div className="custom-shape" data-aos="fade-up" data-aos-duration="500">
        <div className="cutout">
          <p data-aos="fade-up" data-aos-duration="500">{cutoutText}</p>
        </div>
        <Image
          layout="responsive"
          priority={true}
          src={imageSrc}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
          width={100}
          height={100}
        />
        <div className="buttons-container">
          <button 
            className={`btn ${activeButton === '/chikmagalur.jpg' ? 'btn-light' : 'btn-outline thisbtn'} ms-2 me-1 imgbtns`}
            onClick={() => handleButtonClick('/chikmagalur.jpg')}
          >
            Nature
          </button>
          <button
            className={`btn ${activeButton === '/rooms.jpg' ? 'btn-light' : 'btn-outline thisbtn'} imgbtns me-1`}
            onClick={() => handleButtonClick('/rooms.jpg')}
          >
            Rooms
          </button>
          <button
            className={`btn ${activeButton === '/exterior.png' ? 'btn-light' : 'btn-outline thisbtn'} imgbtns`}
            onClick={() => handleButtonClick('/exterior.png')}
          >
            Exterior
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modern;
