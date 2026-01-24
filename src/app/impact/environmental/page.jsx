'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Environmental() {
  const router = useRouter();
  return (
    <div className="container pt-6">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold">
          Environmental Impact
          </h1>
          <div className="p-1">
  <p>
  We preserve natural habitats and ecosystems through sustainable farming practices, reducing soil erosion, promoting biodiversity, lowering greenhouse gas emissions,
   and enhancing water and waste management. 
  Our use of bio-gas energy highlights a commitment to eco-friendly innovations and effective environmental stewardship.
  </p>

  <h5 style={{ color: 'steelblue' }}>Malawi Vision 2063 Pillars</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>Pillar 3:</strong> Environmental Sustainability</li>
    <li>✔️ <strong>Pillar 4:</strong> Effective Governance</li>
  </ul>

  <h5 style={{ color: 'steelblue' }}>AU Agenda 2063 Aspirations</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>Aspiration 5:</strong> Africa with Modern Agriculture</li>
    <li>✔️ <strong>Aspiration 10:</strong> Africa with Environmentally Sustainable Climate-Resilient Economies</li>
  </ul>

  <h5 style={{ color: 'steelblue' }}>UN Sustainable Development Goals (SDGs)</h5>
  <ul className="list-disc ml-8">
    <li>✔️ <strong>SDG 6:</strong> Clean Water and Sanitation</li>
    <li>✔️ <strong>SDG 13:</strong> Climate Action</li>
    <li>✔️ <strong>SDG 15:</strong> Life on Land</li>
  </ul>
</div>

        </div>

        {/* Right Section */}
        <div className="col-lg-6">
          <div className="position-relative" style={{ height: "450px" }}>
            <Image
              src='/assets/img/4.jpg'
              alt="Champions"
              layout="fill"
              className="img-fluid rounded object-fit-cover"
            />
          </div>
        </div>
      </div>
      <div>
       

      </div>
    </div>
  )
}
