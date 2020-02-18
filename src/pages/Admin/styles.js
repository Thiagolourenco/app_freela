import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #1a9ae2;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  /* margin-top: 20px; */
  text-align: center;
`;

export const Content = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  align-self: center;
  flex: 1;
  height: 100%;
`;

export const ImageProfile = styled(RectButton)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #ccc;
  align-self: center;
  /* margin-top: 30px; */
`;

export const ImageView = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
`;

export const ContentInput = styled.View`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.5);
  height: 50px;
  width: 350px;
  border-radius: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  padding: 10px;
  font-size: 16px;
`;

export const ContentPicker = styled.View`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.5);
  height: 50px;
  width: 350px;
  border-radius: 5px;
  flex: 1;
`;

export const PickerCountry = styled.Picker`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.5);
  height: 50px;
  width: 100%;
  flex: 1;
  border-radius: 5px;
  /* background: rgba(255, 255, 255, 0.5); */
  /* flex: 1; */
`;

export const ButtonRegister = styled(RectButton)`
  background: #4676f0;
  border-radius: 5px;
  height: 50px;
  width: 179px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const ButtonRegisterText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonContentRNPicker = styled(RNPickerSelect)`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.5);
  height: 50px;
  width: 100%;
  flex: 1;
  border-radius: 5px;
`;
