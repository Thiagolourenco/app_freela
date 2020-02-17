import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
// import CircleCheckBox from "react-native-circle-checkbox";
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  ContetnListImage,
  StarView,
  ContentFooter,
  ValueNote,
  ReviewsText,
  Content,
  ListProfile,
  ListProfileImage,
  ListProfileView,
  ListProfileName,
  ListProfileStar,
  ListProfileComent,
  LikesText,
  ViewList,
  LikeView,
  HeaderView,
  Icons,
  Header,
  ButtonArrowLeft,
  ButtonInfo,
  ButtonInfoText,
  TitleModal,
  SelectRelevane,
  ButtonAppli,
  ButtonView,
  ButtonText,
  ButtonCheckCircle,
  CircleCheck,
} from './styles';
// import api from "../../services/api";

// // import Header from "../;../components/Header";
// import ModalFilterProfile from "../../components/ModalFilterProfile";
// import ModalFilterProfileComment from "../../components/ModalFilterProfileComment";

export default function RequestProfile({navigation}) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleRele, setVisibleRele] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  const [name, setName] = useState('');

  const [dataComment, setDataComment] = useState([]);

  // function loadProfile() {
  //   // .child("-Lzt7y7V0INJctWxebKn")
  //   const exemplo = "-Lzt7y7V0INJctWxebKn";

  //   try {
  //     api
  //       .database()
  //       .ref("users/", exemplo)
  //       .once("value", snapshot => {
  //         // console.log("SNAPSHOT -> ", snapshot);
  //         // setDataProfile(snapshot);
  //         const listUsers = [];
  //         snapshot.forEach(childItem => {
  //           let item = childItem.val().name;
  //           listUsers.push(item);
  //         });

  //         console.log(listUsers);
  //         setDataProfile(listUsers);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // var commentsRef = firebase.database().ref('post-comments/' + postId);
  // commentsRef.on('child_changed', function(data) {
  //   setCommentValues(postElement, data.key, data.val().text, data.val().author);
  // });

  function handleGoBack() {
    navigation.navigate('Dashboard');
  }

  function handleInfoModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
  }

  function handleFilter() {
    setVisibleRele(true);
  }

  function closeModalFilter() {
    setVisibleRele(false);
  }

  // function handleNavigateReviewStar() {
  //   navigation.navigate("ReviewStar", { chaves });
  // }

  return (
    <Container>
      {/* <Header navigation={navigation} title="Request Profile" /> */}
      {dataProfile.map(i => (
        <Text>{JSON.stringify(i)}</Text>
      ))}
      <Header>
        <ButtonArrowLeft onPress={handleGoBack}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </ButtonArrowLeft>
      </Header>
      <Content>
        <HeaderView>
          <Title>Thiago</Title>
        </HeaderView>
        <ContetnListImage />
        <StarView />
        <ContentFooter>
          <ValueNote>9.6/10</ValueNote>
          <ReviewsText>5.425 reviews</ReviewsText>
          <RectButton onPress={handleFilter}>
            <Text>asd</Text>
          </RectButton>

          {/* Modal Filter */}
        </ContentFooter>
        <FlatList
          data={dataList}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <ListProfile>
              <ListProfileImage />
              <ListProfileView>
                <ViewList>
                  <ListProfileStar />

                  <ListProfileName> Thiago </ListProfileName>
                  <ListProfileComent> Vai da certo</ListProfileComent>
                </ViewList>
                <LikeView>
                  <LikesText>25</LikesText>
                </LikeView>
              </ListProfileView>
            </ListProfile>
          )}
        />
      </Content>
    </Container>
  );
}
