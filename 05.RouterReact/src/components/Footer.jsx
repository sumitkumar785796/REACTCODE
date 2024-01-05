import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="info_section layout_padding2">
    <div className="container">
      <div className="info_logo">
        <h2>
          HandTime
        </h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div className="img-box">
                <img src="images/location-white.png" width="18px" alt="" />
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/telephone-white.png" width="12px" alt="" />
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/envelope-white.png" width="18px" alt="" />
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_insta">
            <h5>
              Instagram
            </h5>
            <div className="insta_container">
              <div className="row m-0">
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w1.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w2.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w3.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w4.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w5.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w6.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action>
              <input type="email" placeholder="Enter your email" />
              <button>
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href>
                <img src="images/fb.png" alt="" />
              </a>
              <a href>
                <img src="images/twitter.png" alt="" />
              </a>
              <a href>
                <img src="images/linkedin.png" alt="" />
              </a>
              <a href>
                <img src="images/youtube.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <section className="footer_section">
    <div className="container">
      <p>
        © Sumit kumar
      </p>
    </div>
  </section>
  {/* footer section */}
    </>
  )
}

export default Footer