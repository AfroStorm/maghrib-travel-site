import styled from "styled-components";
import desertImg from "../../../assets/images/desert.jpg";
import CatchPhrase from "./CatchPhrase";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../../customHooks";

const StyledParent = styled.div`
  position: relative;
  .link {
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

  .link:hover {
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
    height: 80vh;
    width: 100vw;
    filter: brightness(80%) grayscale(30%) contrast(80%);
  }

  @media screen and (min-width: 992px) {
    .link {
      padding: 0.7rem 0.7rem;
      top: 50%;
    }
  }
`;

const Hero = () => {
  useScrollToTop();
  return (
    <StyledParent>
      <div className="bg-img"></div>
      <CatchPhrase context={"heroContext"} />
      <Link to={"/book-now"} className="link">
        let's go
      </Link>
    </StyledParent>
  );
};
export default Hero;
