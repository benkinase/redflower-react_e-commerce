import React from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../../components/Containers/index";
import { ROUTES } from "../../routeConfig";
import { LandingPage } from "../Landing";

type LayoutProps = {
  children?: React.ReactNode;
};
export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // home
  function isHome() {
    return location.pathname === ROUTES.DASHBOARD;
  }

  return (
    <main style={{ marginTop: "5rem" }}>
      {isHome() && <LandingPage />}
      <MainContainer>{children}</MainContainer>
    </main>
  );
};
