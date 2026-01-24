import Link from "next/link";
import Economic from "../impact/economic/page";
import Youth from "../impact/youth/page";
import Environmental from "../impact/environmental/page";
import Women from "../impact/women/page";
import Testimonials from "../../../components/Testimonials";
import ImpactSection from "../../../components/Impact";

export default function zanani() {
  
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
            <h2>Zanani Foundation</h2>
            <ol>
              <li>
                <Link href="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="text-white">Zanani Foundation</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End of breadcrumbs */}

      <div
        className="welcome-section"
        style={{
          backgroundImage: "url('/assets/img/g.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <div className="welcome-text">SOCIAL DEVELOPMENT IMPACT OF ZANANI FOUNDATION</div>
      </div>

      {/* <ImpactSection/> */}

            {/* Our impact story */}
            <div className="container py-2">
        {/* <h2 className="text-center mb-4">
          <span style={{ color: "steelblue" }}>Stories</span> of{" "}
          <span style={{ color: "steelblue" }}>Our</span> Impact
        </h2> */}
        <Economic/>
        <Youth/>

      <Environmental/>
      <Women/>
      </div>
      {/* End our impact story */}

      {/* <Testimonials/> */}
    </div>
  )
}
