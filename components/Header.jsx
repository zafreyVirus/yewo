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
                src={"/assets/img/YEWOLOGO.png"}
                alt="logo"
                width={150}
                height={450}
                className="logo-img"
                />
              </Link>
            </h1>

            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <Link href="/impact" className="text-decoration-none">
                  <span>Our Impact</span>
                </Link>
                <li className="dropdown">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
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
                    href="#"
                    onClick={(e) => e.preventDefault()}
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

                {/* <li className="dropdown">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    <span>Related Parties</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        href="/zananifoundation"
                        className="text-decoration-none"
                      >
                        <span>Zanani Foundation</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-decoration-none"
                      >
                        <span>Zanani Farms</span>{" "}
                        <i className="bi bi-chevron-down"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link
                            href="/subsidiary/food"
                            className="text-decoration-none"
                          >
                            Tara Foods
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/subsidiary/poultry"
                            className="text-decoration-none"
                          >
                            Rayen Poultry
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/subsidiary/dairy"
                            className="text-decoration-none"
                          >
                            Rayen Dairy
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li> */}

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
                <img
                  className="logo-img h-40 w-30"
                  src="/assets/img/favicon1.png"
                  alt="logo"
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
            <li
              onClick={handleBackClick}
              className="list-group-item text-decoration-none"
            >
              <Link className="text-decoration-none text-black" href="/impact">
                Our impact
              </Link>
            </li>

            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link className="text-decoration-none text-black" href="/about">
                Who we are
              </Link>
            </li>

            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link className="text-decoration-none text-black" href="/team">
                Team
              </Link>
            </li>

            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/services"
              >
                What we do
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link className="text-decoration-none text-black" href="/contact">
                Contact
              </Link>
            </li>
            {/* <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/subsidiary/food"
              >
                Tara Foods Ltd
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/subsidiary/dairy"
              >
                Rayen Dairy Ltd
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                className="text-decoration-none text-black"
                href="/subsidiary/poultry"
              >
                Rayen Poultry Ltd
              </Link>
            </li>
            <li onClick={handleBackClick} className="py-2 hover:bg-gray-100">
              <Link
                href="/zananifoundation"
                className="text-decoration-none text-black"
              >
                <span>Zanani Foundation</span>
              </Link>
            </li> */}
          </ul>
        </header>
      )}
    </div>
  );
};

export default HeaderSection;
