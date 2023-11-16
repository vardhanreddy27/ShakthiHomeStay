import React from 'react';
import Image from 'next/image';

function Pics() {
  return (
<div className="row notinmobile">
    <h3 className='pb-4 mst'>Photo Gallery of Shakthi Homestay</h3>
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <Image  data-aos="zoom-in" data-aos-duration="200" layout="responsive"
      src="/hometop.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="shakthi homestay chikmagalur"
      width={100}
      height={100}
    />

<Image  data-aos="zoom-in" data-aos-duration="400" layout="responsive"
      src="/shakthihomestaybeds.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="shakthi homestay chikmagalur"
      width={100}
      height={100}
    />  <Image  data-aos="zoom-in" data-aos-duration="400" layout="responsive"
    src="/road.JPG"
    className="w-100 shadow-1-strong rounded mb-4"
    alt="shakthi homestay chikmagalur"
    width={100}
    height={100}
  />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <Image data-aos="zoom-in" data-aos-duration="600" layout="responsive"
      src="/shakthihomestayhall.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="shakthi homestay chikmagalur"
      width={100}
      height={100}
    />

<Image  data-aos="zoom-in" data-aos-duration="800" layout="responsive"
      src="/shakthihomestayroom.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="shakthi homestay chikmagalur"
      width={100}
      height={100}
    />   <Image  data-aos="zoom-in" data-aos-duration="800" layout="responsive"
    src="/nature.JPG"
    className="w-100 shadow-1-strong rounded mb-4"
    alt="shakthi homestay chikmagalur"
    width={100}
    height={100}
  />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <Image  data-aos="zoom-in" data-aos-duration="1000" layout="responsive"
      src="/shakthihomestayrooms.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="shakthi homestay chikmagalur"
      width={100}
      height={100}
    />

<Image  data-aos="zoom-in" data-aos-duration="1200" layout="responsive"
      src="/shakthihomestaybed.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="shakthi homestay chikmagalur"
      width={100}
      height={100}
    /> <Image  data-aos="zoom-in" data-aos-duration="1200" 
    src="/outdoor.JPG"
    className="w-100 shadow-1-strong rounded mb-4"  layout="responsive"
    alt="shakthi homestay chikmagalur"
    width={300}
    height={300}
  /> 
  </div>  
</div>
  )
}

export default Pics
