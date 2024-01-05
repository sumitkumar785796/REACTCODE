import React from 'react'

const Client = () => {
  return (
    <>
    <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Testimonial
            </h2>
          </div>
        </div>
        <div id="customCarousel2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>
                              Morojink
                            </h5>
                            <h6>
                              Customer
                            </h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                          dolore eu fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>
                              Morojink
                            </h5>
                            <h6>
                              Customer
                            </h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                          dolore eu fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>
                              Morojink
                            </h5>
                            <h6>
                              Customer
                            </h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                          dolore eu fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#customCarousel2" data-slide-to={0} className="active" />
            <li data-target="#customCarousel2" data-slide-to={1} />
            <li data-target="#customCarousel2" data-slide-to={2} />
          </ol>
        </div>
      </section>
    </>
  )
}

export default Client