import { Tabs } from 'expo-router';
import { styled } from 'styled-components/native';

import { HapticTab, IconSymbol } from '@/components/atoms';
import { DevFloatingToolbar } from '@/components/molecules';
import { useAppTheme } from '@/hooks/use-app-theme';

namespace S {
  export const Root = styled.View`
    flex: 1;
  `;
}

export default function TabLayout() {
  const { theme } = useAppTheme();

  return (
    <S.Root>
      <DevFloatingToolbar />
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
