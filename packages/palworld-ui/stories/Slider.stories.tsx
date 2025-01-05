import React from "react";
import type { Meta } from "@storybook/react";
import Slider from "../src/Slider";

const meta = {
  title: "Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

const Template = (args: any) => <Slider {...args} />;

export const Default = Template.bind({});

export const Range05To30 = Template.bind({});
Range05To30.args = {
  min: 0.5,
  max: 5,
  step: 0.1,
};

export const Range5000 = Template.bind({});
Range5000.args = {
  min: 0,
  max: 5000,
  step: 10,
};
