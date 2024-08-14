import styled from "styled-components";
import IconComponent from "../../reusable/IconComponent";

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & h5 {
    letter-spacing: 1px;
    font-weight: 700;
    margin-top: 2rem;
  }

  & p {
    line-height: 2;
    color: var(--text-1);
  }

  @media screen and (min-width: 992px) {
    width: 30%;
  }
`;

const SingleService = ({ icon, title, description }) => {
  return (
    <StyledLi>
      <IconComponent iconName={icon} fontSize={"3rem"} />
      <h5>{title}</h5>
      <p>{description}</p>
    </StyledLi>
  );
};
export default SingleService;
