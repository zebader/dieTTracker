import type { Meta, StoryObj } from '@storybook/react-native';

import { DevFloatingToolbar } from './DevFloatingToolbar';

const meta = {
  title: 'Molecules/DevFloatingToolbar',
  component: DevFloatingToolbar,
} satisfies Meta<typeof DevFloatingToolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
