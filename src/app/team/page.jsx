import TeamSection from "../../../components/TeamSection";
import Link from "next/link";

export default function Team() {

  
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
                <h2>Team</h2>
                <ol>
                  <li>
                    <Link href="/" className="text-white text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="text-white">Team</li>
                </ol>
              </div>
            </div>
          </section>
          {/* End of breadcrumbs */}
      <TeamSection/>
      </div>
    );
  }
  