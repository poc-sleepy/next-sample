import { StyledButton } from '../components/StyledButton';
import { ComponentStory, Meta, StoryObj } from '@storybook/react';

// 本で書いてあるコードは deprecated が多いので、
// storybookまわりの内容はいったん読み飛ばす

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      option: ['primary', 'success', 'transparent'],
    },
    children: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof StyledButton>;

type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Transparent',
  },
};
