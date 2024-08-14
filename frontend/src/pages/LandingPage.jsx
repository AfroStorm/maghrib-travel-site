import Hero from "../components/landing-page/hero-sections/Hero";
import About from "../components/landing-page/about-section/About";
import Service from "../components/landing-page/service-section/Service";
import Images from "../components/landing-page/image-section/ImageSlider";
import Testimonials from "../components/landing-page/testimonials-section/Testimonials";
import SecHero from "../components/landing-page/hero-sections/SecondHero";
import Form from "../components/landing-page/form-section/Form";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Images />
      <Testimonials />
      <SecHero />
      <Form />
    </>
  );
};
export default LandingPage;
