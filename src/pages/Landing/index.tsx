import React from "react";
import { StyledLanding, Wrapper } from "../../components/Containers/Main";

export const LandingPage = () => {
  return (
    <StyledLanding>
      <Wrapper className='landing__page'>
        <h3>
          welcome <span>|</span> redflower
        </h3>
      </Wrapper>
    </StyledLanding>
  );
};
