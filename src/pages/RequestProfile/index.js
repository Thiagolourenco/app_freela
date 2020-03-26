import React, {useState, useEffect} from 'react';
import {FlatList, Text, Modal} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
// import CircleCheckBox from "react-native-circle-checkbox";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useRoute, useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import Stars from 'react-native-stars';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';

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

import ModalFilterProfile from '../../components/ModalFileProfile';
// // import Header from "../;../components/Header";
// import ModalFilterProfile from "../../components/ModalFilterProfile";
// import ModalFilterProfileComment from "../../components/ModalFilterProfileComment";

export default function RequestProfile() {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];
  const routes = useRoute();
  const navigation = useNavigation();

  const id = routes.params.id;

  const [visible, setVisible] = useState(false);
  const [visibleRele, setVisibleRele] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  const [name, setName] = useState('');

  const [dataComment, setDataComment] = useState([]);

  // useEffect(() => {
  //   loadProfile();
  // }, []);

  // async function loadProfile() {
  //   const ref = api
  //     .firestore()
  //     .collection('dados')
  //     .doc(id);
  //   ref.get().then(doc => {
  //     setName(doc.data().name);
  //   });
  // }

  // useEffect(() => {
  //   loadComment();
  // }, []);

  async function loadComment() {}

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
    navigation.goBack();
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
  //
  function closeModalFilter() {
    setVisibleRele(false);
  }

  function handleNavigateReviewStar() {
    navigation.navigate('ReviewsStar', {id});
    setVisible(false);
  }

  console.log('NAME => ', dataComment);
  return (
    <Container>
      {/* <Header navigation={navigation} title="Request Profile" /> */}

      <Header>
        <ButtonArrowLeft onPress={handleGoBack}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </ButtonArrowLeft>
      </Header>
      <Content>
        <HeaderView>
          <Title>{name}</Title>
          <Icons
            name="more-vert"
            size={30}
            color="#000"
            onPress={handleInfoModal}
          />
          <ModalFilterProfile visible={visible}>
            <ButtonInfo>
              <ButtonInfoText>Informaciõn</ButtonInfoText>
            </ButtonInfo>
            <ButtonInfo>
              <ButtonInfoText onPress={handleNavigateReviewStar}>
                Dar valoración
              </ButtonInfoText>
            </ButtonInfo>
            <ButtonInfo onPress={handleCloseModal}>
              <ButtonInfoText>Ir al canal</ButtonInfoText>
            </ButtonInfo>
          </ModalFilterProfile>
        </HeaderView>
        <ContetnListImage />
        <Stars
          default={5}
          count={5}
          half={true}
          // update={val => setRating(val)}
          // starSize={50}
          fullStar={<Iconss name={'star'} size={35} color="#D3CD38" />}
          emptyStar={
            <Iconss
              name={'star-outline'}
              size={35}
              color="#D3CD38"
              // style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <Iconss
              name={'star-half'}
              color="#D3CD38"
              size={35}
              // style={[styles.myStarStyle]}
            />
          }
        />
        <ContentFooter>
          <ValueNote>9.6/10</ValueNote>
          <ReviewsText>5.425 reviews</ReviewsText>
          <RectButton onPress={handleFilter}>
            <Text>asd</Text>
          </RectButton>
        </ContentFooter>
        <FlatList
          data={dataComment}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <ListProfile key={item._id}>
              <ListProfileImage source={{uri: item.photo}} />
              <ListProfileView>
                <ViewList>
                  <ListProfileStar>
                    <Stars
                      default={item.rating}
                      count={5}
                      half={true}
                      // update={val => setRating(val)}
                      // starSize={50}
                      fullStar={
                        <Iconss name={'star'} size={35} color="#D3CD38" />
                      }
                      emptyStar={
                        <Iconss
                          name={'star-outline'}
                          size={35}
                          color="#D3CD38"
                          // style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                        />
                      }
                      halfStar={
                        <Iconss
                          name={'star-half'}
                          color="#D3CD38"
                          size={35}
                          // style={[styles.myStarStyle]}
                        />
                      }
                    />
                  </ListProfileStar>

                  <ListProfileName> {item.name} </ListProfileName>
                  <ListProfileComent> {item.comment}</ListProfileComent>
                </ViewList>
                <LikeView>
                  <Icon name="thumb-up" size={25} color="#ccc" />
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
