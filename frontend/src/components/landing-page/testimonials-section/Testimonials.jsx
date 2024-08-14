import styled from "styled-components";
import { useTestimonialContext } from "../../../app-context/home-page-context/testimonial-context/testimonialContext";
import { nanoid } from "nanoid";
import React from "react";
import SingleTestimonial from "./SingleTestimonial";

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100%;
  padding: 3rem 0;
  background: var(--accent-2);

  & .center-div {
    width: var(--fluid-width-90);
    max-width: var(--max-width-xs);
    text-align: center;
  }

  & .testimonials {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  & .center-div h4 {
    margin-bottom: 2rem;
    font-family: "arabic-font";
    color: var(--primary);
  }

  @media screen and (min-width: 992px) {
    & .center-div {
      max-width: var(--max-width-md);
    }

    & .testimonials {
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;
      gap: 0;
      width: 100%;
    }
  }
`;

const Testimonials = () => {
  const { testimonialData } = useTestimonialContext();

  return (
    <StyledSection>
      <div className="center-div">
        {testimonialData &&
          testimonialData.map((data) => {
            const { section_title: sectionTitle, testimonials } = data;

            return (
              <React.Fragment key={nanoid()}>
                <h4>{sectionTitle}</h4>

                <ul className="testimonials">
                  {testimonials.map((testimonial) => {
                    return (
                      <SingleTestimonial key={nanoid()} {...testimonial} />
                    );
                  })}
                </ul>
              </React.Fragment>
            );
          })}
      </div>
    </StyledSection>
  );
};
export default Testimonials;
