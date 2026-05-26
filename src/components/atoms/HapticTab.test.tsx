import { fireEvent, render } from '@testing-library/react-native';
import * as Haptics from 'expo-haptics';
import { Text } from 'react-native';

import { HapticTab } from './HapticTab';

jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(() => Promise.resolve()),
  ImpactFeedbackStyle: {
    Light: 'light',
  },
}));

jest.mock('@react-navigation/elements', () => {
  const React = jest.requireActual<typeof import('react')>('react');
  const { Pressable } = jest.requireActual<typeof import('react-native')>('react-native');

  const PlatformPressable = React.forwardRef<
    React.ComponentRef<typeof Pressable>,
    Record<string, unknown>
  >((props, ref) => <Pressable ref={ref} {...props} />);
  PlatformPressable.displayName = 'PlatformPressable';

  return { PlatformPressable };
});

describe('HapticTab', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders children', () => {
    const { getByText } = render(
      <HapticTab accessibilityRole="button" onPress={jest.fn()}>
        <Text>Lobby</Text>
      </HapticTab>,
    );

    expect(getByText('Lobby')).toBeOnTheScreen();
  });

  it('calls the provided onPressIn handler on press in', () => {
    const onPressIn = jest.fn();
    const { getByRole } = render(
      <HapticTab
        accessibilityRole="button"
        accessibilityLabel="Lobby tab"
        onPress={jest.fn()}
        onPressIn={onPressIn}
      >
        <Text>Lobby</Text>
      </HapticTab>,
    );

    fireEvent(getByRole('button'), 'pressIn');

    expect(onPressIn).toHaveBeenCalledTimes(1);
  });

  it('triggers light impact haptics on iOS press in', () => {
    const { getByRole } = render(
      <HapticTab
        accessibilityRole="button"
        accessibilityLabel="Lobby tab"
        onPress={jest.fn()}
      >
        <Text>Lobby</Text>
      </HapticTab>,
    );

    fireEvent(getByRole('button'), 'pressIn');

    expect(Haptics.impactAsync).toHaveBeenCalledWith(Haptics.ImpactFeedbackStyle.Light);
  });
});
