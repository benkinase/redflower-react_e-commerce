import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import {
  ProductDashboard,
  Wrapper,
  CustomContainer,
  StyledNavLink,
  ProductsResult,
} from "../../components";
import { Product } from "../Product";
import { Categories } from "../../types";
import { fetchCategories } from "../../store/actions";

// prouct category param
export type CategoriesParams = {
  cat_slug: string;
};
export const Category = () => {
  const { data, name, error, loading }: Categories = useSelector(
    (state: RootState) => state.categories
  );
  const { cat_slug } = useParams<CategoriesParams>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories(cat_slug));
  }, [cat_slug, dispatch]);

  if (loading) {
    return <CustomContainer title='Products loading' />;
  }
  if (error) {
    return <CustomContainer title={error} />;
  }

  if (data?.length < 1) {
    return (
      <CustomContainer title='No match found for' subtitle={cat_slug}>
        <StyledNavLink to='/' bg='var(--nice-red)' padding='10px 20px'>
          back home
        </StyledNavLink>
      </CustomContainer>
    );
  }

  return (
    <ProductsResult>
      <Wrapper className='page__category'>
        <Wrapper className='category__header'>
          <h3 className='category__name'>Category: {name}</h3>
        </Wrapper>
        <ProductDashboard>
          {data &&
            data.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
        </ProductDashboard>
      </Wrapper>
    </ProductsResult>
  );
};
