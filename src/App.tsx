import { FC, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MainLayout } from "./components";
import { Navbar } from "./pages";
import { routeComponents } from "./routeConfig";
import { loadUser } from "./store/actions";
import { ErrorFallback } from "./utils/validations";

export const App: FC = () => {
  const { token } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(loadUser());
    }
  }, [token, dispatch]);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Navbar />
      <MainLayout>
        <Switch>{routeComponents}</Switch>
      </MainLayout>
    </ErrorBoundary>
  );
};
