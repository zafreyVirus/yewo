"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const HeaderSection = () => {
  const [showMenuList, setShowMenuList] = useState(false);

  const handleNavbarClick = () => {
    setShowMenuList(true);
  };

  const handleBackClick = () => {
    setShowMenuList(false);
  };

  return (
    <div>
      {!showMenuList ? (
        // Header
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <Link href="/">
                <Image
                  src="/assets/img/YEWOLOGO.png"
                  width={150}
                  height={450}
                  className="logo-img"
                  style={{ width: "auto", height: "auto" }}
                  alt="Logo"
                />
              </Link>
            </h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                {/* FIX 1: Wrap Link in li */}
                <li>
                  <Link href="/impact" className="text-decoration-none">
                    <span>Our Impact</span>
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="/about" // FIX 2: Use actual route instead of "#"
                    className="text-decoration-none"
                  >
                    <span>Who we are</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/about" className="text-decoration-none">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleBackClick}
                        href="/team"
                        className="text-decoration-none"
                      >
                        Team
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link
                    href="/services" // FIX 3: Use actual route
                    className="text-decoration-none"
                  >
                    <span>What We Do</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/services" className="text-decoration-none">
                        Services offered
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
              <Link
                href="https://www.instagram.com/zanani.farms/"
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/rayenlimited/?originalSubdomain=mw"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </header>
      ) : (
        // Menu List View
        <header id="header" className="fixed-top px-10">
          <div className="container d-flex justify-content-between align-items-center">
            <div>
              <Link href="/">
                <Image
                  className="logo-img h-40 w-30"
                  src="/assets/img/favicon1.png"
                  alt="logo"
                  width={120}
                  height={160}
                />
              </Link>
            </div>

            <div>
              <button
                className="p-2 text-3xl text-gray-500 hover:text-black"
                onClick={handleBackClick}
              >
                <IoClose size={30} />
              </button>
            </div>
          </div>

          <ul className="list-none text-center">
            {/* FIX 4: Move onClick to Link component, not li */}
            <li className="list-group-item text-decoration-none">
              <Link
                className="text-decoration-none text-black"
                href="/impact"
                onClick={handleBackClick} // onClick moved here
              >
                Our impact
              </Link>
            </li>

            <li className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/about"
                onClick={handleBackClick}
              >
                Who we are
              </Link>
            </li>

            <li className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/team"
                onClick={handleBackClick}
              >
                Team
              </Link>
            </li>

            <li className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/services"
                onClick={handleBackClick}
              >
                What we do
              </Link>
            </li>

            <li className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/contact"
                onClick={handleBackClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </header>
      )}
    </div>
  );
};

export default HeaderSection;
