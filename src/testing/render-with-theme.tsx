import { render, type RenderOptions } from '@testing-library/react-native';
import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme } from '../../styles/theme';

const ThemeWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

export const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: ThemeWrapper, ...options });
