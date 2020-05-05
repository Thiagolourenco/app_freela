import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  background: #1a9ae2;
  height: 60px;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-between;
`;

export const ButtonArrowBack = styled(RectButton)`
  margin-left: 10px;
`;

export const ButtonPublic = styled(RectButton)`
  margin-right: 15px;
`;

export const ButtonPublicText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export const ProfileView = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const ViewProfileE = styled.View`
  height: 40px;
  width: 40px;
  background: #ccc;
  border-radius: 20px;
`;

export const ViewInfoProfile = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const TextProfile = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
`;

export const InputView = styled.View`
  height: 60px;
  width: 95%;
  background: #ddd;
  align-self: center;
  /* flex: 1; */
  border-radius: 5px;
  margin-top: 25px;
`;

export const InputComment = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex: 1;
  padding: 10px;
`;

export const StarView = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-self: center;
`;
