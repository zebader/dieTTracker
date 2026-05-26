import { fireEvent } from '@testing-library/react-native';

import { renderWithTheme } from '@/testing/render-with-theme';

import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders placeholder text', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <TextInput placeholder="Type here" value="" onChangeText={jest.fn()} />,
    );

    expect(getByPlaceholderText('Type here')).toBeOnTheScreen();
  });

  it('displays the current value', () => {
    const { getByDisplayValue } = renderWithTheme(
      <TextInput
        placeholder="Type here"
        value="Test value"
        onChangeText={jest.fn()}
      />,
    );

    expect(getByDisplayValue('Test value')).toBeOnTheScreen();
  });

  it('calls onChangeText when the user types', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = renderWithTheme(
      <TextInput
        testID="test-input"
        placeholder="Type here"
        value=""
        onChangeText={onChangeText}
      />,
    );

    fireEvent.changeText(getByTestId('test-input'), 'Test value');

    expect(onChangeText).toHaveBeenCalledWith('Test value');
  });
});
