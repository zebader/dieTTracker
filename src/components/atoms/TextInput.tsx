import type { TextInputProps as RNTextInputProps } from 'react-native';
import { styled } from 'styled-components/native';

export type TextInputProps = Pick<
  RNTextInputProps,
  'placeholder' | 'multiline' | 'numberOfLines' | 'value' | 'onChangeText' | 'testID' | 'style'
>;

export const TextInput = ({
  testID = 'text-input',
  ...props
}: TextInputProps) => <S.Input testID={testID} {...props} />;

namespace S {
  export const Input = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.textSecondary,
  }))`
    font-family: ${({ theme }) => theme.typography.fonts.regular};
    background-color: ${({ theme }) => theme.colors.surface};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.sizes.md};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align-vertical: top;
  `;
}
