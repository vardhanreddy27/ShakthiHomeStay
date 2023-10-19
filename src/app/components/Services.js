import React from 'react'
import {IoMdBonfire} from 'react-icons/io';
import {BsPeopleFill,BsFillHouseHeartFill} from 'react-icons/bs';
import {MdLuggage,MdDining} from 'react-icons/md';
import {BiSolidParking} from 'react-icons/bi';
import {FaPeopleRoof} from 'react-icons/fa6';
import {GrUserPolice} from'react-icons/gr';
import Image from 'next/image';

function Services() {
  return (
    <div className='mt-5 text-center mb-5'>
      <h2 className='p-4'>Amenities at Shakthi Homestay</h2>
      <div className='container'>
    <div className='row p-2'>
    <div className='col-md-6 ps-5 pt-3 pe-5'><div className="image-rotate">
<Image  className='serviceimg' data-aos="fade-up-left" data-aos-duration="1500"
        src="/hall.jpg"
        alt="home stay"
        width={300}
        height={300}
        priority={true}
      /></div><div className="image-rotate1">
      <Image  className='serviceimg room' data-aos="fade-up-right" data-aos-duration="1500"
              src="/hometop.jpg"
              alt="home stay"
              width={300}
              height={300}
              priority={true}
            /></div>
            <Image  className='serviceimg bed' data-aos="fade-up" data-aos-duration="1500"
                    src="/room.jpg"
                    alt="home stay"
                    width={300}
                    height={300}
                    priority={true}
                  /></div>
    <div className='col-md-6 extramob'>
    <div className='row text-left mt-4 '><div className='col-6'>
<div className=' col-6 mb-3 d-inline'data-aos="fade-up" data-aos-duration="300"><IoMdBonfire className='rounded border p-1 'size={42}/> Bonfire</div></div>
<div className='col-6'>    <div className='mb-3' data-aos="fade-up" data-aos-duration="500"><BsPeopleFill className='rounded border p-1'size={42}/> Caretaker</div>
</div>
</div>
<div className='row text-left'><div className='col-6 '>
<div className='mb-3 'data-aos="fade-up" data-aos-duration="900"><BiSolidParking className='rounded border p-1'size={42}/> Parking</div></div>
<div className='col-6'>    <div className='mb-3'data-aos="fade-up" data-aos-duration="1200"><MdLuggage className='rounded border p-1'size={42}/> Luggage Storage</div>
</div>
</div>
<div className='row text-left'><div className='col-6'>
<div className='mb-3 'data-aos="fade-up" data-aos-duration="1400"><FaPeopleRoof className='rounded border p-1 'size={42}/> Multilingual Staff</div></div>
<div className='col-6'>    <div className='mb-3'data-aos="fade-up" data-aos-duration="1700"><MdDining className='rounded border p-1'size={42}/> Dining Area</div>
</div>
</div>
<div className='row text-left'><div className='col-6'>
<div className='mb-3 'data-aos="fade-up" data-aos-duration="1900"><BsFillHouseHeartFill className='rounded border p-1'size={42}/> Verandah</div></div>
<div className='col-6'data-aos="fade-up" data-aos-duration="2000">    <div className='mb-3'><GrUserPolice className='rounded border p-1'size={42}/> <p className='d-inline'>Security</p></div>
</div>
</div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Services
