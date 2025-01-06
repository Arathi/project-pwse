import React from "react";
import type { Meta } from "@storybook/react";
import Button from "../src/Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

const Template = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "按钮",
};
