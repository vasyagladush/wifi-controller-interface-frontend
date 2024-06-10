import styled from "styled-components";
import { Hypertext, TypographyVariant } from "../../../components/ui-kit";
import { AppRoutes } from "../../../constants/routes";
import { Title } from "../styles";
import { useUserContext } from "../../../context/UserContextProvider";
import Api from "../../../util/api";

export interface ContentCardProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
  disableEndSession?: boolean;
}

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 0px;
  padding: 2rem 3rem;
`;

const EndSessionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const ContentCard: React.FunctionComponent<ContentCardProps> = ({
  title,
  children,
  disableEndSession,
}) => {
  const { clearUser } = useUserContext();

  const endSession = async () => {
    localStorage.removeItem("accessToken");
    Api.updateHeadersWithToken(null);
    clearUser();
  };

  return (
    <Wrapper>
      <Title variant={TypographyVariant.HEADER1}>{title}</Title>
      {children}
      {!disableEndSession && (
        <EndSessionWrapper>
          <Hypertext
            onClick={endSession}
            to={AppRoutes.Open.Auth.SIGN_IN_START}
          >
            Quit
          </Hypertext>
        </EndSessionWrapper>
      )}
    </Wrapper>
  );
};
