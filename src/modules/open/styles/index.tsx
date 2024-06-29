import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Typography } from "../../../components/ui-kit";

export const Wrapper = styled.section`
  padding: 5rem calc((100vw - 470px) / 2);
  height: calc(100vh - 5rem * 2);
  overflow: auto;
`;

export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Body1 = styled(Typography)`
  text-align: center;
  margin-top: 1.5rem;
`;

export const Subtitle = styled(Typography)`
  margin-top: 30px;
`;

export const ForgotPasswordButton = styled(Typography)`
  color: #8181a5;
  text-align: right;
  margin-top: 0.3rem;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #027aff;
  &:visited {
    color: #027aff;
  }
`;

export const TermsLink = styled(StyledLink)`
  text-decoration: underline;
  color: #556CB1;
  &:visited {
    color: initial;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const StyledBackButton = styled(Button)`
  margin-right: 20px;
`;

export const ErrorMessage = styled(Typography)`
  text-align: center;
`;

export const ValidationWrapper = styled.div<{ active?: boolean }>`
  width: 100%;
  font-family: Ubuntu;
  font-size: 13px;
  font-style: normal;
  letter-spacing: 0;
  text-align: left;
  box-shadow: 0 2px 12px rgba(19, 39, 63, 0.15);
  border-radius: 10px;
  color: #556CB1;
  margin-top: ${(props) => (props.active ? "24px" : "0")};
  max-height: ${(props) => (props.active ? "300px" : "0")};
  height: auto;
  overflow: hidden;
  transition: all 0.5s ease-out;
`;

export const ValidationContainer = styled.div<{ active?: boolean }>`
  padding: 24px 0 24px 29px;
`;

export const ValidationTitle = styled.div`
  font-weight: 500;
  line-height: 16px;
`;

export const ValidationItem = styled.div`
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ValidationText = styled.div`
  margin-left: 8px;
`;

export const InviteWrapper = styled(Wrapper)`
  padding: 5rem calc((100vw - 430px) / 2);
`;

export const InfoTypography = styled(Typography)`
  text-align: center;
`;

export const CompanyName = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const ErrorTypography = styled(Typography)`
  margin-left: 30px;
`;
