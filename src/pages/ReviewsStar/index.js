import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import {useRoute, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux';

import {
  Container,
  Header,
  Title,
  ButtonArrowBack,
  ButtonPublic,
  ButtonPublicText,
  ProfileView,
  TextProfile,
  ViewInfoProfile,
  ViewProfileE,
  ViewHeader,
  InputComment,
  InputView,
  StarView,
} from './styles';
import api from '../../services/api';
import Star from '../../components/Star';
import ModalLoading from '../../components/ModalLoading';

const numStars = 5;

export default function ReviewsStar() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [visible, setVisible] = useState(false);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [photoUrl, setPhoto] = useState('');

  let stars = [];

  // const [stars, setRating] = useState(0);
  const routes = useRoute();

  const navigation = useNavigation();

  const admincomment = routes.params.id;

  const userD = useSelector(state => state.user.userInfo);

  // useEffect(() => {
  //   async function loadDados() {
  //     const username = await AsyncStorage.getItem('@userinfo:name');
  //     const useremail = await AsyncStorage.getItem('@userinfo:email');
  //     const userphoto = await AsyncStorage.getItem('@userinfo:photo');

  //     //   console.log('NAME => ', name, 'EMAIL => ', email, 'PHOTO => ', photo);
  //     setName(username);
  //     setEmail(useremail);
  //     setPhoto(userphoto);
  //   }

  //   loadDados();
  // }, []);
  async function handleSubmitComment() {
    setVisible(true);

    const name = userD.name;
    const photoUrl = userD.photoUrl;

    await api
      .post('comments', {name, photoUrl, comment, rating, admincomment})
      .then(res => console.log('OK'))
      .catch(err => console.log('err', err));

    // setTimeout(() => {
    //   setVisible(false)
    // }, 1800)

    setTimeout(() => {
      setVisible(false);
      navigation.navigate('RequestProfile');
    }, 2000);
  }

  function handleClose() {
    navigation.navigate('RequestProfile');
  }

  function rate(star) {
    setRating(star);
    // console.log('STAR', star);
  }

  for (let x = 1; x <= numStars; x++) {
    stars.push(
      <TouchableOpacity key={x} onPress={() => rate(x)} activeOpacity={0.9}>
        <Star filled={x <= rating ? true : false} size={35} />
      </TouchableOpacity>,
    );
  }

  return (
    <Container>
      <Header>
        <ViewHeader>
          <ButtonArrowBack>
            <Icon
              name="clear"
              size={30}
              color="#fff"
              onPress={handleClose}
              style={{marginTop: 5}}
            />
          </ButtonArrowBack>
          <ProfileView>
            <ViewProfileE />
            <ViewInfoProfile>
              <TextProfile>Profile Name</TextProfile>
              <Title>Valora tu experiencia</Title>
            </ViewInfoProfile>
          </ProfileView>
        </ViewHeader>
        <ButtonPublic>
          <ButtonPublicText onPress={handleSubmitComment}>
            Publicar
          </ButtonPublicText>
        </ButtonPublic>
      </Header>
      <Text
        style={{
          fontSize: 20,
          color: '#ffd203',
          fontWeight: '600',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        Rating <Text style={{fontSize: 25}}>{rating}</Text>/5
      </Text>
      <StarView>{stars}</StarView>

      <InputView>
        <InputComment
          placeholder="Describe tu experiencia"
          value={comment}
          onChangeText={setComment}
          onSubmitEditing={handleSubmitComment}
          returnKeyType="send"
          multiline={true}
        />
      </InputView>

      <ModalLoading
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </Container>
  );
}
