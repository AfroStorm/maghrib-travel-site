import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import {
  NextArrow,
  PrevArrow,
} from "../home-page-components/image-section/CustomSliderArrow";

const StyledDiv = styled.div`
  position: relative;
  width: 100vw;

  & .slick-slide img {
    width: 100%;
    height: 100%;
    max-height: 80vh;
  }

  & .custom-arrow {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
  }

  & .custom-arrow-next {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  & .custom-arrow-prev {
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 992px) {
    & .custom-arrow {
      width: 4rem;
      height: 4rem;
    }

    & .custom-arrow-next {
      right: 10rem;
    }

    & .custom-arrow-prev {
      left: 10rem;
    }
  }
`;

const SimpleSlider = ({ children, arrows }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: arrows,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <StyledDiv className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </StyledDiv>
  );
};

export default SimpleSlider;
