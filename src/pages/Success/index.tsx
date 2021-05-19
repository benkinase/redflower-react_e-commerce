import React from "react";
import { CustomContainer, StyledNavLink } from "../../components";

export const Success = () => {
  let title =
    "Thank you for shopping with us. Order to be processed within the next 48hrs";
  return (
    <CustomContainer title={title}>
      <>
        <StyledNavLink to='/' bg='var(--nice-green)' padding='12px 20px'>
          back home
        </StyledNavLink>
      </>
    </CustomContainer>
  );
};

type errorProps = {
  error: any;
};

export function ErrorFallback({ error }: errorProps) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
