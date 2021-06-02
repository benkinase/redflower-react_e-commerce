import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SearchBarContainer,
  CustomContainer,
  Input,
  ProductDashboard,
  StyledNavLink,
  Wrapper,
  ProductsResult,
} from "../../components";

import { SearchProducts } from "../../types";
import { Product } from "../Product";
import { fetchSearchProducts } from "../../store/actions";
import { RootState } from "../../store/reducers";

export const SearchBar = () => {
  return (
    <form method='get' action='/search'>
      <SearchBarContainer>
        <Wrapper className='control'>
          <Input
            type='text'
            className='search-input'
            placeholder='Product search term'
            name='query'
          />
        </Wrapper>

        <Wrapper className='control__search'>
          <button className='search__button'>
            <i className='fas fa-search'></i>
          </button>
        </Wrapper>
      </SearchBarContainer>
    </form>
  );
};

export const Search = () => {
  const { data, error, loading }: SearchProducts = useSelector(
    (state: RootState) => state.search
  );
  const [localError, setLocalError] = useState<string | null>("");
  const [query, setQuery] = useState<string | null | undefined>("");
  const dispatch = useDispatch();

  useEffect(() => {
    const uri = window.location.search.substring(1);
    const params = new URLSearchParams(uri);
    const currentQuery = params.get("query");

    if (!currentQuery) {
      setLocalError("enter a query to complete search");
    }

    setQuery(currentQuery);
    dispatch(fetchSearchProducts(currentQuery));
  }, [dispatch]);

  if (localError) {
    const title = localError;
    return (
      <CustomContainer title={title}>
        <StyledNavLink
          to='/'
          bg='var(--nice-red)'
          padding='10px 20px'
          color='var(--nice-gray)'
        >
          back home
        </StyledNavLink>
      </CustomContainer>
    );
  }
  if (loading) {
    return <CustomContainer title='Products loading' />;
  }
  if (error) {
    return <CustomContainer title={error} />;
  }

  if (data?.length < 1) {
    return (
      <CustomContainer title='No match found for' subtitle={query}>
        <StyledNavLink
          to='/'
          bg='var(--nice-red)'
          padding='10px 20px'
          color='var(--nice-gray)'
        >
          Back home
        </StyledNavLink>
      </CustomContainer>
    );
  }
  return (
    <ProductsResult>
      <h3>Search term: {query}</h3>
      <ProductDashboard>
        {data &&
          data.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
      </ProductDashboard>
    </ProductsResult>
  );
};
