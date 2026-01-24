import Link from 'next/link'
import React from 'react'
import ContactForm from '../../../components/Contact/ContactForm'
import MapSection from '../../../components/Contact/Map2'
import EmailLocationSection from '../../../components/Contact/EmailLocationSection'

export default function Contact() {
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
          <h2>Contact</h2>
          <ol>
            <li>
              <Link href="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <li className="text-white">Contact</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End of breadcrumbs */}
      <MapSection/>
      <EmailLocationSection/>
      <ContactForm/>
    </div>
  )
}

