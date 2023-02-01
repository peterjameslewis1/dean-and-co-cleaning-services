// pages/index.js
import { createClient } from "next-sanity";
import Hero from "../components/heroImage";
import Services from '../components/services'
import Contact from "../components/contact";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

const client = createClient({
  projectId: 'o8oetywj',
  dataset: 'production',
  apiVersion: '2023-01-21',
  useCdn: false
})

export default function IndexPage({ homePage }) {
  return (
    <>
      <Hero
        title={homePage[0].title}
        subtitle={homePage[0].subtitle}
        client={client}
        imageUrl={homePage[0].image.asset._ref}
      />
      <Services />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);
  const posts = await client.fetch(`*[_type == "posts"]`);
  const homePage = await client.fetch(`*[_type == "home"]`);
  const cards = await client.fetch(`*[_type == "cards"]`);

  return {
    props: {
      homePage,
      cards
    }
  };
}