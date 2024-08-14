import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  text-align: center;

  & p {
    line-height: 2;
    color: var(--text-1);
    font-family: "Pacifico", cursive;
  }

  & h5 {
    letter-spacing: 1px;
    font-weight: 700;
    /* color: var(--primary); */
  }

  @media screen and (min-width: 992px) {
    justify-content: space-between;
    width: 30%;
  }
`;

const SingleTestimonial = ({ description, user_name: userName }) => {
  return (
    <StyledLi>
      <p>{description}</p>
      <h5>{userName}</h5>
    </StyledLi>
  );
};
export default SingleTestimonial;
