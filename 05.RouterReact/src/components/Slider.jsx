import React from 'react'

const Slider = () => {
  return (
    <>
    <section className="slider_section ">
            <div className="slider_bg_box">
              <img src="images/slider-bg.jpg" alt="" />
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>
                            Stylish Watches
                          </h1>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                          </p>
                          <div className="btn-box">
                            <a href className="btn1">
                              Contact Us
                            </a>
                            <a href className="btn2">
                              About Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>
                            Stylish Watches
                          </h1>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                          </p>
                          <div className="btn-box">
                            <a href className="btn1">
                              Contact Us
                            </a>
                            <a href className="btn2">
                              About Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>
                            Stylish Watches
                          </h1>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                          </p>
                          <div className="btn-box">
                            <a href className="btn1">
                              Contact Us
                            </a>
                            <a href className="btn2">
                              About Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>
                            Stylish Watches
                          </h1>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                          </p>
                          <div className="btn-box">
                            <a href className="btn1">
                              Contact Us
                            </a>
                            <a href className="btn2">
                              About Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>
                            Stylish Watches
                          </h1>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                          </p>
                          <div className="btn-box">
                            <a href className="btn1">
                              Contact Us
                            </a>
                            <a href className="btn2">
                              About Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                <li data-target="#customCarousel1" data-slide-to={1} />
                <li data-target="#customCarousel1" data-slide-to={2} />
                <li data-target="#customCarousel1" data-slide-to={3} />
                <li data-target="#customCarousel1" data-slide-to={4} />
              </ol>
            </div>
          </section>
    </>
  )
}

export default Slider