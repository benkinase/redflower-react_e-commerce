import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDjangoProduct, addToCart } from "../../store/actions";
import {
  Button,
  ImageContainer,
  Paragraph,
  StyledLink,
  ProductDetail,
  Wrapper,
  CustomContainer,
} from "../../components";

import { ICart } from "../../types";

export type DetailsParams = {
  cat_slug: string;
  prod_slug: string;
};
export function ProductDetails() {
  // destructuring params props
  const { cat_slug, prod_slug } = useParams<DetailsParams>();
  // get fetched product from state
  const { product, loading, error } = useSelector(
    (state: any) => state.product
  );
  const [currentItem, setItem] = useState<ICart | {}>(product);
  const [variants, setVariants] = useState<{ color: string; size: string }>({
    color: "",
    size: "",
  });

  // dispatch to state
  const dispatch: Dispatch<any> = useDispatch();

  // fetch  product detail
  useEffect(() => {
    dispatch(fetchDjangoProduct(cat_slug, prod_slug));
  }, [dispatch, cat_slug, prod_slug]);

  // add to cart
  const handleAddToCart = (item: ICart) => {
    setItem({ ...item, color: variants.color });
    console.log(item, currentItem);
    dispatch(addToCart(item));
  };
  const colors = ["red", "grey", "green", "blue"];
  const sizes = ["small", "medium", "large", "xlarge"];
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setVariants({ ...variants, [name]: value });
  };

  if (loading) {
    return <CustomContainer title='Product loading' />;
  }
  if (error) {
    return <CustomContainer title={error} />;
  }
  return (
    <ProductDetail>
      <Wrapper className='product__detail__page'>
        <Wrapper className='product__top'>
          <ImageContainer height='55%' src={product && product.get_image} />
          <h2 className='title'>{product && product.name}</h2>
          <Paragraph>{product && product.description}</Paragraph>
        </Wrapper>

        <Wrapper className='product__bottom'>
          <h3 className='subtitle'>Product Information</h3>
          <Paragraph>
            <strong>Price: </strong>€{product && product.price}
          </Paragraph>
          <Paragraph>
            <strong>Category: </strong>
            {product && product.cat}
          </Paragraph>

          <Wrapper className='product__select'>
            <Wrapper className='control'>
              <Select
                name='color'
                value={variants.color}
                onChange={handleChange}
              >
                {colors.map((color, index) => {
                  return <option key={index}>{color}</option>;
                })}
              </Select>

              <Select name='size' value={variants.size} onChange={handleChange}>
                {sizes.map((size, index) => {
                  return <option key={index}>{size}</option>;
                })}
              </Select>
            </Wrapper>
          </Wrapper>
          <Wrapper className='btn-container'>
            <Button onClick={() => handleAddToCart(product)}>
              add to cart
            </Button>
            <StyledLink to='/'>
              <Button>back to home</Button>
            </StyledLink>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </ProductDetail>
  );
}

type SelectProps = {
  width?: string;
};

const Select = styled.select<SelectProps>`
  width: ${(props) => (props.width ? props.width : "45%")};
  padding: 5px;
  margin: 5px;
  &:focus {
    outline: none;
  }
`;
