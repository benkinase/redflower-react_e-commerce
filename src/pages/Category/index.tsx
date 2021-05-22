import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductDashboard,
  Wrapper,
  CustomContainer,
  StyledNavLink,
  ProductsResult,
} from "../../components";
import { Product } from "../Product";
import { CategoriesParams, IProduct } from "../types";
import { fetchCategories } from "../../store/actions";

export const Category = () => {
  const { products, name, error, loading } = useSelector(
    (state: any) => state.categories
  );
  const { cat_slug } = useParams<CategoriesParams>();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCategories(cat_slug));
  }, [cat_slug, dispatch]);

  if (loading) {
    return <CustomContainer title='Products loading' />;
  }
  if (error) {
    return <CustomContainer title={error} />;
  }

  if (products?.length < 1) {
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
          {products &&
            products.map((product: IProduct) => {
              return <Product product={product} key={product.id} />;
            })}
        </ProductDashboard>
      </Wrapper>
    </ProductsResult>
  );
};
