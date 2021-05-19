import React from "react";
import {
  ImageContainer,
  StyledLanding,
} from "../../components/Containers/Main";
import { images } from "../../utils/images";

export const LandingPage = () => {
  return (
    <StyledLanding GridType='repeat(3,1fr)'>
      {images.map((img, i) => {
        return <ImageContainer src={img} alt='image' height='100%' key={i} />;
      })}
    </StyledLanding>
  );
};
