import React from 'react'

function Faqs() {
  return (
    <div className='p-5'>
      <h3  className='text-center'>Frequently Asked Questions</h3>
      <div  className="accordion mt-4" id="accordionExample">
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingOne">
      <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is the Check In and Check Out time of Sakthi Homestay, Rooms & Caretaker Chikmagalur?      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
      The Check In time of Sakthi Homestay, Rooms & Caretaker Chikmagalur is 12 PM. The early Check In is subject to availability, you can connect directly with the hotel for it. Standard Check Out of Sakthi Homestay, Rooms & Caretaker Chikmagalur is 11 AM.      </div>
    </div>
  </div>
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingTwo">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Where is Sakthi Homestay, Rooms & Caretaker located? How far Sakthi Homestay, Rooms & Caretaker is from the city centre or popular landmarks?      </button>
    </h2>
    <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
      Sakthi Homestay, Rooms & Caretaker is located in Chikmagalur. Travelling from Sakthi Homestay, Rooms & Caretaker is hassle-free since the property is well-connected to popular commercial and business areas of the city. The bustling city centre lies at a suitable distance from the Sakthi Homestay, Rooms & Caretaker. The city’s popular landmarks and most sought-after spots like Mullayanagiri      </div>
    </div>
  </div>
  <div  className="accordion-item">
    <h2  className="accordion-header" id="headingThree">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What is the nearby landmark for Sakthi Homestay, Rooms & Caretaker Chikmagalur?      </button>
    </h2>
    <div id="collapseThree"  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
       Sakthi Homestay, Rooms & Caretaker Chikmagalur is at the prime location of Chikmagalur. Sakthi Homestay, Rooms & Caretaker Chikmagalur is 23.3 km from city centre.
      </div>
    </div>
  </div> <div  className="accordion-item">
    <h2  className="accordion-header" id="headingFour">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What are the rooms types available at Sakthi Homestay, Rooms & Caretaker Chikmagalur?     </button>
    </h2>
    <div id="collapseFour"  className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
      Room types available at Sakthi Homestay, Rooms & Caretaker Chikmagalur are Double room      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Faqs