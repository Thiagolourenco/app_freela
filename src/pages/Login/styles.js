import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #1a9ae2;
`;

export const TextInit = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  font-style: italic;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  font-style: italic;
`;

export const ButtonSignIn = styled.TouchableOpacity.attrs({
  opacity: 0.5,
})`
  margin-top: 50px;
  height: 50px;
  width: 90%;
  background: #fff;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const ButtonSignInText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 10px;
`;

export const ImageView = styled.Image`
  height: 300px;
  width: 300px;
`;
