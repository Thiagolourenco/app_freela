import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1a9ae2;
`;

export const Content = styled.View`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
  background: #fff;
  margin: 0 20px;
  border-radius: 10px;
`;

export const ContentListView = styled.TouchableOpacity`
  flex-direction: row;
  margin: 20px 20px;
`;

export const ContetnListImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #5eb73e;
`;

export const ContentStart = styled.View`
  flex-direction: row;
`;

export const ContentView = styled.View`
  margin-left: 30px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const ContentFooter = styled.View`
  flex-direction: row;
`;

export const ContentFooterTextValue = styled.Text`
  font-size: 14px;
  color: #638ac6;
  font-weight: 500;
  margin-right: 10px;
`;

export const ContentFooterReviews = styled.Text`
  font-size: 14px;
  color: #4e70a3;
  font-weight: 500;
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

export const ViewSearch = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50;
  background-color: #ccc;
  margin-bottom: 10;
  align-items: center;
`;

export const InputSearch = styled.TextInput.attrs({})`
  margin-left: 10;
`;

// export const InputSearch = styled.TextInput`
//   height: 50px;
//   width: 90%;
//   border-radius: 15px;
//   background-color: ${({visible}) =>
//     visible ? 'rgba(255, 255, 255, 0.70)' : 'rgba(255, 255, 255, 0.0)'};
//   padding: 10px;
//   align-self: center;
// `;
