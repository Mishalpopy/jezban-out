import React from "react";
import { Link } from "react-router-dom";
import MobileMenus from "./MobileMenus";

const OffCanvas = ({ setOffCanvas, isOffCanvas }) => {
  return (
    <>
      <div
        className={`offcanvas__area off-canvas-bg ${
          isOffCanvas ? "opened" : ""
        }`}
        
        
      >
   
        <div className="offcanvas_area-logo">
          <span className="offcanvas__close-btn">
            <button onClick={() => setOffCanvas(false)}>
              <i className="fal fa-times" />
            </button>
          </span>
        </div>
        <div className="offcanvas-content pb-40">
          <div className="offcanvas-subtitle">
            <span>ELEVATE YOUR PEST CONTROL WITH</span>
          </div>
          <div className="offcanvas-logo pb-30 pt-10">
          <Link to="/" href="/"><img src="/assets/img/white.svg" width={300} className="mx-auto" alt="" /></Link>
          </div>
          <div className="offcanva-details ">
            <p>
            At Jezben Pest Control, we are dedicated to ensuring that your home and business remain pest-free, safe, and comfortable. Our story is one of passion, expertise, and a relentless commitment to customer satisfaction.            </p>
          </div>
          <div className="offcanva-btn">
            <Link
              to="/contact"
              className="tp-slider-btn mt-40 d-inline-block"
              tabIndex="-1"
            >
              <span>
                <svg
                  width="53"
                  height="8"
                  viewBox="0 0 53 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  width="53"
                  height="8"
                  viewBox="0 0 53 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Get in touch
            </Link>
          </div>
        </div>

        <div className="tp-mobile-menu mean-container d-block d-xl-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tp-footer__widget pb-30 offcanvas-ct-info">
          <h3 className="tp-footer__widget-title">Quick Links</h3>
          <ul>
            <li>
              <Link to="#">27 Division St,Dubai, UAE</Link>
            </li>
            <li>
              <Link to="tel:+88015569569365">(+971)52462545632</Link>
            </li>
            <li>
              <Link to="mailto:support@example.com">info@jeban.com</Link>
            </li>
            <li>
              <span> Office Hours: 9AM - 4PM</span>
            </li>
            <li>
              <span> Friday - Wekend Day</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => setOffCanvas(false)}
        className={`body-overlay ${isOffCanvas ? "opened" : ""}`}
      ></div>
    </>
  );
};

export default OffCanvas;
