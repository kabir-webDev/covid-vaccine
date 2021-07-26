import React from "react";
import ScrollTop from "../../Shared/ScrollTop/ScrollTop";
import FAQ from "../Faq/FAQ";
// import About from "../About/About";
// import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import FooterCol from "../Footer/FooterCol";
import Header from "../Header/Header";
import OurValue from "../OurValue/OurValue";
import Register from "../Registration/Register";
// import Pricing from "../Pricing/Pricing";
import Reviews from "../Review/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <main>
      <Header />
      {/* <About /> */}
      {/* <Services /> */}
      <OurValue />
      {/* <Pricing/> */}
      <Reviews />
      <Register />
      <FAQ />
      <br />
      <br />
      {/* <Contact/> */}
      <FooterCol />
      <Footer />
      <ScrollTop />
    </main>
  );
};

export default Home;
