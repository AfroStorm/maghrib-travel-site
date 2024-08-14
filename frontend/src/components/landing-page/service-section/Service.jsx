import styled from "styled-components";
import { useServiceContext } from "../../../app-context/home-page-context/service-context/serviceContext";
import ServiceList from "./ServiceList";
import React from "react";
import { nanoid } from "nanoid";

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  width: 100vw;
  /* height: calc(100vh - 88px); */
  background: var(--gray-100);
  box-shadow: var(--shadow-100);
  height: auto;
  padding: 2rem 0;

  & .center-div {
    max-width: var(--max-width-md);
    width: var(--fluid-width-90);
    text-align: center;
    font-size: 0.9rem;
  }

  & .center-div h4 {
    margin-bottom: 2rem;
    font-family: "arabic-font";
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 992px) {
    height: calc(100vh - 88px);
    padding: 0;

    & .center-div {
      margin-bottom: 7rem;
    }
  }
`;

const Service = () => {
  const { serviceData } = useServiceContext();
  return (
    <StyledSection>
      <div className="center-div">
        {serviceData &&
          serviceData.map((data) => {
            const { section_title: sectionTitle, services } = data;
            return (
              <React.Fragment key={nanoid()}>
                <h4>{sectionTitle}</h4>
                <ServiceList services={services} />
              </React.Fragment>
            );
          })}
      </div>
    </StyledSection>
  );
};
export default Service;
