import styled from "styled-components";
import desertImg from "../../../assets/images/desert.jpg";
import CatchPhrase from "./CatchPhrase";
import { useNavBarContext } from "../../../app-context/nav-bar-context/navBarContext";

const StyledParent = styled.div`
  position: relative;
  & button {
    position: absolute;
    background: transparent;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    text-transform: capitalize;
    color: var(--gray-100);
    margin-top: 2rem;
    padding: 1rem 1.5rem;
    border: 2px solid var(--gray-100);
    transition: var(--transition-quick);
  }

  & button:hover {
    background: var(--gray-100);
    color: var(--text-1);
  }

  & .bg-img {
    background-image: url(${desertImg});
    background-clip: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: scroll;
    height: 70vh;
    width: 100vw;
    filter: brightness(70%) grayscale(30%) contrast(80%);
  }

  @media screen and (min-width: 992px) {
    & button {
      padding: 0.7rem 0.7rem;
      top: 50%;
    }
  }
`;

const Hero = () => {
  const { handleCurrentPage } = useNavBarContext();
  return (
    <StyledParent>
      <div className="bg-img"></div>
      <CatchPhrase context={"heroContext"} />
      <button onClick={() => handleCurrentPage("/book-now")}>let's go</button>
    </StyledParent>
  );
};
export default Hero;
