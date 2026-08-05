import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsCarousel from './components/BrandsCarousel';
import PromoBanner from './components/PromoBanner';
import Categories from './components/Categories';
import Brands from './components/Brands';
import Racing from './components/Racing';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <BrandsCarousel />
        <PromoBanner />
        <Categories />
        <Brands />
        <Racing />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
