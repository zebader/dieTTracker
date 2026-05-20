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
  background-color: #f7f5f0;
  padding: 20px;
`;

  export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 40px;
`;

  export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
`;
}