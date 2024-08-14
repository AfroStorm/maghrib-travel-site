import styled from "styled-components";
import { useAboutContext } from "../../../app-context/home-page-context/about-context/aboutContext";
import { nanoid } from "nanoid";
import React from "react";
import { useNavBarContext } from "../../../app-context/nav-bar-context/navBarContext";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../../customHooks";

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  height: 30rem;
  background: var(--accent-2);
  width: 100vw;

  & .center-div {
    max-width: var(--max-width-sm);
    width: var(--fluid-width-90);
    text-align: center;
    font-size: 0.9rem;
  }

  & .center-div h4 {
    margin-bottom: 2rem;
    font-family: "arabic-font";
    color: var(--primary);
  }
  & .center-div p {
    line-height: 2;
    /* color: var(--primary); */
  }

  .link {
    display: inline-block;
    background: transparent;
    text-transform: capitalize;
    color: var(--primary);
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    border: 2px solid var(--primary);
    transition: var(--transition-quick);
  }

  .link:hover {
    background: var(--primary);
    color: var(--accent-2);
  }

  @media screen and (min-width: 992px) {
    text-align: center;
    height: 25rem;

    .link {
      padding: 0.7rem 0.7rem;
    }
  }
`;

const About = () => {
  const { aboutData } = useAboutContext();
  useScrollToTop();

  return (
    <StyledSection>
      <div className="center-div">
        {aboutData &&
          aboutData.map((data) => {
            const { section_title: sectionTitle, description } = data;

            return (
              <React.Fragment key={nanoid()}>
                <h4>{sectionTitle}</h4>
                <p>{description}</p>
              </React.Fragment>
            );
          })}
        <Link to={"/about"} className={"link"}>
          read more
        </Link>
      </div>
    </StyledSection>
  );
};
export default About;
