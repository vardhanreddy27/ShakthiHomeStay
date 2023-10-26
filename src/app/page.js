import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import Data from './components/Data.js';
import Scrolling from './components/Scrolling';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Faqs from './components/Faqs';
import Pics from './components/Pics';
import Contact from './components/Contact';
import List from './components/List';
function page() {
	   return (
    <>
 <Navbar />
<HeroBanner />
<Features />
<Data />
<Scrolling />
<Services /> 
<Testimonial /> 
 <Faqs />
 <Pics />  
<Contact />
</>
 )
  
}
export default page
