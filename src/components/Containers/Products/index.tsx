import React, { FC } from "react";
import styled from "styled-components";

const Box = styled("div")``;
export const StyledProducts = styled(Box)`
  margin: 50px auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  gap: 20px;
  place-content: center;
  background-color: #f8f8f8;
  padding: 30px 0;
`;

type ProductsProps = {
  children?: React.ReactNode;
};
export const ProductDashboard: FC<ProductsProps> = ({ children }) => {
  return <StyledProducts>{children}</StyledProducts>;
};

// modify Material UI Card
export const StyledProduct = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: var(--mainTransition);
  cursor: pointer;
  &&:hover {
    opacity: 0.85;
    box-shadow: var(--mainShadow);
  }
  .value {
    font-size: 14px;
  }

  @media (max-width: 700px) {
    .value: {
      font-size: 12px;
    }
  } ;
`;
// a product container
export const ProductContainer = styled(Box)`
  background: var(--secondary);
  cursor: pointer;
  box-shadow: var(--mainShadow);
  transition: var(--mainTransition);
  padding-bottom: 15px;

  .name-price {
    margin: 15px;
    display: flex;
    justify-content: space-between;
    & p {
      font-size: 18px;
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    opacity: 0.85;
  }
`;

export const ProductDetail = styled(Box)`
  width: 90%;
  margin: 10rem auto !important;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin-top: 20px;
  color: ${(props) => props.color};
  input {
    width: 45%;
  }
  .btn-container {
    width: 100%;
    margin: 20px auto;
    button {
      width: 45%;
    }
    button:first-child {
      margin-right: 15px;
    }
  }
  .product__top {
    margin-bottom: 10px;
  }
  .product__bottom {
    margin-bottom: 20px;
    strong {
      margin: 20px 0;
      font-size: 17px;
    }
  }
  img {
    margin-bottom: 20px;
    transition: var(--mainTransition);
  }
  img:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;
export const CategoryContainer = styled(Box)`
  margin-top: 10rem;
`;
