"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-bootstrap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const HeroCarousel = () => {
  const slides = [
    {
      image: "/assets/img/yeo_bg_1.jpg",
      title: "Trusted Growth Partners",
      description:
        "Youth in Enterpreneurship and Wilrdlife Organization (YEWO) is dedicated to empowering startups and established businesses alike. Our comprehensive suite of services includes business consulting, market analysis, and growth strategy development, all designed to help our clients thrive in competitive markets.",
      button: { text: "Read More", link: "/services" },
    },
    {
      image: "/assets/img/yeo_bg_1.jpg",
      title: "Strategic Financial Solutions",
      description:
        "From venture capital to debt financing, YEWO provides tailored financial services that fuel innovation and expansion. Our dedicated team ensures each investment is thoroughly researched, strategically managed, and positioned for long-term success.",
      button: { text: "Contact Us", link: "/contact" },
    },
    {
      image: "/assets/img/yeo_bg_1.jpg",
      title: "Business Training & Development",
      description:
        "At YEWO, we believe that knowledge is power. Our training programs are designed to equip entrepreneurs and business leaders with the skills they need to navigate the complexities of today's business landscape. From leadership development to operational excellence, we provide the tools for success.",
      button: { text: "Our Services", link: "/services" },
    },
  ];

  return (
    <section id="hero">
      <Carousel
        fade
        interval={10000}
        nextIcon={
          <span>
            <BiChevronRight size={60} color="steelblue" />
          </span>
        }
        prevIcon={
          <span>
            <BiChevronLeft size={60} color="steelblue" />
          </span>
        }
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="carousel-item-blur">
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                height: "100vh",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="carousel-container d-flex justify-content-center align-items-center"
              style={{
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <div className="carousel-content text-center text-white">
                <h2 style={{ color: "steelblue" }}>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link
                  href={slide.button.link}
                  className="btn btn-primary text-white"
                  style={{ background: "steelblue", border: "none" }}
                >
                  {slide.button.text}
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <style jsx>{`
        .carousel-item-blur {
          position: relative;
          overflow: hidden;
        }

        .carousel-image {
          filter: blur(2px); 
          height: 100%; 
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
