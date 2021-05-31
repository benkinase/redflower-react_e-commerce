import { FC, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import {
  NavbarContainer,
  Wrapper,
  SidebarContainer,
  Span,
  StyledNavLink,
  ButtonR,
  StyledModal,
} from "../../components";
import { SearchBar } from "../Search";
import { ICart } from "../../types";
import AppLogo from "../../utils/SVG/logo.svg";

export function Navbar() {
  const state = useSelector((state: any) => state.cart.cartItems);
  const { token } = useSelector((state: any) => state.auth);
  const [isOpen, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };
  const [isModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const toggleBar = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

  return (
    <>
      <Sidebar isOpen={isOpen} close={close} state={state} />
      <NavbarContainer>
        <Wrapper className='navbar'>
          <Wrapper className='nav__center'>
            <Wrapper className='nav__header'>
              <Wrapper>
                <StyledNavLink color='var(--tertiary)' to='/'>
                  <img src={AppLogo} alt='AppLogo svg' />
                </StyledNavLink>
              </Wrapper>
              <Wrapper>
                <SearchBar />
              </Wrapper>

              <Wrapper>
                <i className='fas fa-bars' onClick={toggleBar}></i>
              </Wrapper>
            </Wrapper>
            <Wrapper className='only_large_screen'>
              <StyledNavLink to='/cart' className='cart-link'>
                <i className='fas fa-shopping-cart'></i>
                <Span className='cart-value'>{state?.length}</Span>
              </StyledNavLink>
              <ButtonR
                border='1px solid var(--nice-gray)'
                color='var(--tertiary)'
                radius='20px'
                onClick={() => toggleModal()}
              >
                Categories
              </ButtonR>

              {isModal && <ModalCategories toggleModal={toggleModal} />}
              {!token && (
                <StyledNavLink
                  border='1px solid var(--nice-gray)'
                  color='var(--tertiary)'
                  padding='3px 15px'
                  radius='20px'
                  to='/auth'
                >
                  Login
                </StyledNavLink>
              )}
              {token && (
                <StyledNavLink
                  border='1px solid var(--nice-gray)'
                  color='var(--tertiary)'
                  padding='3px 15px'
                  radius='20px'
                  to='/profile'
                >
                  Account
                </StyledNavLink>
              )}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </NavbarContainer>
    </>
  );
}

type SideBarProps = {
  isOpen: boolean;
  close: () => void;
  state: Array<ICart>;
};
const Sidebar: FC<SideBarProps> = ({ isOpen, state, close }) => {
  const { token } = useSelector((state: any) => state.auth);
  let drawClass = "sidebar";

  if (isOpen) {
    drawClass = "sidebar show";
  }
  return (
    <SidebarContainer>
      <Wrapper className={drawClass}>
        <i className='fas fa-times side-fa-times' onClick={close}></i>
        <Wrapper className='links'>
          <StyledNavLink
            border='1px solid var(--nice-gray)'
            color='var(--tertiary)'
            margin='10px 0px'
            padding='3px 15px'
            to='/old'
          >
            <span onClick={close}>Old Fashion</span>
          </StyledNavLink>

          <StyledNavLink
            border='1px solid var(--nice-gray)'
            color='var(--tertiary)'
            margin='10px 0px'
            padding='3px 15px'
            to='/new'
          >
            <span onClick={close}>New Fashion</span>
          </StyledNavLink>
          {!token && (
            <StyledNavLink
              border='1px solid var(--nice-gray)'
              color='var(--tertiary)'
              margin='10px 0px'
              padding='3px 15px'
              to='/auth'
            >
              <span onClick={close}>Login</span>
            </StyledNavLink>
          )}
          {token && (
            <StyledNavLink
              border='1px solid var(--nice-gray)'
              color='var(--tertiary)'
              margin='10px 0px'
              padding='3px 15px'
              to='/profile'
            >
              <span onClick={close}>Account</span>
            </StyledNavLink>
          )}

          <StyledNavLink to='/cart' className='cart-link'>
            <i className='fas fa-shopping-cart' onClick={close}>
              <Span className='cart-value'>{state?.length}</Span>
            </i>
          </StyledNavLink>
        </Wrapper>
      </Wrapper>
    </SidebarContainer>
  );
};

type ModalProps = {
  children?: React.ReactNode;
  toggleModal: () => void;
};
export const ModalCategories: React.FC<ModalProps> = ({
  children,
  toggleModal,
}) => {
  return (
    <StyledModal>
      <StyledNavLink
        to={"/new"}
        color='var(--tertiary)'
        bg='var(--primary)'
        radius='20px'
        margin='10px 0px'
        padding='3px 15px'
        border='1px solid var(--nice-gray)'
      >
        <Span onClick={() => toggleModal()}>New Fashion</Span>
      </StyledNavLink>
      <StyledNavLink
        to={"/old"}
        color='var(--tertiary)'
        bg='var(--primary)'
        radius='20px'
        padding='3px 15px'
        border='1px solid var(--nice-gray)'
      >
        <Span onClick={() => toggleModal()}>Old Fashion</Span>
      </StyledNavLink>
      {children}
    </StyledModal>
  );
};
