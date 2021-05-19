import styled from "styled-components";
import React, { FC } from "react";
import { Paragraph } from "../../Elements";

type WrapperProps = {
  children: React.ReactNode;
  margin?: string;
  width?: string;
};

export const Box = styled.div``;

export const Wrapper = styled(Box)<WrapperProps>`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;

// app root container
export const MainContainer = styled(Box)`
  margin: 5rem auto;
  max-width: 1170px;
  margin: auto;
  position: relative;
`;
// search
export const SearchBarContainer = styled(Box)`
  display: flex;
  align-items: center;
  .search-input {
    transition: var(--mainTransition);
    font-size: 14px;
    border: 1px solid var(--nice-red);

    &:focus {
      border-bottom: 2px solid var(--nice-red);
      transform: scale(1.08);
    }
  }
  button {
    margin-left: 6px;
    padding: 4px 10px;
    border: none;
  }

  .fa-search {
    font-size: 20px;
    transition: var(--mainTransition);
    &:hover {
      color: var(--nice-red);
    }
  }
`;

type ImageContainerProps = {
  color?: String;
  height?: String;
};

export const ImageContainer = styled.img<ImageContainerProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "200px")};
  object-fit: cover;
  transition: var(--mainTransition) !important;
`;
type GridProps = {
  children?: React.ReactNode;
  margin?: string;
  gCols: string;
  space?: string;
  padding?: string;
};
export const GridContainer = styled(Box)<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.gCols};
  row-gap: 20px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
type FlexProps = {
  children?: React.ReactNode;
  margin?: string;
  space?: string;
  padding?: string;
  props?: any;
};
// reusable flex container
export const FlexContainer = styled(Box)<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.space};
  align-items: center;
  position: relative;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

// custom container
const ContainerBanner = styled(Box)`
  margin: 10rem auto;
  display: grid;

  .banner {
    margin: 5rem auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary);
    color: var(--mainWhite);
    padding: 2rem 1rem;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  .banner h1 {
    font-size: 2.5rem;
  }
  .banner div {
    width: 10rem;
    height: 5px;
    background-color: var(--nice-yellow);
    margin: 1.7rem auto;
  }
  .banner p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 576px) {
    .banner {
      padding: 2rem 3rem;
      width: 50%;
    }
    .banner h1 {
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 992px) {
    .banner {
      padding: 2rem 6rem;
      width: 50%;
    }
    .banner h1 {
      font-size: 4rem;
    }
  }
`;

type CustomContainerProps = {
  children?: React.ReactNode;
  title?: string | undefined;
  subtitle?: string | null;
};

export const CustomContainer: FC<CustomContainerProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <ContainerBanner>
      <Wrapper className='banner'>
        <Paragraph>{title}</Paragraph>
        <Paragraph>{subtitle}</Paragraph>
        <div />

        {children}
      </Wrapper>
    </ContainerBanner>
  );
};

type Props = {
  children?: React.ReactNode;
  GridType?: string;
};
export const StyledLanding = styled(Box)<Props>`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: ${(props) => props.GridType};
  place-items: center;
  background-color: rgba(136, 146, 158, 0.8);

  h2 {
    font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .underline {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: var(--nice-red);
    margin: 0.1rem auto;
  }
`;

type LandingProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  GridType?: string;
};

export const Landing: FC<LandingProps> = ({ title, subtitle, children }) => {
  return (
    <StyledLanding>
      <Wrapper className='landing'>
        <Paragraph>{title}</Paragraph>
        <div />
        <Paragraph>{subtitle}</Paragraph>
        {children}
      </Wrapper>
    </StyledLanding>
  );
};
export const AuthContainer = styled(Box)`
  width: 100%;
  margin: 10rem auto;
  padding: 20px;

  & .user__form,
  h2 {
    width: 80%;
    margin: auto;
  }
  .password {
    position: relative;
    & i {
      position: absolute;
      right: 10px;
      top: 30%;
      transition: var(--mainTransition);
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
  button {
    margin: 5px 0;
  }
  @media screen and (min-width: 780px) {
    .user__form,
    h2 {
      width: 50%;
    }
  }
`;
