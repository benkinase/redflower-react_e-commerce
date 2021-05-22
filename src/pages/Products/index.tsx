import { useEffect, FC } from "react";
import { fetchDjangoProducts } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ProductDashboard, CustomContainer } from "../../components";
import { IProduct } from "../types";
import { Product } from "../Product";

export const Products: FC = () => {
  const { data, loading, error } = useSelector((state: any) => state.products);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchDjangoProducts());
  }, [dispatch]);

  if (loading) {
    <CustomContainer title='Loading product'></CustomContainer>;
  }
  if (error) {
    return <CustomContainer title={error} />;
  }
  if (data?.length < 1) {
    <CustomContainer title='No products found'></CustomContainer>;
  }

  return (
    <ProductDashboard>
      {data &&
        data.map((product: IProduct) => {
          return <Product product={product} key={product.id} />;
        })}
    </ProductDashboard>
  );
};
