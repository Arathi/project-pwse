import React from "react";
import type { Meta } from "@storybook/react";
import Arrow from "../src/Arrow";

const meta = {
  title: "Arrow",
  component: Arrow,
} satisfies Meta<typeof Arrow>;

export default meta;

const Template = (args: any) => <Arrow {...args} />;

export const Up = Template.bind({});
Up.args = {
  placement: "up",
  color: "red",
};

export const Right = Template.bind({});
Right.args = {
  placement: "right",
  color: "green",
};

export const Down = Template.bind({});
Down.args = {
  placement: "down",
  color: "blue",
};

export const Left = Template.bind({});
Left.args = {
  placement: "left",
  color: "white",
};