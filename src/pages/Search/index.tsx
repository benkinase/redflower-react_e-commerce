import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { useParams } from "react-router-dom";
import {
  SearchBarContainer,
  CustomContainer,
  Input,
  ProductDashboard,
  StyledNavLink,
  Wrapper,
  ProductsResult,
} from "../../components";

import { IProduct } from "../../types";
import { Product } from "../Product";
import { fetchSearchProducts } from "../../store/actions";

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
  const { data, error, loading } = useSelector((state: any) => state.searched);
  const [localError, setLocalError] = useState<string | null>("");
  const [query, setQuery] = useState<string | null | undefined>("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    let currentQuery = params.get("query");
    if (!currentQuery) setLocalError("Empty query");
    if (currentQuery) {
      setQuery(currentQuery);
      dispatch(fetchSearchProducts(currentQuery));
    }
  }, [dispatch]);

  if (localError) {
    const title = "Enter a query to complete search";
    return (
      <CustomContainer title={title}>
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
          data.map((product: IProduct) => {
            return <Product product={product} key={product.id} />;
          })}
      </ProductDashboard>
    </ProductsResult>
  );
};
