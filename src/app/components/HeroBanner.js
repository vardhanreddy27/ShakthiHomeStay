import React from 'react'
import Image from 'next/image';

function HeroBanner() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)' }}></div>
      <Image layout="responsive"
        src="/homestay.jpg"
        alt="shakthi homestay chikmagalur"
        className='homeimg'
        width={100}
        height={100}
        priority={true}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <h1 className='welcome'>
          WELCOMING GUESTS TO THE
        </h1>
        <h1 className='shakthi'>
          SHAKTHI HOME STAY
        </h1>
        <p className="s-hide"style={{ color: 'white', fontWeight: 'lighter', marginLeft: '1rem' }}>
          our homestay offers an idyllic escape into beauty of nature </p>
        <p className="s-hide"style={{ color: 'white', fontWeight: 'lighter', marginLeft: '1rem'}}>
          Surrounded by lush greenery and symphony of chirping birds, With 
        </p>
        <p className='s-hide' style={{ color: 'white', fontWeight: 'lighter', marginLeft: '1rem'}}>
          comfortable accommodations that seamlessly blend with the environment
        </p>
      </div>
    </div>
  )
}

export default HeroBanner
