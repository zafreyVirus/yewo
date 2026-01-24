import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                <span style={{ color: 'steelblue' }}>YEWO</span>
              </h3>
              <p>
                Synergy Co-Works, <br />
                Plot 526, Songwe Street,
                <br />
                New Area 12, Lilongwe, Malawi. <br />
                <br />
                <strong>Phone:</strong> +265 99 440 74 51
                <br />
                <strong>Email:</strong> yewo@gmail.com
                <br />
              </p>
            </div>

            
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/" className="text-decoration-none">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/about" className="text-decoration-none">Who We Are</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/services" className="text-decoration-none">What We Do</Link>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="#">Subsidiaries</Link>
                </li> */}
                <li>
                  <i className="bx bx-chevron-right"></i> <Link className="text-decoration-none" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>What We Do</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/services">Management Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link href="/services" className="text-decoration-none">Venture Capital Financing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/services" className="text-decoration-none">Debt Financing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="/services" className="text-decoration-none">Private Equity</Link>
                </li>
              </ul>
            </div>

            
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Related Parties</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/subsidiary/food">Tara Foods Ltd</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/subsidiary/dairy">YEWO Dairy Ltd</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/subsidiary/poultry">YEWO Poultry Ltd</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <Link className="text-decoration-none" href="/zananifoundation">YEWO Foundation</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span style={{ color: 'steelblue' }}>YEWO</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">

        <Link 
                href="https://www.instagram.com/zanani.farms/" 
                className="instagram" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
      </Link>

          <Link href="https://www.linkedin.com/company/rayenlimited/?originalSubdomain=mw" className="linkedin"
          target="_blank" 
          rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
