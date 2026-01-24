import React from 'react';
import Link from 'next/link';

export default function Biography() {
  return (
    <div className="container mx-auto mt-20 px-20 py-10">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src="/assets/img/team/team-4.jpg" // Replace with your image URL or path
          alt="Jacqueline Haynes"
          className="rounded-full w-60 h-60 object-cover mb-4"

        />
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-6">
                  <Link href="#" className="twitter">
            <i className="bx bxl-twitter text-3xl"></i>
          </Link>
          <Link href="#" className="instagram">
            <i className="bx bxl-instagram text-3xl"></i>
          </Link>
          <Link href="#" className="linkedin">
            <i className="bx bxl-linkedin text-3xl"></i>
          </Link>
      </div>

      {/* Biography Content */}

      <h1 className="text-3xl font-bold mb-4">Atusaghe Mushani</h1>
      <h2 className="text-xl text-gray-600 mb-6">Legal Manager</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
      She is responsible for compliance, risk management and offers company secreterial services. She has worked for private and public entities in South Africa and Malawi. She holds an LLB from the University of South Africa
      </p>

      <button
        className="mb-4 text-blue-500 hover:text-blue-700"
      >
        <Link href="/team" className='text-decoration-none'>Go Back</Link>
        
      </button>
    </div>
  );
}
