import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1a9ae2;
`;

export const Content = styled.View`
  flex: 1;
  background: #f1f1f1;
  margin: 5px 20px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  text-align: center;
  margin-left: 120px;
`;

export const ContetnListImage = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #5eb73e;
  align-self: center;
  margin-top: 30px;
`;

export const StarView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-self: center;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-evenly;
`;

export const ValueNote = styled.Text`
  font-size: 14px;
  color: #2d4467;
  font-weight: 500;
  margin-right: 10px;
`;

export const ReviewsText = styled.Text`
  font-size: 14px;
  color: #2b4a78;
  font-weight: 500;
`;

export const ListProfile = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 20px;
`;

export const ListProfileImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background: #ccc;
  margin: 10px;
`;

export const ListProfileStar = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const ListProfileView = styled.View`
  margin-left: 10px;
  flex-direction: row;
`;

export const ListProfileName = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const ListProfileComent = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

export const LikesText = styled.Text`
  font-size: 16px;
  color: #ccc;
`;

export const ViewList = styled.View`
  flex-direction: column;
`;

export const LikeView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const Header = styled.SafeAreaView`
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
  /* margin: 0px; */
`;

export const ButtonArrowLeft = styled(RectButton)``;

export const ButtonInfo = styled(RectButton)`
  margin: 5px;
`;

export const ButtonInfoText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin: 8px;
`;

export const TitleModal = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const SelectRelevane = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-left: 40px;
  margin-top: 5px;
  color: rgba(155, 167, 154, 0.74);
`;

export const ButtonView = styled.View`
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-around;
`;

export const ButtonCancel = styled(RectButton)``;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #67a05e;
`;

export const ButtonAppli = styled(RectButton)`
  margin-right: 20px;
  margin-top: 20px;
`;

export const ButtonCheckCircle = styled.View`
  flex-direction: row;
  margin-left: 20px;
`;
