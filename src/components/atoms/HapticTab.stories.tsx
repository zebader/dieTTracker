import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import type { AppTheme } from '../../../styles/theme';
import { HapticTab } from './HapticTab';
import { IconSymbol } from './IconSymbol';
import { Text } from './Text';

const meta = {
  title: 'Atoms/HapticTab',
  parameters: {
    docs: {
      description: {
        component:
          'Bottom tab bar button with light haptic feedback on iOS. Used as `tabBarButton` in the tab navigator.',
      },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, margin: -16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TabItem = ({
  label,
  iconName,
  color,
  selected,
}: {
  label: string;
  iconName: 'house.fill' | 'paperplane.fill';
  color: string;
  selected: boolean;
}) => (
  <View style={{ alignItems: 'center', justifyContent: 'center', minWidth: 80, gap: 4 }}>
    <IconSymbol name={iconName} size={28} color={color} />
    <Text variant="caption" color={selected ? 'tabBarActive' : 'tabBarInactive'}>
      {label}
    </Text>
  </View>
);

const HapticTabBarPreview = () => {
  const theme = useTheme() as AppTheme;

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
        }}
      >
        <HapticTab
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityState={{ selected: false }}
          accessibilityLabel="Lobby tab"
        >
          <TabItem
            label="Lobby"
            iconName="house.fill"
            color={theme.colors.tabBarInactive}
            selected={false}
          />
        </HapticTab>
        <HapticTab
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityState={{ selected: true }}
          accessibilityLabel="Tracker tab"
        >
          <TabItem
            label="Tracker"
            iconName="paperplane.fill"
            color={theme.colors.tabBarActive}
            selected
          />
        </HapticTab>
      </View>
    </View>
  );
};

export const Default: Story = {
  render: () => <HapticTabBarPreview />,
};
