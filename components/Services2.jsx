// import Image from "next/image";
// import Link from "next/link";

// export default function ServicesForm() {
//   const services = [
//     {
//       title: "Management Services",
//       image: "/assets/img/12.jpg",
//       description:
//         "This involves recruitment services, director services, company incorporation services, and general administration services.",
//     },
//     {
//       title: "Venture Capital Financing",
//       image: "/assets/img/13.jpg",
//       description:
//         "This involves market research, deal sourcing, due diligence, and portfolio management.",
//     },
//     {
//       title: "Debt Financing",
//       image: "/assets/img/14.jpg",
//       description:
//         "This involves project financing, order financing, and cashflow planning and management.",
//     },
//     {
//       title: "Private Equity Financing",
//       image: "/assets/img/15.jpg",
//       description:
//         "This involves provision of management support services, operations redesign, financial restructuring, and strategic guidance.",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-12 mt-6 container">
//       <div className="px-4 text-start">
//         <h1 className="text-2xl font-bold text-gray-900 mt-4">
//           Delivering for <span style={{ color: "steelblue" }}>Our Clients</span>
//         </h1>

//         <div className="row justify-content-center mt-10 py-2">
//           {services.map((service) => (
//             <div key={service.title} className="col-lg-4 col-md-6 d-flex align-items-stretch">
//               <Link
//                 href={{
//                   pathname: "/services/details",
//                   query: {
//                     title: service.title,
//                     image: service.image,
//                     description: service.description,
//                   },
//                 }}
//               >
//                 <div className="member" data-aos="fade-up" style={{ textDecoration: "none" }}>
//                   <div className="member-img text-start">
//                     <Image
//                       src={service.image}
//                       className="rounded-sm"
//                       alt={service.title}
//                       width={500}
//                       height={500}
//                     />
//                   </div>
//                   <div className="member-info text-start mt-3">
//                     <h4 className="text-black">{service.title}</h4>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function ServicesForm() {
  const services = [
    {
      title: "Management Services",
      image: "/assets/img/manage.jpg",
      description: "This involves recruitment services, director services, company incorporation services, and general administration services.",
    },
    {
      title: "Venture Capital Financing",
      image: "/assets/img/venture.jpg",
      description: "This involves market research, deal sourcing, due diligence, and portfolio management.",
    },
    {
      title: "Debt Financing",
      image: "/assets/img/dept.jpg",
      description: "This involves project financing, order financing, and cashflow planning and management.",
    },
    {
      title: "Private Equity Financing",
      image: "/assets/img/private.jpg",
      description: "This involves provision of management support services, operations redesign, financial restructuring, and strategic guidance.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 mt-6 container">
      <div className="px-4 text-start">
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Delivering for <span style={{ color: "steelblue" }}>Our Clients</span>
        </h1>

        <div className="row justify-content-center mt-10 py-2">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <Link
                href={{
                  pathname: "/services/servicedetails",
                  query: {
                    title: service.title,
                    image: service.image,
                    description: service.description,
                  },
                }}
              >
                <div className="member" data-aos="fade-up" style={{ textDecoration: "none" }}>
                  <div className="member-img text-start">
                    <Image
                      src={service.image}
                      className="rounded-sm"
                      alt={service.title}
                      width={500}
                      height={500}
                      style={{
                        width: "100%", 
                        height: "300px",
                        width: "500px",  
                        objectFit: "cover", // Ensures the image fits well without distortion
                        borderRadius: "10px" // Optional: adds rounded corners
                      }}
                    />
                  </div>
                  <div className="member-info text-start mt-3">
                    <h4 className="text-black">{service.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

