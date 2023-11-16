import React from 'react'
import Image from 'next/image';

function Hero() {
  return (
      <div className='row mobno pt-5'>
<div className='col-md-6 text-center'>

<Image  className='imgm rounded' data-aos="fade-up" data-aos-duration="500"
             src="/hometop.jpg"
        alt="shakthi homestay chikmagalur"
        width={500}
        height={400}
        priority={true}
      />

</div>
<div className='col-md-6 mt herotxt'><h1  data-aos="fade-up" data-aos-duration="500">Your Perfect Getaway: <span className='shs reveal-type'>Shakthi Homestay</span>- Your Home in Nature</h1>
<p  data-aos="fade-up" data-aos-duration="500" >Shakthi Homestay is located in the picturesque region of Chikmagalur, known for its breathtaking coffee plantations. These plantations, nestled within the Western Ghats, are characterized by lush greenery and rolling hills, creating a serene natural backdrop. The landscape is adorned with vast stretches of coffee estates, painting the scenery in vibrant shades of green. This unique setting offers guests a tranquil and immersive experience in the heart of nature.</p>
 <a href="tel:7483505691" ><button type="button" className="reveal-type btn btn-outline-secondary mt-3  mybutton "data-aos="fade-up"
     data-aos-duration="500"data-aos-anchor-placement="top-bottom">Book Now</button></a>
</div>
    </div>
  )
}

export default Hero
