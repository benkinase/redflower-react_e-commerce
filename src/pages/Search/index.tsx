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
} from "../../components";

import { IProduct } from "../types";
import { Product } from "../Product";
import { fetchSearchProducts } from "../../store/actions";

export const SearchBar = () => {
  return (
    <form method='get' action='/search'>
      <SearchBarContainer>
        <div className='control'>
          <Input
            type='text'
            className='search-input'
            placeholder='What are you looking for?'
            name='query'
          />
        </div>

        <div className='control'>
          <button>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </SearchBarContainer>
    </form>
  );
};

export const Search = () => {
  const { products, error, loading } = useSelector(
    (state: any) => state.searched
  );
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
      setTimeout(() => {
        dispatch(fetchSearchProducts(currentQuery));
      }, 500);
    }
  }, [dispatch]);

  if (localError) {
    const title = "Enter a query to complete search";
    return (
      <CustomContainer title={title}>
        <StyledNavLink to='/' bg='var(--nice-red)' padding='10px 20px'>
          Back home
        </StyledNavLink>
      </CustomContainer>
    );
  }
  if (loading) {
    return <CustomContainer title={loading} />;
  }
  if (error) {
    return <CustomContainer title={error} />;
  }

  if (products?.length < 1) {
    return (
      <CustomContainer title='No match found for' subtitle={query}>
        <StyledNavLink to='/' bg='var(--nice-red)' padding='10px 20px'>
          Back home
        </StyledNavLink>
      </CustomContainer>
    );
  }
  return (
    <Wrapper style={{ marginTop: "10rem" }}>
      <h3>Search term: {query}</h3>
      <ProductDashboard>
        {products &&
          products.map((product: IProduct) => {
            return <Product product={product} key={product.id} />;
          })}
      </ProductDashboard>
    </Wrapper>
  );
};
