import styled from "styled-components";
import { useHeroContext } from "../../../app-context/home-page-context/hero-context/heroContext";
import { useSecHeroContext } from "../../../app-context/home-page-context/second-hero-context/secHeroContext";
import { nanoid } from "nanoid";

const StyledDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  max-width: var(--max-width-lg);
  color: var(--gray-100);

  & h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1.25;
    font-family: "arabic-font";
  }

  & p {
    line-height: 1.5;
    font-weight: 700;
    font-size: clamp(1rem, 1vw, 1.2rem);
  }

  @media screen and (min-width: 992px) {
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);

    & h1 {
      white-space: nowrap;
    }
  }
`;

const CatchPhrase = ({ context }) => {
  let heroData;

  // first hero catchphrase
  if (context === "secHeroContext") {
    const { secHeroData } = useSecHeroContext();
    heroData = secHeroData;
  }
  // second hero catchphrase
  else if (context === "heroContext") {
    const { heroData: data } = useHeroContext();
    heroData = data;
  }
  return (
    <>
      {heroData &&
        heroData.map((data) => {
          const { title, sub_title: subTitle } = data;
          return (
            <StyledDiv key={nanoid()} className="catch-phrase">
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </StyledDiv>
          );
        })}
    </>
  );
};
export default CatchPhrase;
