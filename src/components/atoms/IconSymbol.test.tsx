import { renderWithTheme } from '@/testing/render-with-theme';

import { IconSymbol } from './IconSymbol';

const mockSymbolView = jest.fn();

jest.mock('expo-symbols', () => {
  const { Text } = jest.requireActual<typeof import('react-native')>('react-native');

  const SymbolView = (props: { name: string }) => {
    mockSymbolView(props);
    return <Text testID="icon-symbol">{props.name}</Text>;
  };

  return { SymbolView };
});

describe('IconSymbol', () => {
  beforeEach(() => {
    mockSymbolView.mockClear();
  });

  it('renders the symbol name', () => {
    const { getByTestId } = renderWithTheme(
      <IconSymbol name="house.fill" color="#111111" />,
    );

    expect(getByTestId('icon-symbol')).toHaveTextContent('house.fill');
  });

  it('uses default size of 24', () => {
    renderWithTheme(<IconSymbol name="moon.fill" color="#000000" />);

    expect(mockSymbolView).toHaveBeenCalledWith(
      expect.objectContaining({
        style: expect.arrayContaining([
          expect.objectContaining({ width: 24, height: 24 }),
        ]),
      }),
    );
  });

  it('applies custom size and color', () => {
    renderWithTheme(<IconSymbol name="sun.max.fill" color="#ff0000" size={32} />);

    expect(mockSymbolView).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'sun.max.fill',
        tintColor: '#ff0000',
        style: expect.arrayContaining([
          expect.objectContaining({ width: 32, height: 32 }),
        ]),
      }),
    );
  });
});
