import React from 'react'

export default function EmailLocationSection() {
  return (
    <section id="contact" className="contact">
        <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
    <div className="col-lg-10">
      <div className="info-wrap">
        <div className="row">
          <div className="col-lg-4 info">
            <i className="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>
              Synergy Co-Works, Plot 526, Songwe Street, New Area 12,
              Lilongwe, Malawi.
            </p>
          </div>

          <div className="col-lg-4 info mt-4 mt-lg-0">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>
              lyndon@rayenlimited.com
              <br />
              jacque@rayenlimited.com
            </p>
          </div>

          <div className="col-lg-4 info mt-4 mt-lg-0">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>
              +265995076818
              <br />
              +265994407451
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    </section>
    
  )
}
