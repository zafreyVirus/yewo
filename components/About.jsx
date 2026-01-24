import Image from "next/image";
const AboutUs = () => {
    return (
      <section id="about-us" className="about-us py-5">
        <div className="container" data-aos="fade-up">
          <div className="row content">
            
            <div className="col-lg-6" data-aos="fade-right">
              {/* <h2>Slogan</h2> */}
              <h3>Trusted partners in growth!</h3>
              <Image
                  src="/assets/img/favicon.png"
                  className=""
                  alt=""
                  width={500}
                  height={500}
                />
              
            </div>
  
            
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
              <p>
                YEO, founded in 2020, offers services such as management
                consulting, business training and private equity financing.
                We focus on helping businesses grow sustainably and ethically, with a mission to positively impact communities.
              </p>
              <p>
                Guided by trust, integrity, and teamwork, our leadership team
                brings vast experience in strategy, finance, and business
                development.
              </p>
              <p className="fst-italic">
                YEO is based in Blantyre, Malawi, and serves both local and international clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  