import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

/** Font family names — keys for useFonts and theme.typography.* */
export const typographyFonts = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semibold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
  header: 'Poppins_700Bold',
} as const;

export const poppinsFontsToLoad = {
  [typographyFonts.regular]: Poppins_400Regular,
  [typographyFonts.medium]: Poppins_500Medium,
  [typographyFonts.semibold]: Poppins_600SemiBold,
  [typographyFonts.bold]: Poppins_700Bold,
};

export const typographyTokens = {
  fonts: {
    regular: typographyFonts.regular,
    medium: typographyFonts.medium,
    semibold: typographyFonts.semibold,
    bold: typographyFonts.bold,
  },
  sizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '26px',
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  }
} as const;

export type TypographyTokens = typeof typographyTokens