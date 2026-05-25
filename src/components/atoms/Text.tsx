import { PropsWithChildren } from "react";
import { styled } from "styled-components/native";
import type { AppTheme } from '../../../styles/theme';

export type TextProps = PropsWithChildren & {variant?:keyof AppTheme["typography"]["variants"]}

export const Text = ({
  variant = 'body',
  children
}: TextProps) => {
  switch (variant) {
    case 'body':
      return <S.BodyVariant>{children}</S.BodyVariant>
    case 'header':
      return <S.HeaderVariant>{children}</S.HeaderVariant>
    case 'title':
      return <S.TitleVariant>{children}</S.TitleVariant>
    case 'caption':
      return <S.CaptionVariant>{children}</S.CaptionVariant>
    default:
      return <S.BodyVariant>{children}</S.BodyVariant>
  }
}

namespace S {
  export const BodyVariant = styled.Text`
  ${({ theme }) => theme.typography.variants.body};
  `
  export const TitleVariant = styled.Text`
  ${({ theme }) => theme.typography.variants.title};
  `
  export const CaptionVariant = styled.Text`
  ${({ theme }) => theme.typography.variants.caption};
  `
  export const HeaderVariant = styled.Text`
  ${({ theme }) => theme.typography.variants.header};
  `
}