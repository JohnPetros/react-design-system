// import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argsTypes: {},
  decorators: [
    () => {
      return (
        <div className="flex items-center gap-2">
          <Text size={'sm'}>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ],
  argTypes: {},
};

export const Default = {};
