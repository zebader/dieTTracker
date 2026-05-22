import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SystemUI from 'expo-system-ui';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ThemeProvider } from 'styled-components/native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {
  darkTheme,
  lightTheme,
  type AppTheme,
  type ColorScheme,
} from '../../styles/theme';

const STORAGE_KEY = '@diettracker/theme-preference';

export type ThemePreference = ColorScheme | 'system';

type AppThemeContextValue = {
  preference: ThemePreference;
  setPreference: (mode: ThemePreference) => void;
  resolvedScheme: ColorScheme;
  theme: AppTheme;
  isDark: boolean;
};

const AppThemeContext = createContext<AppThemeContextValue | null>(null);

const resolveScheme = (
  preference: ThemePreference,
  systemScheme: ColorScheme | null | undefined,
): ColorScheme => {
  if (preference === 'system') {
    return systemScheme === 'dark' ? 'dark' : 'light';
  }
  return preference;
}

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>('system');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        setPreferenceState(stored);
      }
    });
  }, []);

  const resolvedScheme = resolveScheme(preference, systemScheme);
  const theme: AppTheme = resolvedScheme === 'dark' ? darkTheme : lightTheme;
  const isDark = resolvedScheme === 'dark';

  const setPreference = useCallback((mode: ThemePreference) => {
    setPreferenceState(mode);
    AsyncStorage.setItem(STORAGE_KEY, mode);
  }, []);

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.colors.background);
  }, [theme.colors.background]);

  const value = useMemo(
    () => ({
      preference,
      setPreference,
      resolvedScheme,
      theme,
      isDark,
    }),
    [preference, setPreference, resolvedScheme, theme, isDark],
  );

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export const useAppTheme = (): AppThemeContextValue => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }
  return context;
}
