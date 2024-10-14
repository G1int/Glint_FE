import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components";
import { HeartIcon } from "../assets/icons";

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "xsPink",
        "xsWhite",
        "smPink",
        "mdPink",
        "lgPink",
        "mdWhite",
        "underline",
        "icon",
        "disabled",
      ],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const xsPink: Story = {
  args: {
    children: "Glint",
    variant: "xsPink",
    disabled: false,
  },
};

export const xsWhite: Story = {
  args: {
    children: "Glint",
    variant: "xsWhite",
    disabled: false,
  },
};

export const smPink: Story = {
  args: {
    children: "Glint",
    variant: "smPink",
    disabled: false,
  },
};

export const mdPink: Story = {
  args: {
    children: "Glint",
    variant: "mdPink",
    disabled: false,
  },
};

export const lgPink: Story = {
  args: {
    children: "Glint",
    variant: "lgPink",
    disabled: false,
  },
};
export const mdWhite: Story = {
  args: {
    children: "Glint",
    variant: "mdWhite",
    disabled: false,
  },
};
export const underline: Story = {
  args: {
    children: "Glint",
    variant: "underline",
    disabled: false,
  },
};
export const icon: Story = {
  args: {
    children: <HeartIcon />,
    variant: "icon",
    disabled: false,
  },
};

export const disabled: Story = {
  args: {
    children: "Glint",
    variant: "mdWhite",
    disabled: true,
  },
};
