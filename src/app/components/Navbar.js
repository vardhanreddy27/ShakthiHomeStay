import React from 'react';
import {AiFillYoutube} from 'react-icons/ai';
import {BiLogoFacebookSquare} from 'react-icons/bi';
import {BsInstagram} from 'react-icons/bs';
import Image from 'next/image';
function Navbar() {
  return (
   <div className='fluid-container shadow sticky-top p-2'>
    <div className='row'>
    <div className='col-4 innav'>
    <div className="col-sm text-start  s-hide">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=2527webmaster@gmail.com">
 <p className='d-inline navfontsize navcolor ms-3'>2527webmaster@gmail.com </p></a>
    <p className='d-inline navfontsize'> | </p>
    <p className='d-inline navfontsize'> <a href='https://www.instagram.com/p/B2_rTG_h7SH/'><BsInstagram  className='me-2 insta'/></a><a href='https://www.facebook.com/LikhithAaradhya/'><BiLogoFacebookSquare size={18}  className='me-2 fb'/></a><a href=''><AiFillYoutube size={20} className='youtube'/></a></p>
    </div>
    </div>
    <div className='col-4 fw-bold text-center'>
    <Image  className=''
        src="/SHAKTHI.png"
        alt="home stay"
        width={90}
        height={34}
        priority={true}
      />    </div>
    <div className='col-4 innav'>    <div className="col-sm  s-hide text-end">
    <a href="tel:8882192787" > <p className='navfontsize me-1 ms-4 menuitems me-3 navcolor '> +91 888 219 2787</p> </a>   </div></div>
    </div>
   </div>
  )
}

export default Navbar
