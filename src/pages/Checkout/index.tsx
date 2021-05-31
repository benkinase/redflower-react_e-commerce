import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Wrapper,
  Input,
  Button,
  CheckoutContainer,
  ShippingContainer,
} from "../../components";
import { getItemTotal, cartTotalPrice, clearCart } from "../../store/actions";
import { ICart, CheckoutItem, CheckoutProps } from "../../types";
import { StripePayment } from "./Payment";
import { axiosAPI, checkoutUser, payTypes } from "../../utils";
import { useHistory } from "react-router-dom";
import { AxiosResponse } from "axios";

export const Checkout = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const { token } = useSelector((state: any) => state.auth);
  // checkout user
  const [state, setState] = React.useState<CheckoutProps>({
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    address: "",
    zipcode: "",
    city: "",
  });

  // Payment methods
  const [payType, setPayType] = React.useState(payTypes[0].type);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState({ ...state, [name]: value });
    console.log(state);
  };

  const handlePayment = async (token: any) => {
    const items: CheckoutItem[] = [];
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const itemObj = {
        product: item.id,
        quantity: item.count,
        price: item.price * item.count,
      };
      items.push(itemObj);
    }

    const data = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      address: state.address,
      zipcode: state.zipcode,
      city: state.city,
      phone: state.phone,
      items: items,
      stripe_token: token.id,
    };
    console.log("checkout", data);
    const res: AxiosResponse<any> = await axiosAPI.post(`/api/checkout/`, data);
    if (res.status === 201) {
      console.log(res);
      dispatch(clearCart());
      history.push("/success");
    }
    // reset checkout user state
    setState(state);
  };

  return (
    <CheckoutContainer>
      <Wrapper className='checkout-header'>
        <h3 className='title'>Checkout</h3>
      </Wrapper>

      <Wrapper className='checkout-table-head'>
        <table className='table'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody className='checkout-table-body'>
            {cartItems.map((item: ICart) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{getItemTotal(item)}</td>
              </tr>
            ))}
          </tbody>

          <tfoot className='checkout-table-foot'>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>{cartItems.length}</td>
              <td>€{cartTotalPrice(cartItems)}</td>
            </tr>
          </tfoot>
        </table>
      </Wrapper>
      <ShippingContainer>
        <h2 className='subtitle'>Shipping details</h2>
        <Wrapper className='shipping'>
          <Wrapper className='left'>
            {checkoutUser.map((userInfo) => {
              return (
                <Wrapper className='control' key={userInfo.id}>
                  <Input
                    type='text'
                    name={userInfo.name}
                    className='input'
                    required
                    placeholder={userInfo.placeholder}
                    onChange={handleChange}
                  />
                </Wrapper>
              );
            })}
          </Wrapper>

          <Wrapper className='checkout-shiping-foot'>
            <span>Payment Method</span>
            <select
              value={payType}
              onChange={(e: any) => setPayType(e.target.value)}
            >
              {payTypes.map((p) => {
                return (
                  <option key={p.id} value={p.type}>
                    {p.type}
                  </option>
                );
              })}
            </select>
            {payType === "Stripe" && (
              <StripePayment handlePayment={handlePayment} token={token} />
            )}
            {payType === "Paypal" && (
              <Button
                width='100%'
                uppercase='uppercase'
                bg='var(--nice-yellow)'
                type='submit'
              >
                pay with paypal
              </Button>
            )}
          </Wrapper>
        </Wrapper>
      </ShippingContainer>
    </CheckoutContainer>
  );
};
