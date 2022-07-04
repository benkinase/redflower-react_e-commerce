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

import { ICart, CartState, IProduct, ProductDetailsState } from "../../types";
import { RootState } from "../../store/reducers";

export type DetailsParams = {
  cat_slug: string;
  prod_slug: string;
};

const colors = ["red", "grey", "green", "blue"];
const sizes = ["small", "medium", "large", "xlarge"];

export function ProductDetails() {
  const { cartItems }: CartState = useSelector(
    (state: RootState) => state.cart
  );
  // destructuring params props
  const { cat_slug, prod_slug } = useParams<DetailsParams>();
  // get fetched product from state
  const { product, loading, error }: ProductDetailsState = useSelector(
    (state: RootState) => state.product
  );
  //const [newItem, setItem] = useState<ICart | {}>();
  const [newColor, setColor] = useState<string>("");
  const [newSize, setSize] = useState<string>("");

  const [newProduct, setNewProduct] = useState<IProduct>({ ...product });
  console.log(newColor);
  // dispatch to state
  const dispatch: Dispatch<any> = useDispatch();

  // fetch  product detail
  useEffect(() => {
    dispatch(fetchDjangoProduct(cat_slug, prod_slug));
  }, [dispatch, cat_slug, prod_slug]);

  // add to cart
  const handleAddToCart = (item: ICart) => {
    const newItem = {
      ...item,
      color: newColor && newColor,
      size: newSize && newSize,
    };
    dispatch(addToCart(newItem));
  };
  const inCart = (product: IProduct) => {
    return cartItems.some((item) => item.id === product.id);
  };
  const handleSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSize(value);
    setNewProduct({
      ...newProduct,
      size: newSize && newSize,
    });
  };
  const handleColor = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setColor(value);
    setNewProduct({
      ...newProduct,
      color: newColor && newColor,
    });
  };

  if (loading) {
    return <CustomContainer title="Product loading" />;
  }
  if (error) {
    return <CustomContainer title={error} />;
  }
  return (
    <ProductDetail>
      <Wrapper className="product__detail__page">
        <Wrapper className="product__top">
          <ImageContainer height="55%" src={product.get_image} />
          <h2 className="title">{product.name}</h2>
          <Paragraph>{product.description}</Paragraph>
        </Wrapper>

        <Wrapper className="product__bottom">
          <h3 className="subtitle">Product Information</h3>
          <Paragraph>
            <strong>Price: </strong>
            {product.price}
          </Paragraph>
          <Paragraph>
            <strong>Color: </strong>
            {newColor ? newColor : product.color}
          </Paragraph>
          <Paragraph>
            <strong>Size: </strong>
            {newSize ? newSize : product.size}
          </Paragraph>
          <Paragraph>
            <strong>Category: </strong>
            {product.cat}
          </Paragraph>

          <Wrapper className="product__select">
            <Wrapper className="control">
              <Select name="newColor" value={newColor} onChange={handleColor}>
                {colors.map((color, index) => {
                  return (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  );
                })}
              </Select>

              <Select name="newSize" value={newSize} onChange={handleSize}>
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
          <Wrapper className="btn-container">
            <Button onClick={() => handleAddToCart(newProduct)}>
              {inCart(newProduct) ? "Item in cart" : "Add to cart"}
            </Button>
            <StyledLink to="/">
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
