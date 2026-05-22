import React from 'react';
import { styled } from 'styled-components/native';

export default function Lobby() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.SectionTitle>Lobby</S.SectionTitle>
      </S.ContentWrapper>
    </S.Container>
  );
}

namespace S {
  export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
`;

  export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

  export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.typography.bold};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
}