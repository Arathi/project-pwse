import React from "react";
import type { Meta } from "@storybook/react";

import Switch from "../src/Switch";

const meta = {
  title: "Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

const Template = (args: any) => <Switch {...args} />;

export const Default = Template.bind({});

export const AlwaysOff = Template.bind({});
AlwaysOff.args = {
  value: false,
};

export const AlwaysOn = Template.bind({});
AlwaysOn.args = {
  value: true,
};
