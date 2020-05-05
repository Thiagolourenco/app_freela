import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import {useRoute, useNavigation} from '@react-navigation/native';

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

const numStars = 5;

export default function ReviewsStar() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('Julen');
  const [email, setEmail] = useState('julen@gmail.com');
  const [photoUrl, setPhoto] = useState(
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aficionados.com.br%2Fnaruto-shippuden-fillers%2F&psig=AOvVaw2TFPrV6214WIk61TVjVMrc&ust=1585657575518000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCav_uYwugCFQAAAAAdAAAAABAD',
  );

  let stars = [];

  // const [stars, setRating] = useState(0);
  const routes = useRoute();

  const navigation = useNavigation();

  const admincomment = routes.params.id;

  useEffect(() => {
    async function loadDados() {
      const name = await AsyncStorage.getItem('@login:name');
      const email = await AsyncStorage.getItem('@login:email');
      const photo = await AsyncStorage.getItem('@login:photo');

      // setName(name);
      // setEmail(email);
      // setPhoto(photo);
    }

    loadDados();
  }, []);

  async function handleSubmitComment() {
    await api
      .post('comments', {name, photoUrl, comment, rating, admincomment})
      .then(res => console.log('OK'))
      .catch(err => console.log('err', err));

    setTimeout(() => {
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
        <Star filled={x <= rating ? true : false} />
      </TouchableOpacity>,
    );
  }

  console.log('RATIONG -> ', rating);
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
    </Container>
  );
}
