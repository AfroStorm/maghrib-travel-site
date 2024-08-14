import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useScrollToTop } from "../customHooks";

const StyledNav = styled.nav`
  width: 100vw;
  background: var(--gray-100);
  padding: 2rem 0;
  box-shadow: var(--shadow-300);

  .center-div {
    max-width: var(--max-width-md);
    width: var(--fluid-width-80);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .brand-name {
    color: var(--primary);
    font-weight: 700;
    font-family: "arabic-font";
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }

  .link {
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 2px;
    color: var(--secondary-dark);
    font-size: 1.2rem; /* Adjusted size for paragraphs */
    transition: var(--transition-quick);
  }

  .link:hover {
    color: var(--primary);
  }

  .active {
    color: var(--primary);
  }

  @media screen and (min-width: 768px) {
    .center-div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

const Navbar = () => {
  useScrollToTop();
  return (
    <StyledNav>
      <div className="center-div">
        <h2 className="brand-name">halal haven</h2>
        <div className="links-container">
          <ul className="links">
            <li className={"link"}>
              <NavLink to={"landing"}>Home</NavLink>
            </li>
            <li className={"link"}>
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li className={"link"}>
              <NavLink to={"book-now"}>Book Now</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};
export default Navbar;
