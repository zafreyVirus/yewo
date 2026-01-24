import ContactForm from "../../../components/Contact/ContactForm";
import MapSection from "../../../components/Contact/Map";
import Gallery from "../../../components/Gallery";
import Testimonials from "../../../components/Testimonials";
import VideoSection from "../../../components/Video";

export default function subsidiariesLayout({
children,    
}){
    return(
        <>
        {children}
        <VideoSection/>
        <MapSection/>
        <Testimonials/>
        <Gallery/>
        <ContactForm/>
        
        </>
    );
}