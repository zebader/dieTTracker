import type { Decorator } from '@storybook/react-native';
import type { ReactNode } from 'react';
import { View } from 'react-native';

import { useAppTheme } from '../../src/hooks/use-app-theme';

/**
 * Story canvas wrapper. Theme comes from AppThemeProvider (same as the app and
 * DevFloatingToolbar) — do not use a separate Storybook globals.theme here.
 */
const WithAppTheme = ({ children }: { children: ReactNode }) => {
  const { theme } = useAppTheme();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      {children}
    </View>
  );
};

export const withAppTheme: Decorator = (Story) => (
  <WithAppTheme>
    <Story />
  </WithAppTheme>
);
