import Header from "./components/common/Header";
import Hero from "./components/common/Hero";
import PopularDishes from "./components/common/PopularDishes";
import Specialoffer from "./components/common/Specialoffer";
import About from "./components/common/About";
import Gallery from "./components/common/Gallery";
import Testimonials from "./components/common/Testimonials";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Contact from "./components/common/Contact";
import TableBooking from "./components/common/TableBooking";
import GoogleMap from "./components/common/GoogleMap";
import WhatsAppButton from "./components/common/WhatsAppButton";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <PopularDishes />
      <Specialoffer />
      <About/>
      <Gallery />
      <Testimonials/>
      <Menu/>
      <Contact/>
      <TableBooking/>
       <GoogleMap/>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
}

export default App;