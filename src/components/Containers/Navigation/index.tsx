import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

const show = keyframes`
0%{
  opacity:0;
}
50%{
  opacity:0.5
}
100%{
  opacity:1
}
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 5px 0;
  background: var(--secondary);
  z-index: 1;

  .navbar {
    padding: 10px 0;
  }

  .nav__header {
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 3.5fr 1fr;
    column-gap: 10px;
  }

  .fa-bars {
    font-size: 40px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .cart-link {
    position: relative;
  }

  .fa-shopping-cart {
    font-size: 30px;
    transition: var(--mainTransition);
    color: var(--nice-yellow);
    &:hover {
      opacity: 0.8;
    }
  }
  .cart-value {
    position: absolute;
    top: 0.5px;
    right: 10px;
    color: var(--tertiary);
    font-size: 15px;
    font-weight: bold;
    &:hover {
      opacity: 0.7;
    }
  }

  .only_large_screen {
    display: none;
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    .fa-bars {
      display: none;
    }
    .nav__center {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .only_large_screen {
      margin-right: 25px;
      display: flex;
      animation-name: ${show};
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
    .only_large_screen {
      letter-spacing: 1.2px;
    }
  }
`;

// SIDEBAR CONTAINER
type SideContainerProps = {
  isOpen?: boolean;
  className?: string;
  children: React.ReactNode;
};
export const SidebarStyle = styled.div`
  .sidebar {
    position: fixed;
    transition: all 0.3s 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transform: translateX(-50rem);
    width: 100%;
    margin: auto;
    padding: 5px;
    min-height: 50vh;
    left: 0px;
    top: 90px;
    z-index: 5;
    color: var(--tertiary);
    background: var(--secondary);
    box-shadow: var(--mainShadow);
  }
  .links {
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    padding-botton: 5px;
    width: 60%;
  }
  .show {
    transform: translateX(0);
    animation: ${show} 1s ease-in forwards;
  }
  p {
    cursor: pointer;
    color: var(--secondary);
    padding: 3px 0;
    letter-spacing: 2px;
  }
  .side-fa-times {
    position: absolute;
    right: 5px;
    bottom: 5px;
    cursor: pointer;
    font-size: 35px;
    transition: var(--mainTransition);
    &:hover {
      color: var(--nice-red);
    }
  }
  .cart-link {
    position: relative;
    margin-top: 20px;
    .fa-shopping-cart {
      color: var(--nice-yellow);
      font-size: 20px;
    }
    .cart-value {
      color: var(--tertiary);
      position: absolute;
      top: -8px;
      font-weight: 800;
    }
  }
  @media screen and (min-width: 768px) {
    transform: translateY(-40rem);
    .fas-bars {
      display: none;
    }
  }
`;

export const SidebarContainer: FC<SideContainerProps> = ({ children }) => {
  return <SidebarStyle>{children}</SidebarStyle>;
};

// CATEGORY MODAL
export const StyledModal = styled.div`
  position: fixed;
  z-index: 100;
  top: 3.5%;
  left: 55%;
  width: 300px;
  background: var(--primary);
  box-shadow: var(--lightShadow);
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;

  @media screen and(max-width:768px) {
    top: 18%;
    left: 50%;
    width: 200px;
  }
`;
