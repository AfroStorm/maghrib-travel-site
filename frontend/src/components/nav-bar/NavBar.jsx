import styled from "styled-components";
import Header from "./Header";
import Links from "./Links";
import SocialLinks from "./SocialLinks";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background: var(--gray-100);

  & .center-div {
    max-width: var(--max-width-md);
  }

  @media screen and (min-width: 992px) {
    & .center-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledDiv>
      <div className="center-div">
        <Header />
        <Links />
        <SocialLinks />
      </div>
    </StyledDiv>
  );
};
export default NavBar;
