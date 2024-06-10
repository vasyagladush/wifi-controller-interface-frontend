/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { type ContextMenuProps } from "./Actions.interface";
import { ThreeDots } from "../../icons";

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > .dropdown {
    position: relative;
    cursor: pointer;

    & > a {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      transform: translate(-50%, -50%);

      :hover {
        background: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border-radius: 3px;
      }
    }
  }
`;

const MenuContent = styled.div<{ isOpen: boolean }>`
  box-sizing: border-box;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 14px 20px;
  top: 20px;
  right: 0;
  position: absolute;
  background: #ffffff;
  box-shadow: 0 2px 25px rgba(129, 129, 165, 0.2);
  border-radius: 5px;
  width: max-content;
  min-width: 166px;
  z-index: 2;

  & > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const MenuItem = styled.div<{
  disabled?: boolean;
  color?: string;
  hidden?: boolean;
}>`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  padding: 5px 0;
  text-transform: capitalize;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  & > a {
    display: block;
    text-align: left;
    text-decoration: none;
    ${({ color }) => color && `color: ${color}`};
  }

  :hover {
    text-decoration: ${({ disabled }) => (disabled ? "none" : "underline")};
  }

  ${({ hidden }) => hidden && "display: none;"}
`;

const Disabled = styled.a`
  color: #6c6c8a !important;
`;

export const Actions: FC<ContextMenuProps> = ({
  actions,
  externalUniqueId,
  externalOpenAction,
  externalOpenState,
}) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const valueRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    externalOpenAction?.(externalUniqueId ?? null);
  };

  useEffect(() => {
    setIsOpen(externalOpenState ?? false);
  }, [externalOpenState, externalUniqueId]);

  useEffect(() => {
    const clickOnWindows = (e: MouseEvent) => {
      e.stopPropagation();
      if (ref.current !== e.target && e.target !== valueRef.current) {
        setIsOpen(false);
        externalOpenAction?.(null);
      }
    };
    window.addEventListener("click", clickOnWindows);

    return () => {
      window.removeEventListener("click", clickOnWindows);
    };
  }, []);

  return (
    <Menu
      id={externalUniqueId}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <li className="dropdown" onClick={handleClick}>
        <a>
          <ThreeDots />
        </a>

        <MenuContent isOpen={isOpen} ref={valueRef}>
          {actions?.map((action) => (
            <MenuItem
              hidden={action.hidden}
              disabled={action.disabled}
              key={action.label}
              color={action.color}
            >
              {action.disabled ? (
                <Disabled>{action.label}</Disabled>
              ) : (
                <a
                  onClick={() => {
                    action.onClick();
                    externalOpenAction?.(null);
                  }}
                >
                  {action.label}
                </a>
              )}
            </MenuItem>
          ))}
        </MenuContent>
      </li>
    </Menu>
  );
};
