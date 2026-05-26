import { renderWithTheme } from '@/testing/render-with-theme';

import { Text } from './Text';

describe('Text', () => {
  it('renders children', () => {
    const { getByText } = renderWithTheme(<Text>Hello</Text>);

    expect(getByText('Hello')).toBeOnTheScreen();
  });

  it('renders header variant', () => {
    const { getByText } = renderWithTheme(<Text variant="header">Title</Text>);

    expect(getByText('Title')).toBeOnTheScreen();
  });
});
