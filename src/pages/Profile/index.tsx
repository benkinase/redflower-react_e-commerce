import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  CustomContainer,
  Divider,
  StyledNavLink,
  Wrapper,
} from "../../components";
import { logoutUser, fetchOrders } from "../../store/actions";
import { Order } from "./Order";

export const Profile = () => {
  const { orders, loading, error } = useSelector((state: any) => state.order);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  React.useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  function getOrderLength(orders: any) {
    return orders?.items?.reduce((acc: any, curVal: any) => {
      return (acc += curVal.quantity);
    }, 0);
  }
  if (loading) {
    return <CustomContainer title={loading} />;
  }
  if (error) {
    return (
      <CustomContainer title={error}>
        <StyledNavLink to='/' bg='var(--nice-red)' padding='20px'>
          back home
        </StyledNavLink>
      </CustomContainer>
    );
  }
  if (orders?.length < 1) {
    return <CustomContainer title='No orders found!' />;
  }
  return (
    <ProfileContainer>
      <Wrapper className='profile'>
        <Wrapper className='profile-header'>
          <Wrapper>
            <h2 className='title'>My account</h2>
          </Wrapper>

          <Wrapper className='profile-logout'>
            <Button
              bg='var(--nice-red)'
              color='var(--primary)'
              uppercase='uppercase'
              bold='bold'
              onClick={() => handleSignOut()}
            >
              Log out
            </Button>
          </Wrapper>
        </Wrapper>
        <Divider />

        <Wrapper className='profile-orders'>
          <h3 className='subtitle'>My orders{getOrderLength(orders)}</h3>
          <Divider />
          {orders?.map((order: any) => {
            return <Order order={order} key={order.id} />;
          })}
        </Wrapper>
      </Wrapper>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 90%;
  margin: 10rem auto;
  .profile-header {
    display: flex;
    justify-content: space-between;
  }
`;
