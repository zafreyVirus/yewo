'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

export default function Economic() {
  const router = useRouter(); // Initialize the router
  const stats = [
    {
      icon: "bi-people-fill",
      value: "1000 + Households",
      description: "Targeted in Our EPA ",
    },
    {
      icon: "bi-globe",
      value: "8 Focused",
      description: " United Nations SDG's",
    },
    {
      icon: "bi-exclamation-triangle-fill",
      value: "6 Focused",
      description: " AU Agenda 2063 Aspirations",
    },
    {
      icon: "bi-megaphone-fill",
      value: "5 Focused",
      description: " Malawi Vision 2063 Pillars",
    },
  ];

  return (
    <div className="container pt-0">
      <div className="row align-items-center">
      <section className="py-5 text-center">
      <div className="container">
      <p>
      Zanani Farms has made significant contributions across various areas of social development, including economic impact, women empowerment, 
      environmental sustainability, and youth empowerment. 
      These efforts collectively align with the key pillars of Malawi Vision 2063, the AU Agenda 2063, and multiple UN SDGs, showcasing a broad and enduring impact. 
     
      </p>
         <h2 className="mb-3 pt-4">Focused Areas</h2>
        <div className="row">
          {stats.map((stat, index) => (
            <div className="col-md-3" key={index}>
              <i
                className={`bi ${stat.icon} text-blue mb-3`}
                style={{ fontSize: "3rem",color: 'steelblue' }}
                
              ></i>
              <h3 className="fw-bold">{stat.value}</h3>
              <p className="text-muted">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* Left Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold">Economic Impact</h1>
              <div className="p-2">
              <p>
              Through job creation in rural communities, we have employed over 31 people of which  21 are women, representing 67% gender diversity. 
              By generating income through livestock and crop sales, we have boosted household income and contributed to Malawi&apos;s agricultural GDP and poverty reduction.Subsequently contributed to:
              </p>
              
              <h5   style={{ color: 'steelblue' }}>Malawi Vision 2063 Pillars</h5>
              <ul className="list-disc ml-8">
                <li>✔️ <strong>Pillar 1:</strong> Economic Transformation</li>
                <li>✔️ <strong>Pillar 2:</strong> Social Development</li>
              </ul>

              <h5 style={{ color: 'steelblue' }}>AU Agenda 2063 Aspirations</h5>
              <ul className="list-disc ml-8">
                <li>✔️ <strong>Aspiration 1:</strong> A Prosperous Africa</li>
              </ul>

              <h5 style={{ color: 'steelblue' }}>UN Sustainable Development Goals (SDGs)</h5>
              <ul className="list-disc ml-8">
                <li>✔️ <strong>SDG 1:</strong> No Poverty</li>
                <li>✔️ <strong>SDG 8:</strong> Decent Work and Economic Growth</li>
              </ul>
            </div>


        </div>

        {/* Right Section */}
        <div className="col-lg-6">
          <div className="position-relative" style={{ height: '450px' }}>
            <Image
              src="/assets/img/f.jpg"
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
  );
}
