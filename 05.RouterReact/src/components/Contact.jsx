import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
    <Header/>
    <section class="contact_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Contact Us
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <form action="">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" class="message-box" placeholder="Message" />
              </div>
              <div class="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="map_container">
            <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28877.981992437406!2d84.96896939608187!3d25.21172795063601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2b579d16d21cd%3A0xa38f8ace26806cfa!2sJehanabad%2C%20Bihar!5e0!3m2!1sen!2sin!4v1703240851140!5m2!1sen!2sin" width={800} height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    {/* footer */}
    <Footer/>
    {/* end Footer */}
    </>
  )
}

export default Contact