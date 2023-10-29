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
import AnimatedCursor from "react-animated-cursor"
import Hero from './components/Hero';
import List from './components/List';
import Modern from './components/Modern';

function page() {
	   return (
    <>
    <AnimatedCursor  innerSize={10}
      outerSize={50} outerAlpha={0.3}
      innerScale={0.7}
      color='3,74,74'
      outerScale={2} />
 <Navbar />
<HeroBanner />
<Features />
<Hero />
<Modern />
<List />

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
