import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styled } from 'styled-components/native';

import { HapticTab, IconSymbol } from '@/components/atoms';
import { useAppTheme } from '@/hooks/use-app-theme';

const ThemeDevToggle = () => {
  const { isDark, setPreference, theme } = useAppTheme();
  const insets = useSafeAreaInsets();

  const handlePress = () => {
    setPreference(isDark ? 'light' : 'dark');
  };

  return (
    <S.ToggleContainer style={{ top: insets.top + 8 }}>
      <S.ToggleButton
        testID="theme-dev-toggle"
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <IconSymbol
          name={isDark ? 'sun.max.fill' : 'moon.fill'}
          size={22}
          color={theme.colors.textPrimary}
        />
      </S.ToggleButton>
    </S.ToggleContainer>
  );
};

namespace S {
  export const Root = styled.View`
    flex: 1;
  `;

  export const ToggleContainer = styled.View`
    position: absolute;
    right: ${({ theme }) => theme.spacing.md};
    z-index: 10;
  `;

  export const ToggleButton = styled.Pressable`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.medium};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
  `;

}

export default function TabLayout() {
  const { theme } = useAppTheme();

  return (
    <S.Root>
      <ThemeDevToggle />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.tabBarActive,
          tabBarInactiveTintColor: theme.colors.tabBarInactive,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.border,
          },
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        <Tabs.Screen
          name="LobbyRoute"
          options={{
            title: 'Lobby',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="TrackerRoute"
          options={{
            title: 'Tracker',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        />
      </Tabs>
    </S.Root>
  );
}
