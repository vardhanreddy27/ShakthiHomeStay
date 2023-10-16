import React from 'react'
import {FiPhoneCall,FiMail} from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineMessage} from 'react-icons/ai';
function Contact() {
  return (
    <div className='fluid-container'>
      <div className='row'>
      <div className='col-6 rempad'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3881.986347043406!2d75.76256907508309!3d13.351124987000212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDIxJzA0LjEiTiA3NcKwNDUnNTQuNSJF!5e0!3m2!1sen!2sin!4v1697320137537!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='col-6 contact text-center'>
      <div className='row'>
       <a href="tel:8882192787" > <div className='col-6 colone'><FiPhoneCall className='tops' size={42}/><h5>Call us 9866531011</h5></div></a>
       <a href="https://api.whatsapp.com/send?phone=919866531011&text=Hii"> <div className='col-6 coltwo'><BsWhatsapp size={42} className='tops'/><h5>Whatsapp at 9866531011</h5></div></a> 
        </div>
        <div className='row'>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2527webmaster@gmail.com">
 <div className='col-6 colthree'><FiMail size={42} className='tops'/><h5>Email us 2527webmaster@gmail.com</h5></div></a>
        <div className='col-6 colfour'><AiOutlineMessage size={42} className='tops'/><h5>Message us</h5><h5> 9866531011</h5></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
