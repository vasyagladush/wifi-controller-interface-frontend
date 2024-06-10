import React, { type FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { type AvatarProps, AvatarSizeVariant } from "./Avatar.interface";
import { ArrowDownContained, User } from "../../icons";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarImg = styled.img<{ size: AvatarSizeVariant }>`
  border-radius: 50%;
  object-fit: cover;

  width: ${(props) =>
    props.size === AvatarSizeVariant.SMALL
      ? "38px"
      : props.size === AvatarSizeVariant.LARGE
      ? "100px"
      : "54px"};
  height: ${(props) =>
    props.size === AvatarSizeVariant.SMALL
      ? "38px"
      : props.size === AvatarSizeVariant.LARGE
      ? "100px"
      : "54px"};
`;

const NoAvatarBg = styled.div<{ size: AvatarSizeVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #adb5bd;
  width: ${(props) =>
    props.size === AvatarSizeVariant.SMALL
      ? "38px"
      : props.size === AvatarSizeVariant.LARGE
      ? "100px"
      : "54px"};
  height: ${(props) =>
    props.size === AvatarSizeVariant.SMALL
      ? "38px"
      : props.size === AvatarSizeVariant.LARGE
      ? "100px"
      : "54px"};
`;

const Arrow = styled(ArrowDownContained)<{ disableDropdown?: boolean }>`
  ${({ disableDropdown }) => disableDropdown && "display: none;"}
  margin-left: 5px;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 10px rgba(129, 129, 165, 0.15);
  border-radius: 5px;
  margin-top: 10px;
  width: 150px;
`;

const AvatarAndDot = styled.div<{ hasHover?: boolean }>`
  position: relative;
  ${({ hasHover }) => (hasHover ? "cursor: pointer;" : "")}
`;

const OnlineDot = styled.div<{
  size: AvatarSizeVariant;
  disableDropdown?: boolean;
}>`
  width: ${(props) =>
    props.size === AvatarSizeVariant.SMALL
      ? "7px"
      : props.size === AvatarSizeVariant.LARGE
      ? "14px"
      : "11px"};
  height: ${(props) =>
    props.size === AvatarSizeVariant.SMALL
      ? "7px"
      : props.size === AvatarSizeVariant.LARGE
      ? "14px"
      : "11px"};
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: #3B892A;
  position: absolute;
  right: ${(props) => (props.size === AvatarSizeVariant.LARGE ? "12px" : "0")};
  bottom: 0;
`;

const StyledUser = styled(User)<{ size: AvatarSizeVariant }>`
  scale: ${({ size }) =>
    size === AvatarSizeVariant.SMALL
      ? 1
      : size === AvatarSizeVariant.LARGE
      ? 3
      : 1.5};
`;

export const Avatar: FC<AvatarProps> = ({
  children,
  avatarSrc,
  isOnline,
  size,
  disableDropdown,
}) => {
  const ref = useRef(null);
  const valueRef = useRef(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      if (
        ref.current !== e.target &&
        e.target !== valueRef.current &&
        e.target !== searchRef.current
      ) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (!disableDropdown) setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Body>
        <AvatarAndDot hasHover={!disableDropdown} onClick={onClickHandler}>
          {avatarSrc ? (
            <AvatarImg size={size} src={avatarSrc} alt="avatar" />
          ) : (
            <NoAvatarBg size={size}>
              <StyledUser size={size} />
            </NoAvatarBg>
          )}
          {isOnline && (
            <OnlineDot disableDropdown={disableDropdown} size={size} />
          )}
        </AvatarAndDot>
        <Arrow disableDropdown={disableDropdown} />
      </Body>
      {isMenuOpen && <Menu>{children}</Menu>}
    </Wrapper>
  );
};
