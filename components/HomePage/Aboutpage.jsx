import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-img position-relative">
              <div className="image-box">
                <div className="image-1">
                  <Image
                    src="/assets/img/image.png"
                    alt="About Us"
                    className="rounded"
                    height={500}
                    width={500}
                  />
                </div>

              </div>
              <div
                className="card text-center position-absolute text-white"
                style={{
                  position: 'absolute',
                  color: 'white',
                  left: '150px',
                  bottom: '55px',
                  borderRadius: '5px',
                  backgroundColor: '#285cb1',
                  padding: '30px 20px',
                  width: '180px',
                  textAlign: 'center'
                }}
              >
                <h3 className="h1 mb-1">{new Date().getFullYear() - 2020}</h3>
                <p className="mb-0">Years of Experience</p>
              </div>


            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6 ps-lg-4 ps-xl-7">
            <div className="content-box">
              <div className="main-title title-left">
                YEWO <span className="line-left"></span>
              </div>
              <h2 className="w-lg-90 mb-1-6 mb-lg-1-9">Trusted Partners in Growth!</h2>
              <p className="mb-1-9 mb-lg-6">
                YEWO is dedicated to empowering businesses through sustainable, ethical growth. Established in
                2020, we specialize in tailored financial and management services that drive success across multiple
                sectors.
              </p>

              {/* Mission and Vision */}
              <div className="row border-md-bottom clearfix pb-md-5 mb-5 mb-md-7">
                <div className="tab-style1 horizontaltab">
                  <div className="resp-tabs-container hor_1">
                    <div className="text-center mb-5">
                      <h2>
                        Why <span style={{ color: "steelblue" }}> We</span> Exist
                      </h2>
                      <p>
                        To accelerate the growth of sustainable and ethical businesses that positively impact the
                        community.
                      </p>
                    </div>

                    <div className="text-center mb-5">
                      <h2>
                        What <span style={{ color: "steelblue" }}>We</span> Will Be
                      </h2>
                      <p>To be a leading PE firm with profitable and sustainable businesses.</p>
                    </div>

                    <div className="text-center">
                      <Link href="/about" className="btn-get-started">
                        More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div style={styles.container}>
          <h2 style={styles.heading}>
            <span style={styles.highlight}>CORE</span> VALUES
          </h2>
          <p style={styles.subtext}>Trust, Integrity, Teamwork, and Inclusive Growth</p>

          <div style={styles.circleContainer}>
            <div style={styles.circle}>Trust</div>
            <div style={styles.circle}>Integrity</div>
            <div style={styles.circle}>Teamwork</div>
            <div style={styles.circle}>Inclusive Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};




// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  highlight: {
    color: '#4682B4',
  },
  subtext: {
    color: '#6B7280',
    marginBottom: '1.5rem',
  },
  circleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'medium',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    textAlign: 'center',
  },
  // Responsive styles for smaller devices
  '@media (max-width: 640px)': {
    circle: {
      width: '80px',
      height: '80px',
      fontSize: '0.75rem',
    },
  },
}

export default AboutSection;

