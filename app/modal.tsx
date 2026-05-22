import { Link } from 'expo-router';
import { styled } from 'styled-components/native';

export default function ModalScreen() {
  return (
    <S.Container >
      <S.Text >This is a modal</S.Text>
      <Link href="/(tabs)/LobbyRoute" dismissTo>
        <S.Text>Go to home screen</S.Text>
      </Link>
    </S.Container>
  );
}

namespace S {
  export const Container = styled.View`
  flex:1;
  align-items:'center';
  justify-content:'center';
  padding: ${({ theme }) => theme.spacing.md};
  `

  export const Text = styled.Text`
   margin-top: ${({ theme }) => theme.spacing.md};
   padding: ${({ theme }) => theme.spacing.md} 0;
  `

}
