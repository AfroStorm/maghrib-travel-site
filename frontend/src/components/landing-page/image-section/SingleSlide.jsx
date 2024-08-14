import styled from "styled-components";

const StyledDiv = styled.div`
  & img {
    height: auto !important; // slider wont react to size changes without forcing it
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    & img {
      height: auto !important; // slider wont react to size changes without forcing it
      object-fit: cover;
    }
  }
`;

const SingleSlide = ({ image }) => {
  return (
    <StyledDiv>
      <img src={image} alt={"image"} />
    </StyledDiv>
  );
};
export default SingleSlide;
