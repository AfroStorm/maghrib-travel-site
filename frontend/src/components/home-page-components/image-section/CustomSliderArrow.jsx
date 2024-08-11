import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
