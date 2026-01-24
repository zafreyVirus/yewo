'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Women() {
  return (
    <div className="container pt-6">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-6">
          <div className="position-relative" style={{ height: "500px" }}>
            <Image
              src='/assets/img/c.jpg'
              alt="Champions"
              layout="fill"
              className="img-fluid rounded object-fit-cover"
            />
          </div>
        </div>

{/* Right Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold">
          Women Empowerment 
          </h1>
          <div className="">
  <p>
  Zanani Farms empowers women by increasing land ownership opportunities, promoting economic independence,
   and fostering leadership through training and skills development in partnership with Ladies in Tertiary Education (LAITE). 
   The initiative <strong>targets 100 women</strong> , aiming to boost their access to resources, opportunities,mutual aid, financial inclusion, 
    and strengthen social inclusion while reducing gender-based violence.</p>

  <h5 style={{ color: 'steelblue' }}>Malawi Vision 2063 Pillars</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>Pillar 2:</strong> Social Development</li>
    <li>✔️ <strong>Pillar 5:</strong> Human Development</li>
  </ul>

  <h5 style={{ color: 'steelblue' }}>AU Agenda 2063 Aspirations</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>Aspiration 6:</strong> Africa with Strong, Accountable, and Transparent Institutions</li>
    <li>✔️ <strong>Aspiration 7:</strong> Africa with an Enabling Environment</li>
  </ul>

  <h5 style={{ color: 'steelblue' }}>UN Sustainable Development Goals (SDGs)</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>SDG 5:</strong> Gender Equality</li>
    <li>✔️ <strong>SDG 10:</strong> Reduced Inequalities</li>
  </ul>

  <p>
    Notably, of the 31 employees at Zanani Farms, 21 are women, representing a gender ratio of 67%.
  </p>
</div>


        </div>

        
       
      </div>
      <div>
       
      </div>
    </div>
  )
}
