import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeOrder, getOrderItemTotal } from "../../store/actions";
import { Wrapper, Paragraph } from "../../components";
import { IOrder, OrderItem } from "../../types";

type OrderProps = {
  order: IOrder;
};
export const Order = ({ order }: OrderProps) => {
  const dispatch = useDispatch();

  const handleOrderRemoval = (id: number) => {
    dispatch(removeOrder(id));
  };

  return (
    <OrderContainer>
      <div className='single__order'>
        <Wrapper className='single__order__header'>
          <Wrapper>
            <h5 className='id'>
              <strong>Order: </strong> #{order.id}
            </h5>
            <Paragraph className='amount'>
              <strong>Amount: </strong>€{order.paid_amount}
            </Paragraph>
          </Wrapper>
          <Wrapper>
            <Paragraph className='date'>
              <strong>Date: </strong>
              {order.created_at.substring(0, 10)}
            </Paragraph>
            <button onClick={() => handleOrderRemoval(order.id)}>Remove</button>
          </Wrapper>
        </Wrapper>
        <table className='table'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {order?.items?.map((item: OrderItem) => (
              <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>€{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>€{getOrderItemTotal(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </OrderContainer>
  );
};
const OrderContainer = styled.div`
  width: 100%;
  //box-shadow: var(--lightShadow);
  box-shadow: 2px 2px 2px 2px rgba(234, 220, 212, 1);
  padding: 5px;
  margin-bottom: 10px;

  .single__order__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
