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
export type Searched = {
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

// order state
export interface OrderState {
  id: number | null;
  paid_amount?: number | null;
  orders?: Array<any>;
  loading: boolean;
  error: string;
  message?: string;
}

// singöe order
export type OrderItem = {
  price: number;
  product: IProduct;
  quantity: number;
};
// cart state
export interface CartState {
  cartItems: ICart[];
  total?: number;
}
// product
export interface ProductDetailsState {
  product: {};
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
export type ProductAction = {
  type: string;
  payload: any;
  product: IProduct;
};

export type DispatchType = (args: ProductAction) => ProductAction;
