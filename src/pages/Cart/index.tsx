import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import {
  CartContainer,
  Paragraph,
  Wrapper,
  Button,
  StyledNavLink,
  Divider,
} from "../../components";
import {
  cartTotalLength,
  cartTotalPrice,
  clearCart,
} from "../../store/actions";
import { ICart } from "../../types";

export const Cart = () => {
  const { cartItems } = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <CartContainer>
      <Wrapper>
        <Wrapper>
          <h2 className='title'>Cart</h2>
        </Wrapper>

        <Wrapper className='table__container'>
          <table className='table'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cartItems?.map((item: ICart) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </tbody>
          </table>
          {cartTotalLength(cartItems) < 1 && (
            <Paragraph color='var(--nice-red)'>
              You have no active products
            </Paragraph>
          )}
        </Wrapper>
        <Divider />
        <Wrapper className='summary'>
          <h3 className='subtitle'>Summary</h3>
          <Paragraph>
            <strong>Items: </strong> {cartItems?.length}
          </Paragraph>
          <Paragraph>
            <strong>Price: </strong> €{cartTotalPrice(cartItems)?.toFixed(2)}
          </Paragraph>

          <Divider />

          {cartItems?.length > 0 && (
            <Wrapper className='cart__buttons__container'>
              <Button
                uppercase='uppercase'
                bg='var(--nice-yellow)'
                width='50%'
                onClick={handleClearCart}
              >
                clear cart
              </Button>
              <StyledNavLink to='/cart/checkout'>
                <Button
                  uppercase='uppercase'
                  width='50%'
                  bg='var(--nice-yellow)'
                >
                  proceed to checkout
                </Button>
              </StyledNavLink>
            </Wrapper>
          )}
        </Wrapper>
      </Wrapper>
    </CartContainer>
  );
};
