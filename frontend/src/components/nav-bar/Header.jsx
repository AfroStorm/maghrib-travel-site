import styled from "styled-components";
import IconComponent from "../reusable/IconComponent";
import { IoMenu } from "react-icons/io5";
import { nanoid } from "nanoid";
import { useNavBarContext } from "../../app-context/nav-bar-context/navBarContext";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;

  & .brand-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding-left: 0.5rem;
  }

  & .brand-name {
    color: var(--primary);
    letter-spacing: 1px;
    font-weight: 700;
    font-family: "arabic-font";
    font-size: 1.2rem;
  }

  & .hamburger-menu {
    border-color: transparent;
    background: transparent;
    display: grid;
    place-items: center;
    font-size: 2.5rem;
    color: var(--primary);
    padding-right: 0.5rem;
  }

  & .hamburger-menu svg {
    transition: var(--transition-quick);
  }

  & .hamburger-menu svg:hover {
    transform: rotate(90deg);
  }

  @media screen and (min-width: 992px) {
    padding: 2rem 0;

    & .hamburger-menu {
      display: none;
    }
  }
`;

const Header = () => {
  const { brandData, handleMobileMenu } = useNavBarContext();
  return (
    <StyledDiv>
      {brandData &&
        brandData.map((item) => {
          const { name, image } = item;
          return (
            <div key={nanoid()} className="brand-container">
              <h4 className="brand-name">{name}</h4>
              <IconComponent iconName={image} />
            </div>
          );
        })}

      <button
        type="button"
        className="hamburger-menu"
        onClick={handleMobileMenu}
      >
        <IoMenu />
      </button>
    </StyledDiv>
  );
};
export default Header;
