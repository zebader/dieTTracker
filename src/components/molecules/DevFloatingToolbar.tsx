import { router, usePathname } from 'expo-router';
import { styled } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconSymbol } from '@/components/atoms';
import { useAppTheme } from '@/hooks/use-app-theme';

export const DevFloatingToolbar = () => {
  const { isDark, setPreference, theme } = useAppTheme();
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const isStorybook = pathname === '/storybook';

  const handleThemePress = () => {
    setPreference(isDark ? 'light' : 'dark');
  };

  const handleStorybookPress = () => {
    if (isStorybook) {
      router.back();
      return;
    }
    router.push('/storybook');
  };

  return (
    <S.ToolbarContainer style={{ top: insets.top + 8 }}>
      <S.ToolbarRow>
        <S.ToolbarButton
          testID="storybook-dev-toggle"
          onPress={handleStorybookPress}
          accessibilityRole="button"
          accessibilityLabel={isStorybook ? 'Close Storybook' : 'Open Storybook'}
        >
          <IconSymbol
            name="book.fill"
            size={22}
            color={isStorybook ? theme.colors.accent : theme.colors.textPrimary}
          />
        </S.ToolbarButton>
        <S.ToolbarButton
          testID="theme-dev-toggle"
          onPress={handleThemePress}
          accessibilityRole="button"
          accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <IconSymbol
            name={isDark ? 'sun.max.fill' : 'moon.fill'}
            size={22}
            color={theme.colors.textPrimary}
          />
        </S.ToolbarButton>
      </S.ToolbarRow>
    </S.ToolbarContainer>
  );
};

namespace S {
  export const ToolbarContainer = styled.View`
    position: absolute;
    right: ${({ theme }) => theme.spacing.md};
    z-index: 10;
  `;

  export const ToolbarRow = styled.View`
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.sm};
  `;

  export const ToolbarButton = styled.Pressable`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.medium};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
  `;
}
