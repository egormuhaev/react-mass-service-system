import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    sizeof: 's',
    style: { width: '400px', margin: 20 },
    placeholder: 'login',
  },
};
