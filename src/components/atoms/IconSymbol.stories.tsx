import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import type { AppTheme } from '../../../styles/theme';
import { IconSymbol } from './IconSymbol';

const iconNames = [
  'house.fill',
  'paperplane.fill',
  'chevron.left.forwardslash.chevron.right',
  'chevron.right',
  'sun.max.fill',
  'moon.fill',
] as const;

const meta = {
  title: 'Atoms/IconSymbol',
  component: IconSymbol,
  argTypes: {
    name: {
      control: 'select',
      options: [...iconNames],
    },
    size: {
      control: { type: 'number', min: 16, max: 48, step: 2 },
    },
    color: {
      control: 'color',
    },
  },
  args: {
    name: 'house.fill',
    size: 28,
    color: '#2c3e50',
  },
} satisfies Meta<typeof IconSymbol>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TabBarSize: Story = {
  args: {
    name: 'paperplane.fill',
    size: 28,
  },
};

const ThemeToggleIconsPreview = () => {
  const theme = useTheme() as AppTheme;

  return (
    <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
      <IconSymbol name="sun.max.fill" size={28} color={theme.colors.textPrimary} />
      <IconSymbol name="moon.fill" size={28} color={theme.colors.textPrimary} />
    </View>
  );
};

export const ThemeToggleIcons: Story = {
  render: () => <ThemeToggleIconsPreview />,
};

const AllMappedIconsPreview = () => {
  const theme = useTheme() as AppTheme;

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20 }}>
      {iconNames.map((name) => (
        <View key={name} style={{ alignItems: 'center', width: 72 }}>
          <IconSymbol name={name} size={28} color={theme.colors.textPrimary} />
        </View>
      ))}
    </View>
  );
};

export const AllMappedIcons: Story = {
  render: () => <AllMappedIconsPreview />,
};
