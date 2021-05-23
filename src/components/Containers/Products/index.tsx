import React, { FC } from "react";
import styled from "styled-components";

export const Box = styled("div")``;

export const StyledProducts = styled(Box)`
  margin: 50px auto;
  grid-template-rows: auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  background-color: #f8f8f8;
  padding: 30px;
`;

type ProductsProps = {
  children?: React.ReactNode;
};
export const ProductDashboard: FC<ProductsProps> = ({ children }) => {
  return <StyledProducts>{children}</StyledProducts>;
};

// a product container
export const ProductContainer = styled(Box)`
  background-color: var(--secondary);
  box-shadow: var(--mainShadow);
  transition: var(--mainTransition);

  padding-bottom: 15px;
  cursor: pointer;
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
.product__detail__page{
  width: 90%;
  margin: 10rem auto;
  display: flex;
  flex-direction:column;
  color: ${(props) => props.color};
}

  .product__top {
    margin-bottom: 30px;
  }
  .product__bottom {
    display: flex;
    flex-direction: column;
    .subtitle {
      padding-bottom: 10px;
      font-weight:bold;
    }
    strong {
      margin: 20px 0;
      font-size: 17px;
    }
  }
 img {
    padding-bottom: 40px;
    transition: var(--mainTransition);
  }
  .product__select {
    margin: 10px 0;
    .control {
      display: flex;
      width: 100%;
      & select {
        margin-left: 0px;
        width: 50%;
        background-color: var(--secondary);
        border-radius: 5px;

        &:focus {
          outline: none;
          border: 1px solid var(--nice-red);
        }
      }
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px auto;
    button {
      width: 100%;
      margin-bottom: 10px;
      background-color:var(--nice-red);
      color:var(--secondary);
    }
  }

  img:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 750px) {
    .product__detail__page{
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    gap: 40px;
    }
    .product__bottom {
    width: 80%;
  }
`;
// products search/category
export const ProductsResult = styled(Box)`
  width: 90%;
  margin: 10rem auto;
`;

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
