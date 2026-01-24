import ImpactSection from "../../../components/Impact";
import Link from "next/link";
import Testimonials from "../../../components/Testimonials";
import Economic from "./economic/page";
import Youth from "./youth/page";
import Environmental from "./environmental/page";
import Women from "./women/page";

export default function Services() {

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
            <h2>Our Impact</h2>
            <ol>
              <li>
                <Link href="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="text-white">Our Impact</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End of breadcrumbs */}


      <ImpactSection />
<Economic/>
<Youth/>
<Environmental/>
<Women/>

      <Testimonials />
    </div>
  );
}
