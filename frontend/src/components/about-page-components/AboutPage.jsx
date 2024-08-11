import styled from "styled-components";
import { useAboutPageContext } from "../../app-context/about-page-context/AboutPageContext";
import React from "react";
import { nanoid } from "nanoid";
import bedouinGuides from "../../assets/images/bedouin-guides.jpg";
import SimpleSlider from "../reusable/SimpleSlider";

const StyledMain = styled.main`
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  transition: var(--transition-quick);
  margin-top: 92px;
  /* display: flex;
  flex-direction: column; */

  ${({ $currentPage }) =>
    $currentPage === "/about" &&
    `
      position: static;
      opacity: 1;
      visibility: visible;
      z-index:1;`}

  & .headline {
    width: 100%;
    height: 10rem;
    background: var(--accent-2);
    display: grid;
    place-items: center;
  }

  & h1 {
    font-size: clamp(2rem, 5vw, 2.3rem);
    font-family: "arabic-font";
  }

  & img {
    height: auto !important; // slider wont react to size changes without forcing it
    object-fit: contain;
  }

  & .center-div {
    max-width: var(--max-width-sm);
    width: var(--fluid-width-90);
    text-align: center;
    font-size: 0.9rem;
    margin: 3rem auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & p {
    line-height: 2;
    color: var(--text-2);
  }

  @media screen and (min-width: 768px) {
    & .headline {
      height: 15rem;
    }

    & img {
      height: auto !important; // slider wont react to size changes without forcing it
      object-fit: cover;
    }
  }
`;

const AboutPage = ({ currentPage }) => {
  const { aboutPageData } = useAboutPageContext();

  return (
    <StyledMain $currentPage={currentPage}>
      {aboutPageData &&
        aboutPageData.map((data) => {
          const { page_title: pageTitle, description } = data;
          return (
            <React.Fragment key={nanoid()}>
              <div className="headline">
                <h1>{pageTitle}</h1>
              </div>

              <SimpleSlider arrows={false}>
                <img src={bedouinGuides} alt="bedouin-guides" />
              </SimpleSlider>

              <div className="center-div">
                <p>{description.slice(0, 436)}</p>
                <p>{description.slice(437, 770)}</p>
              </div>
            </React.Fragment>
          );
        })}
    </StyledMain>
  );
};
export default AboutPage;
