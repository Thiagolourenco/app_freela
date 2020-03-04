import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #1a9ae2;
  /* justify-content: center;
  align-items: center; */
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  align-self: center;
  margin-top: 30px;
`;

export const TextSubTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  align-self: center;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonArrowLeft = styled(RectButton)``;

export const Header = styled.SafeAreaView`
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  /* margin: 0px; */
`;
