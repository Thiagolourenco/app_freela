import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  FlatList,
  Text,
  Modal,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
// import CircleCheckBox from "react-native-circle-checkbox";
import Icon from 'react-native-vector-icons/MaterialIcons';
import socketio from 'socket.io-client';
import {useRoute, useNavigation} from '@react-navigation/native';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import Stars from 'react-native-stars';

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
  ContainerModalCommet,
} from './styles';

import ModalFilterProfile from '../../components/ModalFileProfile';
import RadioButton from '../../components/RadioButton';
// import
// // import Header from "../;../components/Header";
// import ModalFilterProfile from "../../components/ModalFilterProfile";
// import ModalFilterProfileComment from "../../components/ModalFilterProfileComment";

const numStart = 5;

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
  const [likes, setLikes] = useState(0);
  const [link, setLink] = useState('http://www.google.com');
  const [imageProfile, setImageProfie] = useState('');
  const [valoracioness, setValoracioness] = useState(0);
  const [medias, setMedias] = useState(0);

  const [file, setFile] = useState('');
  const [visibleOrdernar, setVisibleOrdernar] = useState(false);

  const [dataComment, setDataComment] = useState([]);

  const socket = useMemo(
    () =>
      socketio('https://upload-freela.herokuapp.com', {query: {comment: id}}),
    [id],
  );

  useEffect(() => {
    async function updateLoading() {
      const media = numStart / dataComment.length;

      // console.log('MEDIA', dataComment.length, parseInt(media));
      await api
        .put(`admin/${id}`, {
          rating: 2,
          valoricienes: dataComment.length,
          media: media,
        })
        .then(res => console.log('OK'))
        .catch(err => console.log('ERRO', err));
    }

    updateLoading();
  }, [numStart, dataComment]);

  useEffect(() => {
    socket.on('comment', newComment => {
      setDataComment([newComment, ...dataComment]);
    });

    socket.on('like', like => {
      setDataComment(
        dataComment.map(comment => (comment._id === like._id ? like : comment)),
      );
    });
  }, [socket, dataComment]);

  useEffect(() => {
    async function loadDataUsers() {
      const response = await api.get(`admin/${id}`);
      // setDataProfile(response.data);

      setName(response.data.name);
      setFile(response.data.file);
      setMedias(response.data.media);
      setValoracioness(response.data.valoricienes);
      // setLink(response.data.link);
      setImageProfie(response.data.urls);

      console.log('NAME => ', response.data.file);
    }

    loadDataUsers();
  }, []);

  useEffect(() => {
    async function loadComment() {
      const response = await api.get(`comments/${id}`);
      setDataComment(response.data);
    }

    loadComment();
  }, []);

  // async function loadComment() {
  //   // console.log("LOAD COMMENT -> ", response.data);
  // }

  // const socket = useMemo(() =>

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
    setVisibleOrdernar(true);
  }
  //
  function closeModalFilter() {
    setVisibleOrdernar(false);
  }

  function handleNavigateReviewStar() {
    navigation.navigate('ReviewsStar', {id});
    setVisible(false);
  }

  async function handleLikeComments(id) {
    const {name, photoUrl, comment, stars} = dataComment;

    // setLikes(++);
    await api
      .post(`comments/${id}/like`, {name, photoUrl, comment, likes, stars})
      .then(res => console.log('OK'))
      .catch(err => console.log('ERRO => ', err));
  }

  function handleLink(url) {
    // await Linking.openURL(link);
    console.log('URL', url);
    // Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  }
  // const OpenURLButton = ({ url, children }) => {
  //   const handlePress = useCallback(async () => {
  //     // Checking if the link is supported for links with custom URL scheme.
  //     const supported = await Linking.canOpenURL(url);

  //     if (supported) {
  //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
  //       // by some browser in the mobile
  //       await Linking.openURL(url);
  //     } else {
  //       alert(`Don't know how to open this URL: ${url}`);
  //     }
  //   }, [url]);

  //   return <ButtonInfo onPress={onPress}>
  //   <ButtonInfoText>Ir al canal</ButtonInfoText>
  // </ButtonInfo>
  // };

  return (
    <Container>
      {/* <Header navigation={navigation} title="Request Profile" /> */}

      {/* <Header>
        <ButtonArrowLeft onPress={handleGoBack}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </ButtonArrowLeft>
      </Header> */}
      <Content>
        <HeaderView>
          <ButtonArrowLeft onPress={handleGoBack}>
            <Icon name="arrow-back" size={30} color="#222" />
          </ButtonArrowLeft>
          <Title>{name}</Title>
          <Icons
            name="more-vert"
            size={30}
            style={{marginRight: 10}}
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
            <ButtonInfo onPress={() => handleLink(link)}>
              <ButtonInfoText>Ir al canal</ButtonInfoText>
            </ButtonInfo>
          </ModalFilterProfile>
          <Modal visible={visibleOrdernar} transparent={true}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: '80%',
                height: 200,
                marginTop: 200,
                backgroundColor: '#ccc',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  fontWeight: '600',
                  marginBottom: 20,
                  marginLeft: 10,
                  alignSelf: 'flex-start',
                }}>
                Ordenar reseñas por
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  width: 150,
                  justifyContent: 'center',
                }}>
                <RadioButton checked={true} onPress={() => {}} />
                <Text>Más relevantes</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: 150,
                }}>
                <RadioButton checked={true} onPress={() => {}} />
                <Text>Más recientes</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: 150,
                }}>
                <RadioButton checked={true} onPress={() => {}} />
                <Text>Valoraciones positivas</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  alignSelf: 'flex-end',
                }}>
                <TouchableOpacity onPress={closeModalFilter}>
                  <Text
                    style={{fontSize: 16, color: '#4834d4', marginRight: 15}}>
                    CANCELAR
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{fontSize: 16, color: '#4834d4', marginRight: 20}}>
                    APLICAR
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </HeaderView>
        <ContetnListImage source={{uri: imageProfile}} />
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
          <ValueNote>{parseInt(medias)}/10</ValueNote>
          <ReviewsText>{dataComment.length} valoraciones</ReviewsText>
          <RectButton onPress={handleFilter}>
            <Icon name="sort" size={20} color="#000" />
          </RectButton>
        </ContentFooter>
        <FlatList
          data={dataComment}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                // width: '100%',
                marginTop: 30,
                marginLeft: 20,
                height: 80,
                width: '80%',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#ccc',
                  borderRadius: 15,
                  margin: 5,
                }}
                source={{uri: item.photoUrl}}
              />
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={{fontSize: 11, fontWeight: '600'}}>
                  {item.name}
                </Text>

                <Stars
                  default={item.rating}
                  count={5}
                  half={true}
                  // update={val => setRating(val)}
                  // starSize={50}
                  fullStar={<Iconss name={'star'} size={20} color="#ffd203" />}
                  emptyStar={
                    <Iconss
                      name={'star-outline'}
                      size={20}
                      color=" #ffd203"
                      // style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    />
                  }
                  halfStar={
                    <Iconss
                      name={'star-half'}
                      color="#ffd203"
                      size={20}
                      // style={[styles.myStarStyle]}
                    />
                  }
                />

                <Text
                  style={{
                    fontSize: 12,
                    color: '#222',
                    fontWeight: '600',
                    width: '80%',
                  }}
                  numberOfLines={10}>
                  {item.comment}
                </Text>
              </View>
              <View style={{left: '140%'}}>
                <TouchableOpacity
                  onPress={() => handleLikeComments(item._id)}
                  style={{alignSelf: 'flex-end'}}>
                  <Icon name="thumb-up" size={20} color="#ccc" />
                  <LikesText>{item.likes}</LikesText>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </Content>
    </Container>
  );
}
