import { Route } from "react-router-dom";
import {
  Dashboard,
  ProductDetails,
  Auth,
  Search,
  Cart,
  Success,
  Checkout,
  Profile,
  Category,
  NotFound,
} from "./pages";

export const ROUTES = {
  DASHBOARD: "/",
  SEARCH: "/search",
  DETAIL: "/product/:cat_slug/:prod_slug/",
  AUTH: "/auth",
  CART: "/cart",
  CHECKOUT: "/cart/checkout",
};

// array of route objects
export const routes = [
  {
    path: "/",
    component: Dashboard,
    name: "home",
    title: "home-page",
  },

  {
    path: "/auth",
    component: Auth,
    name: "login",
    title: "login-page",
  },
  {
    path: "/search",
    component: Search,
    name: "search",
    title: "search-page",
  },
  {
    path: "/cart",
    component: Cart,
    name: "cart",
    title: "cart-page",
  },
  {
    path: "/profile",
    component: Profile,
    name: "profile",
    title: "profile-page",
  },
  {
    path: "/success",
    component: Success,
    name: "success",
    title: "success-page",
  },
  {
    path: "/cart/checkout",
    component: Checkout,
    name: "checkout",
    title: "checkout-page",
  },
  {
    path: "/product/:cat_slug/:prod_slug/",
    component: ProductDetails,
    name: "product-details",
    title: "product-page",
  },
  {
    path: "/:cat_slug",
    component: Category,
    name: "categories",
    title: "category-page",
  },

  {
    path: "*",
    component: NotFound,
    name: "notfound",
    title: "404-page",
  },
];

// map route objects and return Route with corresponding properties
export const routeComponents = routes.map(({ path, component }, key) => {
  return <Route exact path={path} component={component} key={key} />;
});
