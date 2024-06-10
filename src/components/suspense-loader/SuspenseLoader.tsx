import React, { FC, ReactNode, Suspense } from "react";
import styled from "styled-components";
import { Spinner } from "../ui-kit";

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SuspenseLoaderProps {
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}

export const SuspenseLoader: FC<SuspenseLoaderProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <SpinnerContainer>
          <Spinner size={40} />
        </SpinnerContainer>
      }
    >
      {children}
    </Suspense>
  );
};
