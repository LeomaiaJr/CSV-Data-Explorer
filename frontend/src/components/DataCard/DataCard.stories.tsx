import type { Meta, StoryObj } from '@storybook/react';
import { DataCard } from './DataCard';

const meta = {
  title: 'Components/DataCard',
  component: DataCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof DataCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      name: 'John Doe',
      city: 'New York',
      country: 'USA',
      favorite_sport: 'Basketball',
    },
  },
};
