import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Hypertext } from "./Hypertext";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "UI Kit/Hypertext",
  component: Hypertext,
} as ComponentMeta<typeof Hypertext>;

const Template: ComponentStory<typeof Hypertext> = (args) => (
  <BrowserRouter>
    <Hypertext {...args}>View all</Hypertext>
  </BrowserRouter>
);

export const Link = Template.bind({});
Link.args = {
  to: "#",
};
