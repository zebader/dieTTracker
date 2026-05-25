import { css } from "styled-components/native";
import { typographyTokens, TypographyTokens } from './fonts';

export type ThemeColors = {
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  border: string;
  error: string;
  tabBarActive: string;
  tabBarInactive: string;
  link: string;
};

export type AppTheme = {
  colors: ThemeColors;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  typography: TypographyTokens & {
    variants:{
      title: ReturnType<typeof css>;
      header: ReturnType<typeof css>;
      body: ReturnType<typeof css>;
      caption: ReturnType<typeof css>;
    };
  },
  radius: {
    small:string;
    medium:string;
    large:string;
    round:string;
  }
};

const shared = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  typography: {
    ...typographyTokens,
    variants: {
      title: css`
        font-family: ${typographyTokens.fonts.bold};
        font-size: ${typographyTokens.sizes.xl};
        font-weight: ${typographyTokens.weights.bold};
      `,
      header: css`
        font-family: ${typographyTokens.fonts.semibold};
        font-size: ${typographyTokens.sizes.lg};
        font-weight: ${typographyTokens.weights.semibold};
      `,
      body: css`
        font-family: ${typographyTokens.fonts.regular};
        font-size: ${typographyTokens.sizes.md};
        font-weight: ${typographyTokens.weights.regular};
      `,
      caption: css`
        font-family: ${typographyTokens.fonts.regular};
        font-size: ${typographyTokens.sizes.xs};
        font-weight: ${typographyTokens.weights.regular};
      `,
    }
  },

  radius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '9999px',
  },
} satisfies Pick<AppTheme, 'spacing' | 'typography' | 'radius' >;

export const lightTheme: AppTheme = {
  ...shared,
  colors: {
    background: '#f7f5f0',
    surface: '#ffffff',
    textPrimary: '#2c3e50',
    textSecondary: '#7f8c8d',
    accent: '#4caf50',
    border: '#d1cbd4',
    error: '#e74c3c',
    tabBarActive: '#4caf50',
    tabBarInactive: '#7f8c8d',
    link: '#0a7ea4',
  },
};

export const darkTheme: AppTheme = {
  ...shared,
  colors: {
    background: '#151718',
    surface: '#1e2124',
    textPrimary: '#ECEDEE',
    textSecondary: '#9BA1A6',
    accent: '#5ec269',
    border: '#2d3238',
    error: '#ff6b6b',
    tabBarActive: '#5ec269',
    tabBarInactive: '#9BA1A6',
    link: '#6eb5e8',
  },
};

export type ColorScheme = 'light' | 'dark';

export const themes: Record<ColorScheme, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
};
