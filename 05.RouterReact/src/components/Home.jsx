import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Service from './Service'
import Product from './Product'
import Newproduct from './Newproduct'
import Client from './Client'
import Footer from './Footer'
const Home = () => {
  return (
    <>
      <div className="hero_area">
        {/* header section strats */}
        <Header />
        {/* end header section */}
        
        {/* slider section */}
        <Slider />
        {/* end slider section */}
      </div>

      {/* service section */}
      <Service />
      {/* end service section */}

      {/* product section */}
      <Product />
      {/* end product section */}

      {/* product section */}
      <Newproduct />
      {/* end product section */}

      {/* client section */}
      <Client/>
      {/* end client section */}

      {/* footer */}
      <Footer/>
      {/* end Footer */}
    </>
  )
}

export default Home