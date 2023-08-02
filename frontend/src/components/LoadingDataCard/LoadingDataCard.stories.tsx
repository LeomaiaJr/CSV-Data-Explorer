import type { Meta, StoryObj } from '@storybook/react';
import { LoadingDataCard } from './LoadingDataCard';

const meta = {
  title: 'Components/LoadingDataCard',
  component: LoadingDataCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof LoadingDataCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
