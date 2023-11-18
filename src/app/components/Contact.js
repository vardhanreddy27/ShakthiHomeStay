import React from 'react'
import {FiPhoneCall,FiMail} from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineMessage} from 'react-icons/ai';
function Contact() {
  return (
    <div className='fluid-container'>
      <div className='row'>
      <div className='col-md-6 rempad'>
      <iframe src="https://www.google.com/maps/d/embed?mid=1HMGODrD2qemw8DUHL0930LQ2suaGr4Y&ehbc=2E312F"style={{width:'100%', height:'100%'}}></iframe>
     </div>
      <div className='col-md-6 contact text-center'>
      <div className='row'>
       <a href="tel:7483505691" > <div className='col-6 colone'><FiPhoneCall className='tops' size={42}/><h5 className='p-3'>Call us 7483505691</h5></div></a>
       <a href="https://api.whatsapp.com/send?phone=918882192787&text=Hii"> <div className='col-6 coltwo'><BsWhatsapp size={42} className='tops'/><h5 className='p-3'>Whatsapp us 7483505691</h5></div></a> 
        </div>
        <div className='row'>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sundarii.bhumi@gmail.com">
 <div className='col-6 colthree'><FiMail size={42} className='tops'/><h5 className='pt-3'>Email us sundarii.bhumi</h5></div></a>
        <div className='col-6 colfour'><AiOutlineMessage size={42} className='tops'/><h5 className='p-3'>Message us 7483505691</h5></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
