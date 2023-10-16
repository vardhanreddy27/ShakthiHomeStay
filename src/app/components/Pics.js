import React from 'react';
import Image from 'next/image';

function Pics() {
  return (
<div className="row p-5">
    <h3 className='pb-4'>Photo Gallery of Shakthi Homestay</h3>
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <Image  data-aos="zoom-in" data-aos-duration="200" layout="responsive"
      src="/hometop.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      width={100}
      height={100}
    />

    <Image  data-aos="zoom-in" data-aos-duration="400" layout="responsive"
      src="/shakthihomestaybeds.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
      width={100}
      height={100}
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <Image data-aos="zoom-in" data-aos-duration="600" layout="responsive"
      src="/shakthihomestayhall.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
      width={100}
      height={100}
    />

    <Image  data-aos="zoom-in" data-aos-duration="800" layout="responsive"
      src="/shakthihomestayroom.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      width={100}
      height={100}
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <Image  data-aos="zoom-in" data-aos-duration="1000" layout="responsive"
      src="/shakthihomestayrooms.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
      width={100}
      height={100}
    />

    <Image  data-aos="zoom-in" data-aos-duration="1200" layout="responsive"
      src="/shakthihomestaybed.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
      width={100}
      height={100}
    />
  </div>
</div>
  )
}

export default Pics
