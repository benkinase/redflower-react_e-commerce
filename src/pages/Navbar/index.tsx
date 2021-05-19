import { FC, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import {
  NavbarContainer,
  Wrapper,
  SidebarContainer,
  Span,
  StyledNavLink,
  Rounded,
  StyledModal,
  GridContainer,
} from "../../components";
import { SearchBar } from "../Search";
import { ICart } from "../types";

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
        <Wrapper className='nav-content'>
          <Wrapper>
            <StyledNavLink color='var(--tertiaryColor)' to='/'>
              <span className='home'>
                HomE
                <i className='fas fa-home'></i>
              </span>
            </StyledNavLink>
          </Wrapper>
          <Wrapper>
            <SearchBar />
          </Wrapper>

          <Wrapper>
            <i className='fas fa-bars' onClick={toggleBar}></i>
          </Wrapper>

          <Wrapper className='large-screen'>
            <StyledNavLink to='/cart' className='cart-link'>
              <i className='fas fa-shopping-cart'></i>
              <Span className='cart-value'>{state?.length}</Span>
            </StyledNavLink>
            <Rounded
              border='1px solid var(--nice-red)'
              color='var(--tertiaryColor)'
              radius='20px'
              onClick={() => toggleModal()}
            >
              Categories
            </Rounded>

            {isModal && <ModalCategories toggleModal={toggleModal} />}
            {!token && (
              <StyledNavLink
                border='1px solid var(--nice-red)'
                color='var(--tertiaryColor)'
                radius='20px'
                to='/auth'
              >
                Login
              </StyledNavLink>
            )}
            {token && (
              <StyledNavLink
                border='1px solid var(--nice-red)'
                color='var(--tertiaryColor)'
                radius='20px'
                to='/profile'
              >
                Account
              </StyledNavLink>
            )}
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
  let drawClass = "sidebar";

  if (isOpen) {
    drawClass = "sidebar show";
  }
  return (
    <SidebarContainer>
      <Wrapper className={drawClass}>
        <i className='fas fa-times side-fa-times' onClick={close}></i>
        <GridContainer gCols='repeat(2,1fr)'>
          <Wrapper className='links'>
            <StyledNavLink
              border='1px solid var(--nice-red)'
              color='var(--tertiary)'
              radius='20px'
              to='/old'
            >
              Old
            </StyledNavLink>
            <StyledNavLink
              border='1px solid var(--nice-red)'
              color='var(--tertiary)'
              radius='20px'
              to='/new'
            >
              New
            </StyledNavLink>
          </Wrapper>
          <Wrapper className='links'>
            <StyledNavLink
              border='1px solid var(--nice-red)'
              color='var(--tertiary)'
              radius='20px'
              to='/auth'
            >
              Login
            </StyledNavLink>
            <StyledNavLink
              border='1px solid var(--nice-red)'
              color='var(--tertiary)'
              radius='20px'
              to='/profile'
            >
              Account
            </StyledNavLink>
          </Wrapper>
          <Wrapper>
            <StyledNavLink to='/cart' className='cart-link'>
              <i className='fas fa-shopping-cart'></i>
              <Span className='cart-value'>{state?.length}</Span>
            </StyledNavLink>
          </Wrapper>
        </GridContainer>
      </Wrapper>
    </SidebarContainer>
  );
};

type ModalProps = {
  children?: React.ReactNode;
  men?: string;
  women?: string;
  isOpen?: boolean;
  toggleModal: () => void;
};
export const ModalCategories: React.FC<ModalProps> = ({
  children,
  toggleModal,
}) => {
  return (
    <StyledModal>
      <Wrapper className='modal-container'>
        <StyledNavLink
          to={"/new"}
          color='var(--tertiary)'
          bg='var(--primary)'
          radius='20px'
          border='1px solid var(--nice-red)'
        >
          <Span onClick={() => toggleModal()}>New</Span>
        </StyledNavLink>
        <StyledNavLink
          to={"/old"}
          color='var(--tertiary)'
          bg='var(--primary)'
          radius='20px'
          border='1px solid var(--nice-red)'
        >
          <Span onClick={() => toggleModal()}>Old</Span>
        </StyledNavLink>
        {children}
      </Wrapper>
    </StyledModal>
  );
};
