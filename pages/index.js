// pages/index.js
// import { createClient } from "next-sanity";
import Hero from '../src/heroImage'
import Services from '../src/services'
import Contact from "../src/contact"
import Icons from '../src/icon'
import About from '../src/about'
import Reviews from '../src/reviews'

// import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import "@fortawesome/fontawesome-svg-core/styles.css";

// const client = createClient({
//   projectId: 'o8oetywj',
//   dataset: 'production',
//   apiVersion: '2023-01-21',
//   useCdn: false
// })

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Services />
      <Icons />
      <About />
      <Reviews />
      <Contact />
    </>
  );
}

// export async function getStaticProps() {
//   const pets = await client.fetch(`*[_type == "pet"]`);
//   const posts = await client.fetch(`*[_type == "posts"]`);
//   const homePage = await client.fetch(`*[_type == "home"]`);
//   const cards = await client.fetch(`*[_type == "cards"]`);

//   return {
//     props: {
//       homePage,
//       cards
//     }
//   };
// }