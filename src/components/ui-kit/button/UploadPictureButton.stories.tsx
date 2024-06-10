import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { UploadPictureButton } from "./UploadPictureButton";

export default {
  title: "UI Kit/Buttons/UploadPicture",
  component: UploadPictureButton,
} as ComponentMeta<typeof UploadPictureButton>;

const Template: ComponentStory<typeof UploadPictureButton> = (args) => (
  <UploadPictureButton {...args} />
);

export const UploadPictureBtn = Template.bind({});

export const DisabledUploadPictureBtn = Template.bind({});
DisabledUploadPictureBtn.args = {
  disabled: true,
};
