import React, { FC } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cart";
import {
  ProductContainer,
  ImageContainer,
  Paragraph,
  Button,
  Wrapper,
  StyledLink,
} from "../../components";
import { ICart, IProduct, CartState } from "../../types";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";

type ProductProps = {
  product: IProduct;
};
export const Product: FC<ProductProps> = ({ product }) => {
  const { cartItems }: CartState = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const handleAddToCart = (item: ICart) => {
    dispatch(addToCart(item));
  };

  const inCart = (product: IProduct) => {
    return cartItems.some((item) => item.id === product.id);
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
            {inCart(product) ? "Item in cart" : "Add to cart"}
          </Button>
        </Wrapper>
      </Wrapper>
    </ProductContainer>
  );
};
