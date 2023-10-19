import React from 'react';
import {RiStarSFill,RiStarHalfSFill} from 'react-icons/ri';
function Testimonial() {

  return (
    <div id="myCarousel" className="carousel mb-4 slide" data-ride="carousel" data-interval="false">
      <div className="carousel-inner"><h3 className='text-center myh pt-5'>Customer Review</h3><p className='text-center myhh'>What our customers are saying....</p>
        <div className="carousel-item active">
          <div className="carousel-caption">
          <p className='vh s-hide'>It is an excellent budget property in chikmagalur coffee plantation. We were looking for a stay between the coffee plantation within a budget. It was just fitting our budget. The caretakers are staying inside the property so they are always available for any type of inconvenience. The food served was excellent particularly the pepper chicken in the dinner. Prashant the caretaker has a pleasant personality and he is there for you. Highly recommended particularly for the budget travellers.</p>
          <p className='vh d-md-none d-lg-none'>It is an excellent budget property in chikmagalur coffee plantation. We were looking for a stay between the coffee plantation within a budget. It was just fitting our budget. The caretakers are staying inside the property so they are always available for any type of inconvenience.</p>
          <h3 className='names'>Alok Singh</h3> <h5 className='name'><RiStarSFill className='star'/><RiStarSFill className='star'/><RiStarSFill className='star'/><RiStarSFill className='star'/><RiStarHalfSFill className="star"/></h5>
 </div>
        </div>

        <div className="carousel-item">
        <div className="carousel-caption">
        <p className='vh s-hide'>If you like to have a peaceful weekend. This is definitely the right place to go to! i loved everything about this place. The location, the ambience, the hospitality, the price, cleanliness. The hosts are very sweet and approachable. It is a couple friendly and family friendly environment. Best thing that i liked about this place is the host really respect guests privacy. They have separate bonfires for each group of guests. Additionally you will also love whole route to reach the place as it is a little remotely located. All in all a very good experience! will definitely visit again.</p>
        <p className='vh d-md-none d-lg-none'>If you like to have a peaceful weekend. This is definitely the right place to go to! i loved everything about this place. The location, the ambience, the hospitality, the price, cleanliness. The hosts are very sweet and approachable. It is a couple friendly and family friendly environment.</p>
          <h3 className='names'>vishwanath</h3> <h5 className='name'><RiStarSFill className='star'/><RiStarSFill className='star'/><RiStarSFill className='star'/><RiStarSFill className='star'/><RiStarSFill className='star'/></h5>
 </div>
        </div>

        <div className="carousel-item">
        <div className="carousel-caption">
          <p className='vh'>They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and i didn not wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there. Special thanks to prashant. This is the review only</p>
          <h3 className='names'>Rohit Mukane</h3> <h5 className='name'><RiStarSFill className='star'/><RiStarSFill className='star'/><RiStarSFill className='star'/></h5>
 </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  )
}

export default Testimonial
