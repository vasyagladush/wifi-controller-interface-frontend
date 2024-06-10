import styled from "styled-components";
import { FC } from "react";
import { ILoadingBlockProps } from "./LoadingBlock.interface";
import { Spinner } from "../ui-kit";

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const LoadingBlock: FC<ILoadingBlockProps> = ({ loading, children }) => {
  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner size={50} />
      </SpinnerContainer>
    );
  }

  return <>{children}</>;
};
