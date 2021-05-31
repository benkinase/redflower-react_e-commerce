import React, { FC } from "react";
import { ICart } from "../../types";
import { useDispatch } from "react-redux";
import { StyledNavLink, CartItemContainer } from "../../components";

import {
  removeCartItem,
  decreaseCartItem,
  addToCart,
  getItemTotal,
  //multipQtyChange,
} from "../../store/actions";
type CartItemProps = {
  item: ICart;
};

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleItemRemoval = (id: number) => {
    dispatch(removeCartItem(id));
  };
  const handleItemReduce = (id: number) => {
    dispatch(decreaseCartItem(id));
  };
  const handleItemIncrease = (item: ICart) => {
    dispatch(addToCart(item));
  };
  // const handleMultipleItemChange = (item: ICart) => {
  //   let quantity = 2;
  //   dispatch(multipQtyChange(item));
  // };

  return (
    <CartItemContainer>
      <td>
        <StyledNavLink to={`product${item.get_absolute_url}`}>
          <span className='item-name'>{item.name}</span>
        </StyledNavLink>
      </td>
      <td>€{item.price}</td>
      <td className='quantity'>
        <button onClick={() => handleItemReduce(item.id)}>
          <i className='fas fa-minus'></i>
        </button>
        <span className='item-count'> {item.count}</span>
        <button onClick={() => handleItemIncrease(item)}>
          <i className='fas fa-plus'></i>
        </button>
      </td>
      <td>€{getItemTotal(item)}</td>
      <td>
        <button
          className='item-delete-btn'
          onClick={() => handleItemRemoval(item.id)}
        >
          <i className='fas fa-times'></i>
        </button>
      </td>
    </CartItemContainer>
  );
};
