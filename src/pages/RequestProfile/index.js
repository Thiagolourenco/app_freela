import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  FlatList,
  Text,
  Modal,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
// import CircleCheckBox from "react-native-circle-checkbox";
import Icon from 'react-native-vector-icons/MaterialIcons';
import socketio from 'socket.io-client';
import {useRoute, useNavigation} from '@react-navigation/native';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import Stars from 'react-native-stars';
import DateFormated from '../../components/DateFormated';

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
import Star from '../../components/Star';
import StarExample from '../../components/StarExample';
// import
// // import Header from "../;../components/Header";
// import ModalFilterProfile from "../../components/ModalFilterProfile";
// import ModalFilterProfileComment from "../../components/ModalFilterProfileComment";

const numStars = 5;

export default function RequestProfile() {
  const routes = useRoute();
  const navigation = useNavigation();
  let stars = [];

  const id = routes.params.id;

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [likes, setLikes] = useState(0);
  const [link, setLink] = useState('');
  const [imageProfile, setImageProfie] = useState('');
  const [valoracioness, setValoracioness] = useState(0);
  const [medias, setMedias] = useState(0);
  // const [rating, setRating] = useState(0);
  const [file, setFile] = useState('');
  const [mediaTeste, setMediaTest] = useState(0);
  const [estrelas, setEstrelas] = useState(0);

  const [datass, setDatass] = useState([]);

  const [visibleOrdernar, setVisibleOrdernar] = useState(false);
  const [description, setDescription] = useState('');

  const [mediaTestde, setMediaTestde] = useState(8);
  const [valorComentario, setValorComentario] = useState(3);
  const [starsTett, setStarsTett] = useState(3);

  const [mediaRating, setMediaRating] = useState(0);
  const [totalMedia, setTotalMedia] = useState(0);
  const [dataComment, setDataComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateTest, setUpdateTest] = useState([]);

  // valores testes
  const [valorTotalMediaTest, setValorTotalMediaTest] = useState(0);
  const [valorRatingTest, setValorRatingTest] = useState(0);
  const [valorValoraciones, setValorValoraciones] = useState(0);

  const socket = useMemo(
    () =>
      socketio('https://upload-freela.herokuapp.com', {query: {comment: id}}),
    [id],
  );

  useEffect(() => {
    if (isNaN(valorTotalMediaTest)) {
      setValorTotalMediaTest(0);
    } else {
      console.log('FALSE');
    }
  }, [valorTotalMediaTest]);

  useEffect(() => {
    async function loadDataUsers() {
      setLoading(true);

      await api
        .get(`root/${id}`)
        .then(res => setDatass(res.data))
        .catch(err => console.log('REROR'));

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    loadDataUsers();
  }, [datass]);

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
    async function loadComment() {
      const response = await api.get(`comments/${id}`);
      setDataComment(response.data);
    }

    loadComment();
  }, []);

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

  function handleNavigationDescri() {
    navigation.navigate('Description', {description});
    setVisible(false);
  }

  function handleNavigateReviewStar() {
    navigation.navigate('ReviewsStar', {id});
    setVisible(false);
  }

  async function handleLikeComments(id) {
    const {name, photoUrl, comment, stars} = dataComment;

    await api
      .post(`comments/${id}/like`, {name, photoUrl, comment, likes, stars})
      .then(res => console.log('OK'))
      .catch(err => console.log('ERRO => ', err));
  }

  function handleLink() {
    // await Linking.openURL(link);

    Linking.openURL(link).catch(err => console.log("Couldn't load page", err));
    setVisible(false);
  }

  for (let x = 1; x <= numStars; x++) {
    stars.push(
      <TouchableOpacity key={x} activeOpacity={0.9}>
        <Star filled={x <= 5 ? true : false} size={30} />
      </TouchableOpacity>,
    );
  }

  console.log('RATING', datass.avaliacao);

  return (
    <Container>
      <Content>
        <HeaderView>
          <ButtonArrowLeft onPress={handleGoBack}>
            <Icon name="arrow-back" size={30} color="#222" />
          </ButtonArrowLeft>
          <Title>{datass.name}</Title>
          <Icons
            name="more-vert"
            size={30}
            style={{marginRight: 10}}
            color="#000"
            onPress={handleInfoModal}
          />
          <ModalFilterProfile
            visible={visible}
            onRequestClose={() => setVisible(false)}>
            <ButtonInfo>
              <ButtonInfoText onPress={handleNavigationDescri}>
                Informaciõn
              </ButtonInfoText>
            </ButtonInfo>
            <ButtonInfo>
              <ButtonInfoText onPress={handleNavigateReviewStar}>
                Dar valoración
              </ButtonInfoText>
            </ButtonInfo>
            <ButtonInfo>
              <ButtonInfoText onPress={handleLink}>Ir al canal</ButtonInfoText>
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
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 8}}>
          {stars}
        </View>
        <ContentFooter>
          <ValueNote>{10}/10</ValueNote>
          <ReviewsText>{5} valoraciones</ReviewsText>
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
                width: '100%',
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 11, fontWeight: '600'}}>
                    {item.name}
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <StarExample rating={item.rating} size={15} />
                  <DateFormated data={item.createdAt} />
                </View>

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
              <View style={{left: '45%'}}>
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
