import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ExcellenceSection from '../components/ExcellenceSection';
import IndustriesServed from '../components/IndustriesServed';
import OurClients from '../components/OurClients';

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ExcellenceSection />
      <IndustriesServed />
      <OurClients />
      <ContactSection />
    </>
  );
};

export default Home;
