// user login
export type User = {
  username: string;
  password: string;
};
// user signup
export type UserValues = User & {
  firstName?: string;
  lastName?: string;
  email?: string;
  password2: string;
};
// user login::auth::returned user
export type UserState = {
  token: string | null;
  isAuth: boolean;
  error: string | null;
  loading: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
};

// user signup state
export type RegisterState = {
  error?: string | null;
  loading?: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
};
// product
export interface IProduct {
  id: number;
  name: string;
  category: number;
  count: number;
  cat: string;
  get_absolute_url: string;
  description: string;
  price: string;
  get_image: string;
  get_thumbnail: string;
  inCart: boolean;
}
export type ICart = IProduct & {
  //extends IProduct
  quantity?: number;
};

// product category result
export type Categories = {
  id?: number;
  get_absolute_url?: string;
  name?: string;
  data: IProduct[];
  loading: boolean;
  error: string;
};
// product search result
export type SearchProducts = {
  data: IProduct[];
  loading: boolean;
  error: string;
};
// checkout customer detail
export type CheckoutProps = {
  first_name: string;
  last_name: string;
  email: string;
  phone: number | null;
  address: string;
  zipcode: string;
  city: string;
};
// checkout Items
export type CheckoutItem = {
  product: number;
  quantity: number;
  price: number;
};
export interface OrderUser {
  address: string;
  city: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}
// single order
export type OrderItem = {
  price: number;
  product: IProduct;
  quantity: number;
};
export interface IOrder {
  id: number;
  user: OrderUser;
  created_at: string;
  paid_amount?: number | null;
  items: OrderItem[];
}
// order state
export interface OrderState {
  orders: IOrder[];
  loading: boolean;
  error: string;
  message?: string;
}

// cart state
export interface CartState {
  cartItems: ICart[];
  total?: number;
}
// product
export interface ProductDetailsState {
  product: IProduct;
  loading: boolean;
  error: string;
}

// global state
export type ProductState = {
  data: IProduct[];
  loading: boolean;
  error: string;
};
// global state
export type IProducts = {
  product: IProduct;
};

// state action
// export type ProductsAction = {
//   type: string;
//   payload: any;
//   product: IProduct;
// };

export enum ActionTypes {
  GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL",

  GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL",
}
export type ProductsAction =
  | { type: ActionTypes.GET_PRODUCTS_REQUEST; payload: null }
  | { type: ActionTypes.GET_PRODUCTS_SUCCESS; payload: IProduct[] }
  | { type: ActionTypes.GET_PRODUCTS_FAIL; payload: string };

export type ProductAction =
  | {
      type: ActionTypes.GET_PRODUCT_REQUEST;
      payload: { cat_slug: string; prod_slug: string };
    }
  | { type: ActionTypes.GET_PRODUCT_SUCCESS; payload: IProduct }
  | { type: ActionTypes.GET_PRODUCT_FAIL; payload: string };

export type DispatchType = (args: ProductsAction) => ProductsAction;
