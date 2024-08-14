import styled from "styled-components";
import { nanoid } from "nanoid";
import SingleService from "./SingleService";

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: 992px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }
`;

const ServiceList = ({ services }) => {
  return (
    <StyledUl>
      {services.map((service) => {
        return <SingleService key={nanoid()} {...service} />;
      })}
    </StyledUl>
  );
};
export default ServiceList;
