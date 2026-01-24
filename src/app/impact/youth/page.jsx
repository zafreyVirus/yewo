'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Youth() {
  return (
    <div className="container pt-6">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-6">
          <div className="position-relative" style={{ height: "450px" }}>
            <Image
              src='/assets/img/d.jpg'
              alt="Champions"
              layout="fill"
              className="img-fluid rounded object-fit-cover"
            />
          </div>
        </div>
 {/* Right Section */}
        
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold">
          Youth Empowerment
          </h1>
          <div className="p-2">
  <p>
    We have created employment opportunities for young people.
    Through skills development, training, and mentorship programs, we support youth entrepreneurship by improving access to finance and markets.
  we foster digital inclusion by providing access to digital technologies and 
      partnering with another youth-led company to manage its online presence.
  </p>

  <h5 style={{ color: 'steelblue' }}>Malawi Vision 2063 Pillars</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>Pillar 1:</strong> Economic Transformation</li>
    <li>✔️ <strong>Pillar 5:</strong> Human Development</li>
  </ul>

  <h5 style={{ color: 'steelblue' }}>AU Agenda 2063 Aspirations</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>Aspiration 1:</strong> A Prosperous Africa</li>
    <li>✔️ <strong>Aspiration 3:</strong> Transformed Modernized Economy</li>
  </ul>

  <h5 style={{ color: 'steelblue' }}>UN Sustainable Development Goals (SDGs)</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>SDG 4:</strong> Quality Education</li>
    <li>✔️ <strong>SDG 8:</strong> Decent Work and Economic Growth</li>
  </ul>
</div>

        </div>

       
      </div>
      <div>
        

      </div>
    </div>
  )
}
