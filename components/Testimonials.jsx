"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/assets/img/customer/emoji2.jpeg',
      text: `"Tara Foods always delivers the freshest products! I’m never disappointed with their produce. Highly recommended!"`,
      name: 'Albert Phiri',
      source: 'Customer',
    },
    {
      image: '/assets/img/customer/emoji5.jpeg',
      text: `"Their dairy products are of the highest quality. I particularly love their yogurt—it’s smooth and delicious!"`,
      name: 'Lindiwe Banda',
      source: 'Customer',
    },
    {
      image: '/assets/img/customer/emoji1.jpeg',
      text: `"Great service, excellent products, and they care about the environment. Tara Foods is my go-to!"`,
      name: 'Thoko Sambo',
      source: 'Customer',
    },
    {
      image: '/assets/img/customer/emoji3.jpeg',
      text: `"Great service, excellent products, and they care about the environment. Tara Foods is my go-to!"`,
      name: 'Vincent Makiyi',
      source: 'Customer',
    },
    {
      image: '/assets/img/customer/emoji1.jpeg',
      text: `"Great service, excellent products, and they care about the environment. Tara Foods is my go-to!"`,
      name: 'Natasha Daza',
      source: 'Customer',
    },
    {
      image: '/assets/img/customer/emoji4.jpeg',
      text: `"Great service, excellent products, and they care about the environment. Tara Foods is my go-to!"`,
      name: 'Maya Frank',
      source: 'Customer',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="testimonial-container">
      <h2>What <span style={{ color: 'steelblue' }}>People</span> Say <span style={{ color: 'steelblue' }}>About Us</span></h2>
      
      {slides.map((slide, index) => (

<div
  key={index}
  style={{ padding: '80px' }}
  className={`testimonial-slide text-center ${index === currentSlide ? 'active' : ''}`}
>
  <Image
      src={slide.image} 
      alt="User photo"
      className="d-block mx-auto mb-3" 
      style={{ maxWidth: '150px', borderRadius: '50%' }}
      width={150}
      height={150}
  />

  <p className="testimonial-text">{slide.text}</p>
  <p className="testimonial-name fw-bold">{slide.name}</p>
  <p className="testimonial-source text-muted">{slide.source}</p>
</div>


      ))}
      
      {/* <span className="arrow-left" onClick={prevSlide}>&#10094;</span>
      <span className="arrow-right" onClick={nextSlide}>&#10095;</span> */}
    </div>
  );
};

export default Testimonials;