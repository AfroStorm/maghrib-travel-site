import { ToastContainer } from "react-toastify";
import { useNavBarContext } from "./app-context/nav-bar-context/navBarContext";
import GlobalStyle from "./global-styles/globalStyles";

import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";

import HomePage from "./components/home-page-components/HomePage";
import AboutPage from "./components/about-page-components/AboutPage";
import BookNow from "./components/book-now-page-components/BookNow";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

function App() {
  const { currentPage, appPageRef } = useNavBarContext();
  return (
    <StyledDiv ref={appPageRef}>
      <ToastContainer position="top-center" />
      <GlobalStyle />
      <NavBar />

      <HomePage currentPage={currentPage} />
      <AboutPage currentPage={currentPage} />
      <BookNow currentPage={currentPage} />
      <Footer />
    </StyledDiv>

    // finish book now page title etc
  );
}

export default App;
