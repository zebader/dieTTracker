import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import type { AppTheme, TextVariant, ThemeColorKey } from '../../../styles/theme';
import { Text } from './Text';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  decorators: [
    (Story) => (
      <View style={{ gap: 12 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['body', 'header', 'title', 'caption'] satisfies TextVariant[],
    },
    color: {
      control: 'select',
      options: [
        'textPrimary',
        'textSecondary',
        'accent',
        'link',
        'error',
      ] satisfies ThemeColorKey[],
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    color: 'textPrimary',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Header: Story = {
  args: {
    variant: 'header',
    children: 'Section header',
  },
};

export const Title: Story = {
  args: {
    variant: 'title',
    children: 'Screen title',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    color: 'textSecondary',
    children: 'Supporting caption text',
  },
};

const AllVariantsPreview = () => {
  const theme = useTheme() as AppTheme;

  return (
    <View style={{ gap: 12 }}>
      <Text variant="title">Title</Text>
      <Text variant="header">Header</Text>
      <Text variant="body">Body — uses theme typography and colors.</Text>
      <Text variant="caption" color="textSecondary">
        Caption in secondary color
      </Text>
      <Text color="accent">Accent color</Text>
      <Text color="error">Error color</Text>
      <Text color="link">Link color</Text>
      <View
        style={{
          marginTop: 8,
          padding: 12,
          borderRadius: 8,
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.border,
        }}
      >
        <Text color="textSecondary">On surface background</Text>
      </View>
    </View>
  );
};

export const AllVariants: Story = {
  render: () => <AllVariantsPreview />,
};
