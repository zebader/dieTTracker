import { Text } from '@/components/atoms';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'styled-components/native';

export default function Lobby() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.TitleBlock>
          <Text variant="title" color="textPrimary">
            Lobby
          </Text>
        </S.TitleBlock>
      </S.ContentWrapper>
    </S.Container>
  );
}

namespace S {
  export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.md};
  `;

  export const ContentWrapper = styled.View`
    flex: 1;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.xxl};
  `;

  export const TitleBlock = styled.View`
    margin-bottom: ${({ theme }) => theme.spacing.md};
  `;
}
