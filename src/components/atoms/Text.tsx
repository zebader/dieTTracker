import { PropsWithChildren } from 'react';
import { styled, useTheme } from 'styled-components/native';
import type { AppTheme, TextVariant, ThemeColorKey } from '../../../styles/theme';

export type TextProps = PropsWithChildren & {
  variant?: TextVariant;
  color?: ThemeColorKey;
};

export const Text = ({
  variant = 'body',
  children,
  color = 'textPrimary',
}: TextProps) => {
  const theme = useTheme() as AppTheme;
  const style = { color: theme.colors[color] };

  switch (variant) {
    case 'body':
      return <S.BodyVariant style={style}>{children}</S.BodyVariant>;
    case 'header':
      return <S.HeaderVariant style={style}>{children}</S.HeaderVariant>;
    case 'title':
      return <S.TitleVariant style={style}>{children}</S.TitleVariant>;
    case 'caption':
      return <S.CaptionVariant style={style}>{children}</S.CaptionVariant>;
    default:
      return <S.BodyVariant style={style}>{children}</S.BodyVariant>;
  }
};

namespace S {
  export const BodyVariant = styled.Text`
    ${({ theme }) => theme.typography.variants.body};
  `;

  export const TitleVariant = styled.Text`
    ${({ theme }) => theme.typography.variants.title};
  `;

  export const CaptionVariant = styled.Text`
    ${({ theme }) => theme.typography.variants.caption};
  `;

  export const HeaderVariant = styled.Text`
    ${({ theme }) => theme.typography.variants.header};
  `;
}
