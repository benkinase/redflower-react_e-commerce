import React from "react";
import { Link } from "react-router-dom";
//import { RouteComponentProps } from 'react-router-dom';
//import { Hero } from "../../components/UI/Hero";
import { Paragraph, Span, Wrapper, CartContainer } from "../../components";
import { ROUTES } from "../../routeConfig";

export const NotFound = (props) => {
  const errorType = "404";
  const errorMsg = " Page not found!";
  return (
    <Wrapper>
      <>
        <CartContainer title={errorType} subtitle={errorMsg}>
          <Paragraph>
            <Span>the requested URL</Span>
            <Span className='text-danger'>{props.location.pathname}</Span>
            not found.
          </Paragraph>
          <Link to={ROUTES.DASHBOARD} className='btn-primary'>
            back home
          </Link>
        </CartContainer>
      </>
    </Wrapper>
  );
};
