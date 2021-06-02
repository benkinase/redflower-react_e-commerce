import { useEffect, useState, ChangeEvent } from "react";
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

import { ICart, ProductDetailsState } from "../../types";
import { RootState } from "../../store/reducers";

export type DetailsParams = {
  cat_slug: string;
  prod_slug: string;
};
export type Variants = {
  newColor: string;
  newSize: string;
};
const colors = ["red", "grey", "green", "blue"];
const sizes = ["small", "medium", "large", "xlarge"];

export function ProductDetails() {
  // destructuring params props
  const { cat_slug, prod_slug } = useParams<DetailsParams>();
  // get fetched product from state
  const { product, loading, error }: ProductDetailsState = useSelector(
    (state: RootState) => state.product
  );
  //const [newItem, setItem] = useState<ICart | {}>();
  const [variants, setVariants] = useState<Variants>({
    newColor: "",
    newSize: "",
  });

  // dispatch to state
  const dispatch: Dispatch<any> = useDispatch();

  // fetch  product detail
  useEffect(() => {
    dispatch(fetchDjangoProduct(cat_slug, prod_slug));
  }, [dispatch, cat_slug, prod_slug]);

  // add to cart
  const handleAddToCart = (item: ICart) => {
    // const { newSize, newColor } = variants;
    // setItem({ ...item, color: newColor && newColor, size: newSize && newSize });
    // console.log(item);
    // console.log(newItem);
    dispatch(addToCart(item));
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setVariants({ ...variants, [id]: value });
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
                id='newColor'
                value={variants.newColor}
                onChange={handleChange}
              >
                {colors.map((color, index) => {
                  return (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  );
                })}
              </Select>

              <Select
                id='newSize'
                value={variants.newSize}
                onChange={handleChange}
              >
                {sizes.map((size, index) => {
                  return (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  );
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
