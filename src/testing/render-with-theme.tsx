import { render, type RenderOptions } from '@testing-library/react-native';
import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { JotaiProvider } from '@/providers/jotai-provider';
import { lightTheme } from '../../styles/theme';

const ThemeWrapper = ({ children }: { children: ReactNode }) => (
  <JotaiProvider>
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
  </JotaiProvider>
);

export const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: ThemeWrapper, ...options });
