import { useState } from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { ImageUploader } from "./ImageUploader";

export default {
  title: "UI Kit/ImageUploader",
  component: ImageUploader,
} as ComponentMeta<typeof ImageUploader>;

const Template: ComponentStory<typeof ImageUploader> = () => {
  const [checked, setChecked] = useState(false);
  return <ImageUploader />;
};

export const CheckboxDefault = Template.bind({});
