"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5"; 

const HeaderSection = () => {
  const [showMenuList, setShowMenuList] = useState(false); // Toggle between header and menu list

  const handleNavbarClick = () => {
    setShowMenuList(true); // Show the menu list
  };

  const handleBackClick = () => {
    setShowMenuList(false); // Go back to the header
  };

  return (
    <div>
      {!showMenuList ? (
        // Header View
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <Link href="/">
                <Image className="logo-img" src="/assets/img/logo.png" alt="logo" width={100} height={60} />
              </Link>
            </h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
               
                  <Link  onClick={handleBackClick}  href="/" className="active text-decoration-none"
                       >
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    href="#"
                    
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    <span>About</span> <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/about" className="text-decoration-none">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleBackClick}  href="/team" className="text-decoration-none">
                        Team
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/impact" className="text-decoration-none">
                    Our impact
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-decoration-none">
                    Services
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    <span>Subsidiaries</span> <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/susidiaries/food" className="text-decoration-none">
                        Tara Foods Ltd
                      </Link>
                    </li>
                    <li>
                      <Link href="/susidiaries/dairy" className="text-decoration-none">
                        Rayen Dairy Ltd
                      </Link>
                    </li>
                    <li>
                      <Link href="/susidiaries/poultry" className="text-decoration-none">
                        Rayen Poultry Ltd
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact" className="text-decoration-none">
                    Contact
                  </Link>
                </li>
              </ul>
              <i
                className="bi bi-list mobile-nav-toggle"
                onClick={handleNavbarClick}
              ></i>
            </nav>

            <div className="header-social-links d-flex">
              <Link href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </header>
      ) : (
        // Menu List View
        <div className="container mt-5">
           <button
            className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black"
             onClick={handleBackClick}
              >
          <IoClose />
  </button>
         
          <ul  className="list-group mb-4">
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link style={{ color: 'steelblue' }}  className="text-decoration-none" href="/">Home</Link>
            </li>
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link style={{ color: 'steelblue' }}  className="text-decoration-none" href="/about">About Us</Link>
            </li>
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link  style={{ color: 'steelblue' }}  className="text-decoration-none" href="/impact">Our impact</Link>
            </li>
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link  style={{ color: 'steelblue' }}  className="text-decoration-none" href="/team">Team</Link>
            </li>
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link style={{ color: 'steelblue' }}  className="text-decoration-none" href="/services">Services</Link>
            </li>
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link style={{ color: 'steelblue' }}  className="text-decoration-none" href="/contact">Contact</Link>
            </li>
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link style={{ color: 'steelblue' }}  className="text-decoration-none" href="/susidiaries/food">Tara Foods Ltd</Link>
            </li>
            <li onClick={handleBackClick}  className="list-group-item text-decoration-none">
              <Link style={{ color: 'steelblue' }}  className="text-decoration-none" href="/susidiaries/dairy">Rayen Dairy Ltd</Link>
            </li>
            <li onClick={handleBackClick} className="list-group-item text-decoration-none">
              <Link style={{ color: 'steelblue' }}  className="text-decoration-none" href="/susidiaries/poultry">Rayen Poultry Ltd</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
