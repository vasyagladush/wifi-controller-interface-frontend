import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { Typography } from "./Typography";
import { TypographyVariant } from "./Typography.interface";

export default {
  title: "UI Kit/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida felis
    libero, ac mollis est lobortis non. Cras dapibus a neque at posuere. Sed
    dictum lacinia rutrum. Nulla mattis euismod ex id rhoncus. In hac habitasse
    platea dictumst. Maecenas dapibus nulla id lorem gravida rutrum id in justo.
    Praesent in turpis ex.
  </Typography>
);

export const NonClickableTypography = Template.bind({});
NonClickableTypography.args = {
  variant: TypographyVariant.BODY1,
  clickable: false,
};

export const ClickableTypography = Template.bind({});
ClickableTypography.args = {
  variant: TypographyVariant.BODY1,
  clickable: true,
};

export const Header = Template.bind({});
Header.args = {
  variant: TypographyVariant.HEADER1,
  clickable: false,
};

export const Headline = Template.bind({});
Headline.args = {
  variant: TypographyVariant.HEADLINE,
  clickable: false,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: TypographyVariant.CAPTION,
  clickable: false,
};
