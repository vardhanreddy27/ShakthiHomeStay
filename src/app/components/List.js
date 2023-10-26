
'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
function List() {
    useEffect(() => {
        const zoom = document.querySelector('.zoom');
        const minZoom = 0;
        const maxZoom = 2;
    
        const handleScroll = () => {
          const vh = window.innerHeight / 100;
          const scrollTop = document.documentElement.scrollTop;
          const start = 100 * vh;
          const stop = 300 * vh;
    
          if (scrollTop > start && scrollTop < stop) {
            const scale = Math.max(2.2 + (scrollTop - stop) / 500, 1);
            zoom.style.transform = `scale(${scale})`;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array ensures this effect runs only once on component mount
    
  return (
  <div>
    <div className='s-hide'>
      <section className="top textsecondary "></section>
<section className="wrap">
  <div className='zoom'>
<img src='/shakthiview.png' className='rounded shadow' alt="f" />
</div>

</section>
<section className="bottom"><div className='text-overlay'>
<div className="card">
  <div className="card-body">
    This is some text within a card body.
  </div>
</div>            </div></section>
    </div>
    <div className='d-md-none d-lg-none mt-5 text-center'>

    <Image className='rounded shadow' data-aos="fade-up" data-aos-duration="500"       src="/shakthiview.png"
        alt="home stay"
        width={360}
        height={400}
        priority={true}
      />
    </div>
    
    </div>
  )
}

export default List
