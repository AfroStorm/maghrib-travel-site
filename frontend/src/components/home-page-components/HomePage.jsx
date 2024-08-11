import styled from "styled-components";

import About from "./about-section/About";
import Service from "./service-section/Service";
import ImageSlider from "./image-section/ImageSlider";
import Testimonials from "./testimonials-section/Testimonials";
import Hero from "./hero-sections/Hero";
import SecondHero from "./hero-sections/SecondHero";
import Form from "./form-section/Form";

const StyledMain = styled.main`
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  /* margin-top do it dynamically through navbar ref*/
  margin-top: 92px;

  transition: var(--transition-quick);
  ${({ $currentPage }) =>
    $currentPage === "/home" &&
    `
      position: static;
      opacity: 1;
      visibility: visible; 
      z-index:1;`}
`;

const HomePage = ({ currentPage }) => {
  return (
    <StyledMain $currentPage={currentPage}>
      <Hero />
      <About />
      <Service />
      <ImageSlider />
      <Testimonials />
      <SecondHero />
      <Form />
    </StyledMain>
  );
};
export default HomePage;
