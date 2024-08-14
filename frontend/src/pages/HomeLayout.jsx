import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wrapper = styled.main`
  width: var(--view-width);
  margin: 0 auto;
`;

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};
export default HomeLayout;
