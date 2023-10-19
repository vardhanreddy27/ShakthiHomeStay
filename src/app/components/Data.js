import React from 'react';
import Image from 'next/image';

function Data() {
	  return (
		<div className='container mt-5'>
    <div className='row'>
<div className='col-md-6 mt-5'>
<Image className='split1' data-aos="fade-up" data-aos-duration="500"
        src="/split1.jpg"
        alt="home stay"
        width={90}
        height={300}
        priority={true}
      /><Image  className='split2' data-aos="fade-down" data-aos-duration="500"
      src="/split2.jpg"
      alt="home stay"
      width={90}
      height={300}
      priority={true}
    /><Image  className='split3' data-aos="fade-up" data-aos-duration="500"
    src="/split3.jpg"
    alt="home stay"
    width={90}
    height={300}
    priority={true}
  /><Image  className='split4' data-aos="fade-down" data-aos-duration="500"
  src="/split4.jpg"
  alt="home stay"
  width={90}
  height={300}
  priority={true}
/>
<Image  className='split5' data-aos="fade-up" data-aos-duration="500"
        src="/split5.jpg"
        alt="home stay"
        width={90}
        height={300}
        priority={true}
      />

</div>
<div className='col-md-6'><h1 data-aos="fade-up"
     data-aos-duration="500">Your Perfect Getaway: <span className='shs'>Shakthi Homestay</span>- Your Home in Nature</h1>
<p data-aos="fade-up"
     data-aos-duration="500">Shakthi Homestay is located in the picturesque region of Chikmagalur, known for its breathtaking coffee plantations. These plantations, nestled within the Western Ghats, are characterized by lush greenery and rolling hills, creating a serene natural backdrop. The landscape is adorned with vast stretches of coffee estates, painting the scenery in vibrant shades of green. This unique setting offers guests a tranquil and immersive experience in the heart of nature.</p>
<button type="button" className="btn btn-outline-secondary mt-3  mybutton "data-aos="fade-up"
     data-aos-duration="500"data-aos-anchor-placement="top-bottom">Contacu Us</button>
</div>
    </div></div>
  )
}

export default Data
