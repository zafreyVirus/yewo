import React from 'react';
import Link from 'next/link';

export default function Biography() {
  return (
    <div className="container mx-auto mt-20 px-20 py-10">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src="/assets/img/team/team-3.jpg" // Replace with your image URL or path
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

      <h1 className="text-3xl font-bold mb-4">Pachawo Bisani</h1>
      <h2 className="text-xl text-gray-600 mb-6">Data Manager</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
      He manages and analyses data for management decision making.
      He has extensive experience in Data magement and He has worked in 
      various industries in that capacity He possesses an Msc in Informatics
      </p>

      <button
        className="mb-4 text-blue-500 hover:text-blue-700"
      >
        <Link href="/team" className='text-decoration-none'>Go Back</Link>
        
      </button>
    </div>
  );
}
