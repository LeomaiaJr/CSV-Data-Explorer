import type { Meta, StoryObj } from '@storybook/react';
import DragNDrop from './DragNDrop';
import { useState } from 'react';

const meta = {
  title: 'Components/DragNDrop',
  component: DragNDrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DragNDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return <DragNDrop file={file} setFile={setFile} />;
};

Primary.args = {};
