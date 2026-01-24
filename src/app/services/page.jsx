import ServicesForm from "../../../components/Services2"
import Link from "next/link"

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
          <h2>What We Do</h2>
          <ol>
            <li>
              <Link href="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li className="text-white">Services</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End of breadcrumbs */}
      <ServicesForm/>
    </div>
  )
}
