import { FC } from "react";
import { BarLoader } from "react-spinners";
import styled from "styled-components";

const LoadWrapper = styled.div<{ loading?: boolean; margin?: string }>`
  width: 100%;
  margin: ${({ margin }) => margin ?? "10px 0 -10px"};
  ${({ loading }) => !loading && "display: none;"}
`;

export const LoadingBar: FC<{
  loading?: boolean;
  margin?: string;
  className?: string;
}> = ({ loading, className, margin }) => (
  <LoadWrapper className={className} loading={loading} margin={margin}>
    <BarLoader width="100%" height={3} color="#6CB155" loading={loading} />
  </LoadWrapper>
);
