import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import IndustriesServed from '../components/IndustriesServed';
import OurClients from '../components/OurClients';
import OurProducts from '../components/OurProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <OurProducts />
      <IndustriesServed />
      <OurClients />
      <ContactSection />
    </>
  );
};

export default Home;
