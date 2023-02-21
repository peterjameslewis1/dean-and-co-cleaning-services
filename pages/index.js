// pages/index.js
// import { createClient } from "next-sanity";
import Hero from '../src/heroImage'
import Services from '../src/services'
import Icons from '../src/icon'
import About from '../src/about'
import Reviews from '../src/reviews'
import Booking from '../src/booking'
import Footer from '../src/footer'

// import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function IndexPage() {

  return (
    <>
      <Hero />
      <About />
      <Icons />
      <Services />
      <Reviews />
      <Booking />
      <Footer />
    </>
  );
}