import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppRoutes } from "../../constants/routes";
import { useUserContext } from "../../context/UserContextProvider";
// import { usePolicyCheck } from "../../modules/private/hooks/usePolicyCheck";
import {
  AccessPoint,
  Console,
  Logo,
  Monitor,
  SignOut,
} from "../icons";
import {
  Avatar,
  AvatarSizeVariant,
  Dropdown,
  Item,
  SettingsButton,
  Typography,
  TypographyVariant,
} from "../ui-kit";
import { MenuItem } from "../ui-kit/avatar/Menu";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import { BurgerMenuItem } from "./burger-menu/BurgerMenuItem";
import Api from "../../util/api";
// import { SubscriptionOptionEnum } from "../../modules/private/settings-module/billing-and-packages/shared/types";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 25px * 2);
  z-index: 3;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  height: 26px;
  background: #ffffff;
  box-shadow: 0 2px 18px rgba(108, 108, 138, 0.1);
  padding: 25px;
`;

const StyledLogo = styled(Logo)`
  width: 150px;
  cursor: pointer;
  z-index: 3;
  @media (max-width: 576px) {
    pointer-events: none;
  }
`;

// const SearchBox = styled.div`
//   margin-left: 173px;
// `;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const SignUpButtons = styled.div`
  display: flex;
`;

const SignInButton = styled(Typography)`
  margin-right: 15px;
  cursor: pointer;
`;
const SignUpButton = styled(Typography)`
  cursor: pointer;
`;

const SignOutIcon = styled(SignOut)`
  scale: 0.7;
`;

const StyledDropdown = styled(Dropdown)``;

interface HeaderProps {
  landing?: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = ({ landing }) => {
  const navigate = useNavigate();
  const { clearUser, user, setUser } = useUserContext();

  // const { checkAccessByPolicies } = usePolicyCheck();
  const settingsNavigate = () => {
    navigate(AppRoutes.Private.Settings.API_KEYS);
  };

  const profileNavigate = () => {
    navigate(AppRoutes.Private.Profile.PROFILE_SETTINGS);
  };

  const handleLogOut = async () => {
    console.log("LOG OUT TRIGGERED");
    localStorage.removeItem("accessToken");
    Api.updateHeadersWithToken(null);
    clearUser();
    navigate(AppRoutes.Open.Auth.SIGN_IN_START);
  };

  const goToSignIn = () => {
    navigate(AppRoutes.Open.Auth.SIGN_IN_START);
  };

  const goToProducts = () => {
    navigate(AppRoutes.Private.AccessPoints.AP_LIST);
  };

  const navigateToRoute =
    (routeName?: string) => (event: React.MouseEvent<HTMLElement>) => {
      navigate(routeName ?? "");
    };

  return (
    <Wrapper>
      <StyledLogo onClick={goToProducts} />
      <RightContainer>
        {landing ? (
          <SignUpButtons>
            <SignInButton
              onClick={goToSignIn}
              variant={TypographyVariant.BODY1}
            >
              Login
            </SignInButton>
          </SignUpButtons>
        ) : (
          <>
            <BurgerMenu>
              {
                // checkAccessByPolicies(
                //   [Policies.ORDER.ADMIN_ACCESS],
                //   [Policies.ORDER.CREATE_ORDERS]
                // )
                true ? (
                  <>
                    <BurgerMenuItem
                      icon={<AccessPoint />}
                      label="Access points"
                      isActive={window.location.pathname.includes(
                        "/private/access-points"
                      )}
                      onClick={navigateToRoute(
                        AppRoutes.Private.AccessPoints.AP_LIST
                      )}
                    />
                    <BurgerMenuItem
                      icon={<Monitor />}
                      label="Monitor"
                      isActive={window.location.pathname.includes(
                        "/private/monitor"
                      )}
                      onClick={navigateToRoute(
                        AppRoutes.Private.Monitor.MONITOR
                      )}
                    />
                    <BurgerMenuItem
                      icon={<Console />}
                      label="Console"
                      isActive={window.location.pathname.includes(
                        "/private/console"
                      )}
                      onClick={navigateToRoute(
                        AppRoutes.Private.Console.CONSOLE
                      )}
                    />
                  </>
                ) : (
                  <></>
                )
              }

              <BurgerMenuItem
                label="Sign-out"
                icon={<SignOutIcon />}
                lastItem
                onClick={handleLogOut}
              />
            </BurgerMenu>
            <ProfileWrapper>
              <Avatar
                size={AvatarSizeVariant.SMALL}
                avatarSrc={user.avatar?.url}
                isOnline
              >
                <MenuItem onClick={profileNavigate}>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Avatar>
            </ProfileWrapper>
          </>
        )}
      </RightContainer>
    </Wrapper>
  );
};

export default Header;
