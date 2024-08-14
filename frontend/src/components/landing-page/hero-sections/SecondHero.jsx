import styled from "styled-components";
import secondHero from "../../../assets/images/second-hero.jpg";
import CatchPhrase from "./CatchPhrase";

const StyledParent = styled.section`
  position: relative;
  height: 65vh;
  width: 100vw;

  & .bg-img {
    background-image: url(${secondHero});
    background-clip: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    height: 100%;
    width: 100%;
    filter: brightness(80%) grayscale(30%) contrast(80%);
  }
`;

const Hero = () => {
  return (
    <StyledParent>
      <div className="bg-img"></div>
      <CatchPhrase context={"secHeroContext"} />
    </StyledParent>
  );
};
export default Hero;
