"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Food() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between the current and previous index
  };

  return (
    <div>
            {/* Breadcrumbs */}
            <section
      id="breadcrumbs"
      className="breadcrumbs"
      style={{ backgroundColor: "steelblue" }}
    >
      <div className="container pt-5">
        <div className="d-flex justify-content-between list-unstyled w-100">
          <h2>Tara foods</h2>
          <ol>
            <li>
              <Link href="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li className="text-white">Tara foods</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End of breadcrumbs */}
      {/* Welcome section */}

      <div
        className="welcome-section"
        style={{
          backgroundImage: "url('/assets/img/foods/pic-2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
        }}
      >
        <div className="welcome-text">Welcome To Tara Foods</div>
      </div>

      {/* About section */}
      <div className="container">
      <div className="about-section">
        <div className="text-container">
          <h2>About Tara Foods Ltd</h2>
          <p>
            Tara Foods Ltd, incorporated on 25/10/2018, is dedicated to
            delivering fresh, high-quality food products to households and
            businesses across the region. With a focus on sustainability and
            local sourcing, we ensure that every product is crafted with care
            and delivered with passion which covers{" "}
            <span style={{ color: "steelblue" }}>
              <b>20 Acres of land</b>
            </span>
            .
          </p>
          {/* <a href="#" className="explore-button" style={{ backgroundColor: 'steelblue' }}>
          Explore Our Services
        </a> */}
        </div>

        {/* Accordion section */}
        <div>
          <div className="accordion">
            <div className="accordion-item">
              <button
                className={`accordion-header ${
                  activeIndex === 0 ? "active" : ""
                }`}
                onClick={() => toggleAccordion(0)}
              >
                Farm size:
              </button>
              <div
                className="accordion-content"
                style={{ display: activeIndex === 0 ? "block" : "none" }}
              >
                <p>Whole farm - 20 Acres</p>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-header ${
                  activeIndex === 1 ? "active" : ""
                }`}
                onClick={() => toggleAccordion(1)}
              >
                Farm location:
              </button>
              <div
                className="accordion-content"
                style={{ display: activeIndex === 1 ? "block" : "none" }}
              >
                <p>
                  Muwawane Village, Chiwamba EPA, TA Chimutu, Lilongwe, Malawi.
                </p>
              </div>
            </div>

            <div className="accordion-item">
              <button
                className={`accordion-header ${
                  activeIndex === 2 ? "active" : ""
                }`}
                onClick={() => toggleAccordion(2)}
              >
                Incorporation Date:
              </button>
              <div
                className="accordion-content"
                style={{ display: activeIndex === 2 ? "block" : "none" }}
              >
                <p>25/10/2018</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {/* End of about section */}

      {/* Primary and secondary interest section */}
      <div className="row align-items-center p-10">
        {/* Left Column - Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="about-img position-relative">
            <div className="image-box">
              <div className="image-1">
                <Image
                  src="/assets/img/foods/pic-4.jpg"
                  className="rounded"
                  alt="Image 1"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content Section */}
        <div className="col-lg-6 ps-lg-4 ps-xl-7">
          <div className="content-box">
            <div className="row border-md-bottom clearfix pb-md-5 mb-5 mb-md-7">
              <div className="tab-style1 horizontaltab">
                <div
                  className="resp-tabs-container hor_1"
                  style={{ marginTop: "50px" }}
                >
                  {/* Primary Interest */}
                  <div className="text-center mb-5">
                    <h2>
                      <span style={{ color: "steelblue" }}>Primary</span>{" "}
                      Interest
                    </h2>
                    <p>Bananas, Maize and Flour Trading, Pig Production</p>
                  </div>

                  {/* Secondary Interest */}
                  <div className="text-center mb-5">
                    <h2>
                      Secondary{" "}
                      <span style={{ color: "steelblue" }}>Interest</span>
                    </h2>
                    <p>
                      Knowledge and practical training centre for students and
                      local farmers, job provision to the youth and women.
                    </p>
                  </div>

                  {/* Target Market */}
                  <div className="text-center mb-5">
                    <h2>
                      <span style={{ color: "steelblue" }}>Target</span> Market
                    </h2>
                    <p>
                      Middle class consumers, Institutions and sister companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Primary and secondary interest */}

      {/* Mission, Vision & Values */}
      <div className="products-section">
        <h2>
          Our <span style={{ color: "steelblue" }}>Mission</span>, Vision{" "}
          <span style={{ color: "steelblue" }}>&</span> Values
        </h2>
        <p>
          At Tara Foods, we are committed to providing nutritious, high-quality
          food while upholding the values of sustainability, community support,
          and transparency. We believe in contributing to a healthier, more
          sustainable food system.
        </p>
        <div className="card-container d-flex flex-wrap gap-4 justify-content-center">
          {/* Mission Card */}
          <div className="card">
            <div className="card-content">
              <h3>
                <span>Mission</span>
              </h3>
              <p>
                Our purpose is to be the food provider of choice through
                accessible, affordable, and reliable supply. We aspire to be the
                most sustainable social, environmental, and financially viable
                business in the diversified foods industry within Malawi and the
                region.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="card">
            <div className="card-content">
              <h3>Vision</h3>
              <p>
                We envision a Malawi that’s able to produce and export high
                quality food products.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="card">
            <div className="card-content">
              <h3>Values</h3>
              <p>
                We are dedicated to supporting local farmers and contributing to
                the well-being of our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
