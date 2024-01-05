import React from 'react'
import Nav from './nav'
const Header = () => {
  return (
    <>
    <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="">
                  <span>
                    HandTime
                  </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* navabar */}
                  <Nav/>
                {/* navabar end */}
                  <div className="user_optio_box">
                    <a href>
                      <i className="fa fa-user" aria-hidden="true" />
                    </a>
                    <a href>
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>
    </>
  )
}

export default Header