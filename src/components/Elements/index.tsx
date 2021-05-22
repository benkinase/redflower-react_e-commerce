import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

interface ParaProps {
  color?: string;
  fSize?: string;
}
export const Paragraph = styled.p.attrs({
  as: "p",
})<ParaProps>`
  font-size: ${(props) => (props.fSize ? props.fSize : "15px")};
  margin: 2px;
  text-align: justify;
  color: ${(props) => props.color};
`;
export const Label = styled.label``;

type SpanProps = {
  color?: string;
};
export const Span = styled.span<SpanProps>`
  color: ${(props) => props.color};
`;

interface ButtonProps {
  color?: string;
  bg?: string;
  width?: string;
  radius?: string;
  uppercase?: string;
  bold?: string;
  onClick?: Function;
}
// custom Bar chart container
export const Button = styled.button<ButtonProps>`
  padding: 10px;
  letter-spacing: 2px;
  transition: var(--mainTransition);
  outline: none;
  border: none;
  text-transform: capitalize;
  color: ${(props) => props.color};
  text-transform: ${(props) => props.uppercase};
  min-width: ${(props) => props.width};
  font-weight: ${(props) => props.bold};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.bg};

  &:hover {
    opacity: 0.8;
  }
`;

interface RoundedProps {
  color?: string;
  bg?: string;
  width?: string;
  radius?: string;
  border?: string;
}
export const Rounded = styled.button<RoundedProps>`
  text-decoration: none;
  padding: 3px 15px;
  margin: 0 10px;
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  &:hover {
    color: var(--tertiary);
    opacity: 0.8;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: red;
`;
interface NavLinkProps {
  color?: string;
  bg?: string;
  width?: string;
  radius?: string;
  border?: string;
  padding?: string;
}
export const StyledNavLink = styled(NavLink)<NavLinkProps>`
  text-decoration: none;
  padding: ${(props) => (props.padding ? props.padding : "3px 15px;")};
  margin: 0 10px;
  color: ${(props) => (props.color ? props.color : "var(--tertiary)")};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  letter-spacing: 2px;
  &:hover {
    color: var(--tertiary);
    opacity: 0.8;
  }
`;

type InputProps = {
  width?: string;
  helperText?: Object;
  error?: boolean;
};
export const Input = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))<InputProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: center;
  display: flex;
  margin: 1.5vh 0;
  padding: 5px;
  letter-spacing: 2px;

  &:focus {
    outline: none;
    border-bottom: 2px solid red;
  }
`;
interface DividerProps {
  bg?: string;
  width?: string;
  radius?: string;
  height?: string;
  border?: boolean;
  children?: React.ReactNode;
}

export const Divider = styled.div<DividerProps>`
  margin: 10px 0;
  background-color: ${(props) => (props.bg ? props.bg : "var(--nice-red)")};
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : "2px")};
`;
interface HorizonalProps {
  color?: string;
  width?: string;
  radius?: string;
  border?: boolean;
}
export const Horizonal = styled.hr<HorizonalProps>`
  color: ${(props) => props.color};
`;
export const Anchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  padding: 2px;
  color: #07c;
  font-weight: 900;
`;
