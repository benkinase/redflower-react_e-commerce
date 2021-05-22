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
  width: 100%;
  margin-bottom: 3rem;
  background: var(--secondary);
  z-index: 1;

  .nav-content {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 10px 0;
    color: var(--tertiary);
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  .home {
    color: var(--nice-red);
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
    top: 4px;
    right: 25px;
    color: var(--tertiary);
    font-size: 15px;
    font-weight: bold;
    &:hover {
      opacity: 0.68;
    }
  }

  .fa-bars {
    font-size: 30px;
    &:hover {
      opacity: 0.8;
    }
  }
  .large-screen {
    display: none;
    opacity: 0;
  }

  @media screen and (min-width: 750px) {
    .fa-bars {
      display: none;
    }
    .large-screen {
      right: 20px;
      display: flex;
      animation-name: ${show};
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
    .large-screen p {
      padding-left: 5px;
      letter-spacing: 1.2px;
    }
  }
`;
type SideContainerProps = {
  isOpen?: boolean;
  className?: string;
  children: React.ReactNode;
};
export const SidebarStyle = styled.div`
  .sidebar {
    position: absolute;
    color: var(--tertiary);
    box-shadow: var(--mainShadow);
    transition: all 0.3s 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transform: translateY(-40rem);
    width: 90%;
    margin: auto;
    padding: 5px;
    background: var(--secondary);
    min-height: 20vh;
    top: -50px;
    left: 25px;
    z-index: 5;
  }
  .links {
    margin-top: 2rem;
  }
  .show {
    transform: translateY(0);
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
    transition: var(--mainTransition);
    &:hover {
      color: var(--nice-red);
    }
  }
  .cart-link {
    position: relative;
    margin-top: 50px;
    .fa-shopping-cart {
      color: var(--nice-yellow);
      font-size: 30px;
    }
    .cart-value {
      position: absolute;
      top: -8px;
      right: 24px;
      font-weight: bold;
    }
  }
  @media screen and (min-width: 600px) {
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
  top: 3%;
  left: 55%;
  width: 300px;
  min-height: 100px;
  background-color: var(--nice-gray);
  border-radius: 2px;
  box-shadow: var(--lightShadow);
  display: table;
  transition: opacity 0.3s ease;
  width: 300px;
  min-height: 100px;
  padding: 20px 30px;
  border-radius: 2px;
  transition: all 0.3s ease;

  @media screen and(max-width:700px) {
    top: 18%;
    left: 50%;
    width: 200px;
  }
`;
