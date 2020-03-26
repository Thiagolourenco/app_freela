import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
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

export default function ReviewsStar({navigation}) {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('Thiago');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhoto] = useState(
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcanaltech.com.br%2Fespaco%2Ffotografo-combinou-50-mil-imagens-individuais-e-gerou-esta-incrivel-foto-da-lua-133443%2F&psig=AOvVaw0cqTkEkJCOyEOIHI-WGeDy&ust=1585313397149000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCBjY-XuOgCFQAAAAAdAAAAABAD',
  );

  const [stars, setRating] = useState(0);
  const routes = useRoute();

  const admincomment = routes.params.id;

  useEffect(() => {
    async function loadDados() {
      const name = await AsyncStorage.getItem('@login:name');
      const email = await AsyncStorage.getItem('@login:email');
      const photo = await AsyncStorage.getItem('@login:photo');
    }

    loadDados();
  }, []);

  async function handleSubmitComment() {
    await api
      .post('comments', {name, photoUrl, comment, stars, admincomment})
      .then(res => console.log('OK'))
      .catch(err => console.log('err', err));
  }

  function handleClose() {
    navigation.navigate('RequestProfile');
  }

  console.log('chaves', admincomment);
  return (
    <Container>
      <Header>
        <ViewHeader>
          <ButtonArrowBack>
            <Icon name="clear" size={30} color="#fff" onPress={handleClose} />
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

      <StarView>
        <Stars
          default={0}
          count={5}
          half={true}
          update={val => setRating(val)}
          // starSize={50}
          fullStar={<Icons name={'star'} size={35} color="#D3CD38" />}
          emptyStar={
            <Icons
              name={'star-outline'}
              size={35}
              color="#D3CD38"
              // style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <Icons
              name={'star-half'}
              color="#D3CD38"
              size={35}
              // style={[styles.myStarStyle]}
            />
          }
        />
      </StarView>

      <InputView>
        <InputComment
          placeholder="Describe tu experiencia"
          value={comment}
          onChangeText={setComment}
          onSubmitEditing={handleSubmitComment}
          returnKeyType="send"
        />
      </InputView>
    </Container>
  );
}
