import type { Meta, StoryObj } from '@storybook/react';
import AppBar from './AppBar';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
