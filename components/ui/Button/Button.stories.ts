import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
// import Button from "./button.jsx";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};
export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};
export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};
