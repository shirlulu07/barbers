import React from 'react';
import AboutUs from './component/AboutUs';
import Header from './component/Header';
import Services from './component/Services';
import Testimonial from './component/Testimonial';
import Team from './component/Team';
import Beard from './component/Beard';
import Contact from './component/Contact';
import Map from './component/Map';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Testimonial />
      <Team />
      <Beard />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App