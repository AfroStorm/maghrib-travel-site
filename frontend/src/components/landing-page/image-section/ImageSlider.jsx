import styled from "styled-components";
import { useImageSliderContext } from "../../../app-context/home-page-context/image-slider-context/imageSliderContext";
import { nanoid } from "nanoid";
import SingleSlide from "./SingleSlide";
import SimpleSlider from "../../reusable/SimpleSlider";

const StyledSection = styled.section`
  position: relative;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: var(--gray-100);
  overflow: hidden;
`;

const ImageSlider = () => {
  const { images } = useImageSliderContext();
  return (
    <StyledSection>
      <SimpleSlider arrows={true}>
        {images &&
          images.map((image) => {
            return <SingleSlide key={nanoid()} image={image} />;
          })}
      </SimpleSlider>
    </StyledSection>
  );
};
export default ImageSlider;
