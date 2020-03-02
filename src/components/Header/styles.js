import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View``;

export const Header = styled.View`
  /* flex-direction: row;
  /* justify-content: space-around;
  align-items: center; */
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ButtonDrawer = styled(RectButton)``;

export const ButtonSearch = styled(RectButton)``;

export const ButtonBurguer = styled(RectButton)``;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ModalContent = styled.View`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  /* height: ; */
  height: 200px;
  margin: 0 20px;
  width: 90%;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* align-self: center; */
  margin: 10px;
`;

export const TitleModal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  /* margin-right: 20px; */
  /* alin */
`;

export const SelectText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 30px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
`;

export const InputSearch = styled.TextInput`
  height: 50px;
  width: ${({visible}) => (visible ? '90' : '0')}%;
  border-radius: 5px;
  /* background-color: rgba(255, 255, 255, 0.90); */
  background-color: ${({visible}) =>
    visible ? 'rgba(255, 255, 255, 0.70)' : 'rgba(255, 255, 255, 0.0)'};
  padding: 10px;
  align-self: center;
  margin-top: -50px;
  margin-bottom: 10px;
`;
