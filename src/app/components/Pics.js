import React from 'react'
function Pics() {
  return (
<div className="row p-5">
    <h3 className='pb-4'>Photo Gallery of Shakthi Homestay</h3>
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img  data-aos="zoom-in" data-aos-duration="200"
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img  data-aos="zoom-in" data-aos-duration="400"
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img data-aos="zoom-in" data-aos-duration="600"
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img  data-aos="zoom-in" data-aos-duration="800"
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img  data-aos="zoom-in" data-aos-duration="1000"
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img  data-aos="zoom-in" data-aos-duration="1200"
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
  )
}

export default Pics
