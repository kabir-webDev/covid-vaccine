import React from "react";
import ScrollTop from "../../Shared/ScrollTop/ScrollTop";
import FAQ from "../Faq/FAQ";
import Footer from "../Footer/Footer";
import FooterCol from "../Footer/FooterCol";
import Header from "../Header/Header";
import OurValue from "../OurValue/OurValue";
import Process from "../Process/Process";
import Register from "../Registration/Register";
import Reviews from "../Review/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <main>
      <Header />
      <OurValue />
      <Process />
      <Register />
      <FAQ />
      <br />
      <br />
      <FooterCol />
      <Footer />
      <ScrollTop />
    </main>
  );
};

export default Home;
