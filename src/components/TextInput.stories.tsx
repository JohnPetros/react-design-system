// import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from "phosphor-react";
import { TextInput, TextInputInputProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your email address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disabled: true,
      },
    },
  },
};

export const Default = {};

export const WithutIcon = {
  args: {
    children: <TextInput.Input placeholder="Type your email address" />
  }
};
