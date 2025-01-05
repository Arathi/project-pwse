import React from "react";
import type { Meta } from "@storybook/react";
import Select from "../src/Select";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

const Template = (args: any) => <Select {...args} />;

export const Default = Template.bind({});

export const Numbers = Template.bind({});
Numbers.args = {
  options: [
    {
      value: 30,
      label: "30秒",
    },
    {
      value: 60,
      label: "1分钟",
    },
    {
      value: 300,
      label: "5分钟",
    },
    {
      value: 900,
      label: "1刻钟",
    },
    {
      value: 1800,
      label: "半小时",
    },
  ],
};
