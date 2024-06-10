import { useState } from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { RadioButton } from "./RadioButton";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";

export default {
  title: "UI Kit/Radio-button",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = () => {
  const [checked, setChecked] = useState("1");
  return (
    <>
      <RadioButton
        inputProps={{ value: "1", style: { marginBottom: "1rem" } }}
        checked={checked === "1"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(e.target.value);
        }}
        labelComponent={
          <Typography variant={TypographyVariant.BODY5}>Option 1</Typography>
        }
      />
      <RadioButton
        inputProps={{ value: "2" }}
        checked={checked === "2"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(e.target.value);
        }}
        labelComponent={
          <Typography variant={TypographyVariant.BODY5}>Option 2</Typography>
        }
      />
    </>
  );
};

export const RadioButtonDefault = Template.bind({});
