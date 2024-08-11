import styled from "styled-components";
import { useNavBarContext } from "../../app-context/nav-bar-context/navBarContext";
import { nanoid } from "nanoid";
import IconComponent from "../reusable/IconComponent";

const StyledDiv = styled.div`
  height: ${({ $linksHeight, $showMenu }) =>
    $showMenu ? `${$linksHeight}px` : "0"};
  overflow: hidden;
  transition: var(--transition-quick);

  & .link button {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: var(--primary);
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1px;
    padding: 0.5rem;
    width: 100%;
    background: transparent;
    border-color: transparent;
    transition: var(--transition-quick);
  }

  & .link button:hover {
    background: var(--secondary);
    padding-left: 1rem;
  }

  @media screen and (min-width: 992px) {
    height: auto;

    & .links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
    }

    & .link button {
      padding: 0;
      margin: 0.2rem 0.2rem;
    }

    & .link button:hover {
      background: transparent;
      padding-left: 0;
      color: var(--red-700);
    }

    & .link svg {
      display: none;
    }
  }
`;

const Links = () => {
  const {
    navLinks,
    linksRef,
    linksHeight,
    showMenu,
    handleMobileMenu,
    handleCurrentPage,
  } = useNavBarContext();

  return (
    <StyledDiv $linksHeight={linksHeight} $showMenu={showMenu}>
      <ul className="links" ref={linksRef}>
        {navLinks &&
          navLinks.map((link) => {
            const { icon, name, url } = link;

            return (
              <li key={nanoid()} className="link">
                <button
                  onClick={() => {
                    handleMobileMenu();
                    handleCurrentPage(url);
                  }}
                >
                  <IconComponent iconName={icon} /> {name}
                </button>
              </li>
            );
          })}
      </ul>
    </StyledDiv>
  );
};
export default Links;
