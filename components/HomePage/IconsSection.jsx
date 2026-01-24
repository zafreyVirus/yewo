
import Image from "next/image";

const IconSection = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="container" data-aos="fade-up">
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right">
            <h2></h2>
            <h3></h3>
          </div>

          {/* Services Block */}
          <section className="py-2-3 services-bloc">
            <div className="container">
              <div className="row">
                {/* Efficient Delivery */}
                <div className="col-sm-6 col-lg-3 mb-1-9 mb-lg-0">
                  <div className="d-flex flex-column text-center align-items-center">
                    <Image
                      src="/assets/img/icon1.png"
                      alt="Efficient Delivery"
                      width={50}
                      height={50}
                      className="blue-filter mb-2"
                    />
                    <div className="media-body ms-3">
                      <h4 className="mb-0 text-black h4">Efficient Delivery</h4>
                    </div>
                  </div>
                </div>



                {/* Trusted by Many */}
                <div className="col-sm-6 col-lg-3 mb-1-9 mb-lg-0">
                  <div className="d-flex flex-column align-items-center text-center">
                    <Image
                      src="/assets/img/icon2.png"
                      alt="Trusted by Many"
                      width={50}
                      height={50}
                      className="blue-filter mb-2"
                    />
                    <h4 className="mb-0 text-black h5">Trusted by Many</h4>
                  </div>
                </div>


                {/* Tailored Solutions */}
                <div className="col-sm-6 col-lg-3 mb-1-9 mb-sm-0">
                  <div className="d-flex flex-column text-center align-items-center">
                    <Image
                      src="/assets/img/icon3.png"
                      alt="Tailored Solutions"
                      width={50}
                      height={50}
                      className="blue-filter mb-2"
                    />
                    <div className="media-body ms-3">
                      <h4 className="mb-0 text-black h5">Tailored Solutions</h4>
                    </div>
                  </div>
                </div>

                {/* Transparent Terms */}
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex flex-column text-center align-items-center">
                    <Image
                      src="/assets/img/icon4.png"
                      alt="Transparent Terms"
                      width={50}
                      height={50}
                      className="blue-filter mb-2"
                    />
                    <div className="media-body ms-3">
                      <h4 className="mb-0 text-black h5">Transparent Terms</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IconSection;