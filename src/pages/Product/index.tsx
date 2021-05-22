import React, { FC } from "react";
import { addToCart } from "../../store/actions/cart";
import {
  ProductContainer,
  ImageContainer,
  Paragraph,
  Button,
  Wrapper,
  StyledLink,
} from "../../components";
import { ICart, IProduct } from "../types";
import { useDispatch } from "react-redux";

type ProductProps = {
  product: IProduct;
};
export const Product: FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: ICart) => {
    dispatch(addToCart(item));
  };
  return (
    <ProductContainer>
      <ImageContainer src={product.get_image} alt='product image' />
      <Wrapper margin='10px auto' width='90%'>
        <Wrapper className='name-price'>
          <Paragraph>{product.name}</Paragraph>
          <Paragraph>€{product.price}</Paragraph>
        </Wrapper>
        <Wrapper className='buttons'>
          <StyledLink to={`product${product.get_absolute_url}`}>
            <Button width='10%' bg='var(--nice-yellow)'>
              view item
            </Button>
          </StyledLink>

          <Button
            width='10%'
            bg='var(--nice-yellow)'
            onClick={() => handleAddToCart(product)}
          >
            Add to cart
          </Button>
        </Wrapper>
      </Wrapper>
    </ProductContainer>
  );
};
