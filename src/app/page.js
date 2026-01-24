"use client"
import dynamic from "next/dynamic"
import Testimonials from "../../components/Testimonials"
import "bootstrap/dist/css/bootstrap.min.css"
import AboutPage from "./about/page"
import CoreValues from "../../components/Corevalues"
import MissionVision from "../../components/MissionVision"
import AboutSection from "../../components/HomePage/Aboutpage"
import Subsidiaries from "../../components/Subsidiary"
import ServicesForm from "../../components/Services"
import ImpactSection from "../../components/Impact"
import IconSection from "../../components/HomePage/IconsSection"
import HeaderSection from "../../components/Header"

const HeroCarousel = dynamic(() => import("../../components/HomePage/Hero"), { ssr: false })

if (typeof window !== 'undefined') {
  require("bootstrap/dist/js/bootstrap.bundle.min.js")
}


function page() {
  return (
    <div>
      <HeroCarousel/>
      <IconSection/>
       <AboutSection/> 
      <ServicesForm/>
      <Subsidiaries/>
      <ImpactSection/>
      <Testimonials/>


    </div>
  )
}

export default page
