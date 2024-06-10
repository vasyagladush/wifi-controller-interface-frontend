import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { Avatar } from "./Avatar";
import { MenuItem } from "./Menu";
import AvatarIcon from "../../../stories/assets/avatar-sample.png";
import { AvatarSizeVariant } from "./Avatar.interface";

export default {
  title: "UI Kit/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  const menuItems = [
    { name: "List value 1" },
    { name: "List value 2" },
    { name: "List value 3" },
  ];

  return (
    <div style={{ marginLeft: "100px" }}>
      <Avatar {...args}>
        {" "}
        {menuItems.map((el) => (
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {el.name}
          </MenuItem>
        ))}
      </Avatar>
    </div>
  );
};

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  isOnline: true,
  avatarSrc: AvatarIcon,
  size: AvatarSizeVariant.MEDIUM,
};
