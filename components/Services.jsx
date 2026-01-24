"use client"

import * as React from "react"
import Link from "next/link"

const ServicesForm = () => {
  const services = [
    {
      id: 1,
      icon: "bx bx-briefcase",
      title: "Management Services",
      description:
        "This involves recruitment services, director services, company incorporation services and general administration services.",
    },
    {
      id: 2,
      icon: "bx bx-line-chart",
      title: "Venture Capital Financing",
      description:
        "This involves market research, deal sourcing, due diligence and portfolio management.",
    },
    {
      id: 3,
      icon: "bx bx-credit-card",
      title: "Debt Financing",
      description:
        "This involves Project financing, order financing and cashflow planning and management.",
    },
    {
      id: 4,
      icon: "bx bx-basket",
      title: "Private Equity Financing",
      description:
        "This involves provision of management support services, operations redesign, financial restructuring and strategic guidance.",
    },
    {
      id: 5,
      icon: "bx bx-cog",
      title: "Advisory Services",
      description:
        "Strategic advisory, financial modelling and business transformation services.",
    },
    {
      id: 6,
      icon: "bx bx-globe",
      title: "Market Expansion",
      description:
        "Helping businesses expand into new markets with data-driven insights.",
    },
  ]

  // Split services into groups of 3
  const chunkSize = 3
  const slides = []
  for (let i = 0; i < services.length; i += chunkSize) {
    slides.push(services.slice(i, i + chunkSize))
  }

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center py-3">
          What <span style={{ color: "steelblue" }}>We Do</span>
        </h2>

        <div
          id="servicesCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#servicesCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                style={{ backgroundColor: "steelblue" }}
              />
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {slides.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row justify-content-center">
                  {group.map((service) => (
                    <div
                      key={service.id}
                      className="col-12 col-lg-4 d-flex align-items-stretch mb-4"
                    >
                      <div className="icon-box iconbox-blue text-center p-4 w-100">
                        <div className="icon mb-3">
                          <i className={service.icon}></i>
                        </div>

                        <h4>
                          <Link href="#" className="text-decoration-none">
                            {service.title}
                          </Link>
                        </h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#servicesCarousel"
            data-bs-slide="prev"
            style={{ filter: "invert(0) brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(1313%) hue-rotate(207deg) brightness(99%) contrast(101%)" }}
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#servicesCarousel"
            data-bs-slide="next"
            style={{ filter: "invert(0) brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(1313%) hue-rotate(207deg) brightness(99%) contrast(101%)" }}
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesForm

// "use client"

// import * as React from "react"
// import { useEffect, useRef } from "react"

// const ServicesForm = () => {
//   const carouselRef = useRef(null)

//   const services = [
//     {
//       id: 1,
//       icon: "bx bx-briefcase",
//       title: "Management Services",
//       description:
//         "This involves recruitment services, director services, company incorporation services and general administration services.",
//     },
//     {
//       id: 2,
//       icon: "bx bx-line-chart",
//       title: "Venture Capital Financing",
//       description:
//         "This involves market research, deal sourcing, due diligence and portfolio management.",
//     },
//     {
//       id: 3,
//       icon: "bx bx-credit-card",
//       title: "Debt Financing",
//       description:
//         "This involves Project financing, order financing and cashflow planning and management.",
//     },
//     {
//       id: 4,
//       icon: "bx bx-basket",
//       title: "Private Equity Financing",
//       description:
//         "This involves provision of management support services, operations redesign, financial restructuring and strategic guidance.",
//     },
//     {
//       id: 5,
//       icon: "bx bx-cog",
//       title: "Advisory Services",
//       description:
//         "Strategic advisory, financial modelling and business transformation services.",
//     },
//     {
//       id: 6,
//       icon: "bx bx-globe",
//       title: "Market Expansion",
//       description:
//         "Helping businesses expand into new markets with data-driven insights.",
//     },
//   ]

//   useEffect(() => {
//     // Initialize Bootstrap carousel with auto-slide
//     if (typeof window !== 'undefined' && window.bootstrap) {
//       const carouselElement = carouselRef.current
//       if (carouselElement) {
//         new window.bootstrap.Carousel(carouselElement, {
//           interval: 3000, // Auto-slide every 3 seconds
//           ride: 'carousel',
//           wrap: true
//         })
//       }
//     }
//   }, [])

//   return (
//     <section id="services" className="services section-bg py-5">
//       <div className="container" data-aos="fade-up">
//         <h2 className="text-center py-3 mb-4">
//           What <span style={{ color: "steelblue" }}>We Do</span>
//         </h2>

//         <div
//           ref={carouselRef}
//           id="servicesCarousel"
//           className="carousel slide"
//           data-bs-ride="carousel"
//           data-bs-interval="3000"
//         >
//           {/* Indicators */}
//           <div className="carousel-indicators">
//             {services.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 data-bs-target="#servicesCarousel"
//                 data-bs-slide-to={index}
//                 className={index === 0 ? "active" : ""}
//                 aria-current={index === 0 ? "true" : undefined}
//                 style={{ backgroundColor: "steelblue" }}
//               />
//             ))}
//           </div>

//           {/* Slides - One card at a time */}
//           <div className="carousel-inner">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`carousel-item ${index === 0 ? "active" : ""}`}
//               >
//                 <div className="row justify-content-center">
//                   {/* Show 3 cards on large screens, centered around current */}
//                   <div className="col-12 col-md-6 col-lg-4 d-none d-lg-flex align-items-stretch mb-4">
//                     <div className="icon-box iconbox-blue text-center p-4 w-100" style={{ opacity: 0.5 }}>
//                       <div className="icon mb-3">
//                         <i className={services[(index - 1 + services.length) % services.length].icon}></i>
//                       </div>
//                       <h4>
//                         <a href="#" className="text-decoration-none">
//                           {services[(index - 1 + services.length) % services.length].title}
//                         </a>
//                       </h4>
//                       <p>{services[(index - 1 + services.length) % services.length].description}</p>
//                     </div>
//                   </div>

//                   {/* Current/Active card - visible on all screens */}
//                   <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
//                     <div className="icon-box iconbox-blue text-center p-4 w-100">
//                       <div className="icon mb-3">
//                         <i className={service.icon}></i>
//                       </div>
//                       <h4>
//                         <a href="#" className="text-decoration-none">
//                           {service.title}
//                         </a>
//                       </h4>
//                       <p>{service.description}</p>
//                     </div>
//                   </div>

//                   {/* Show next card on large screens */}
//                   <div className="col-12 col-md-6 col-lg-4 d-none d-lg-flex align-items-stretch mb-4">
//                     <div className="icon-box iconbox-blue text-center p-4 w-100" style={{ opacity: 0.5 }}>
//                       <div className="icon mb-3">
//                         <i className={services[(index + 1) % services.length].icon}></i>
//                       </div>
//                       <h4>
//                         <a href="#" className="text-decoration-none">
//                           {services[(index + 1) % services.length].title}
//                         </a>
//                       </h4>
//                       <p>{services[(index + 1) % services.length].description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Controls */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#servicesCarousel"
//             data-bs-slide="prev"
//             style={{ 
//               filter: "invert(27%) sepia(51%) saturate(1313%) hue-rotate(207deg) brightness(99%) contrast(101%)",
//               width: "5%"
//             }}
//           >
//             <span className="carousel-control-prev-icon" aria-hidden="true" />
//             <span className="visually-hidden">Previous</span>
//           </button>

//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#servicesCarousel"
//             data-bs-slide="next"
//             style={{ 
//               filter: "invert(27%) sepia(51%) saturate(1313%) hue-rotate(207deg) brightness(99%) contrast(101%)",
//               width: "5%"
//             }}
//           >
//             <span className="carousel-control-next-icon" aria-hidden="true" />
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .icon-box {
//           border-radius: 8px;
//           background: #fff;
//           box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease-in-out;
//         }

//         .icon-box:hover {
//           transform: translateY(-5px);
//           box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
//         }

//         .icon {
//           font-size: 48px;
//           color: steelblue;
//         }

//         .icon-box h4 {
//           font-weight: 600;
//           margin-bottom: 15px;
//           font-size: 20px;
//         }

//         .icon-box h4 a {
//           color: #333;
//           transition: color 0.3s;
//         }

//         .icon-box h4 a:hover {
//           color: steelblue;
//         }

//         .icon-box p {
//           line-height: 24px;
//           font-size: 14px;
//           margin-bottom: 0;
//           color: #666;
//         }

//         .section-bg {
//           background-color: #f8f9fa;
//         }

//         .carousel-indicators button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           border: none;
//         }

//         .carousel-item {
//           transition: transform 0.6s ease-in-out;
//         }

//         @media (max-width: 991px) {
//           .icon-box {
//             max-width: 500px;
//             margin: 0 auto;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default ServicesForm