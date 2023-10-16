import React from 'react'
import Image from 'next/image';

function HeroBanner() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)' }}></div>
      <Image layout="responsive"
        src="/homestay.JPG"
        alt="home stay"
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
        <h1 style={{ color: 'white', fontWeight: 'lighter', marginLeft: '1rem',marginTop: '11rem' }}>
          WELCOMING GUESTS TO THE
        </h1>
        <h1 style={{ color: 'white', fontWeight: 'bold', marginLeft: '1rem' }}>
          SHAKTHI HOME STAY
        </h1>
        <p style={{ color: 'white', fontWeight: 'lighter', marginLeft: '1rem' }}>
          our homestay offers an idyllic escape into beauty of nature </p>
        <p style={{ color: 'white', fontWeight: 'lighter', marginLeft: '1rem'}}>
          Surrounded by lush greenery and symphony of chirping birds, With 
        </p>
        <p style={{ color: 'white', fontWeight: 'lighter', marginLeft: '1rem'}}>
          comfortable accommodations that seamlessly blend with the environment
        </p>
      </div>
    </div>
  )
}

export default HeroBanner
