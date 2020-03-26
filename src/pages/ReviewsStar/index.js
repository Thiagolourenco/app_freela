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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');

  const [rating, setRating] = useState(0);
  const routes = useRoute();

  const chaves = routes.params.id;

  useEffect(() => {
    async function loadDados() {
      const name = await AsyncStorage.getItem('@login:name');
      const email = await AsyncStorage.getItem('@login:email');
      const photo = await AsyncStorage.getItem('@login:photo');
    }

    loadDados();
  }, []);

  function handleSubmitComment() {}

  function handleClose() {
    navigation.navigate('RequestProfile');
  }

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
