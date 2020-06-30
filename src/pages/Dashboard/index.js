import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';
// import Icon from '@expo/vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import Stars from 'react-native-stars';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';

import ModalRadio from '../../components/ModalRadio';
import Star from '../../components/Star';
import StarExample from '../../components/StarExample';

import {
  Container,
  Content,
  ContentView,
  ContentListView,
  ContetnListImage,
  Title,
  ContentStart,
  ContentFooter,
  ContentFooterTextValue,
  ContentFooterReviews,
  InputSearch,
} from './styles';
import user from '../../assets/user.png';

import api from '../../services/api';
import Header from '../../components/Header';

import {getAdminRequest} from '../../store/modules/admin/actions';

const numStars = 5;

export default function Dashboard() {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const [image, setImage] = useState('');
  const [chaves, setChaves] = useState('');
  const [checked, setChecked] = useState('first');
  const [loading, setLoading] = useState(false);
  const [dataComment, setDataComment] = useState([]);
  const [ratingData, setRatingData] = useState(0);

  let rating = [];
  const dispatch = useDispatch();

  const [dataSearch, setDataSearch] = useState([]);
  const [usersList] = dataUsers;

  const [name, setName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadDados();
    });
    loadDados();
  }, []);

  async function loadDados() {
    setLoading(true);
    await api
      .get('root')
      .then(res => setDataUsers(res.data))
      .catch(err => console.log('Error', err));

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  async function handleRequestProfile(id) {
    navigation.navigate('RequestProfile', {id});
  }

  for (let x = 1; x <= numStars; x++) {
    rating.push(
      <TouchableOpacity key={x} activeOpacity={0.9}>
        <Star filled={x <= ratingData ? true : false} size={18} />
      </TouchableOpacity>,
    );
  }

  return (
    <Container>
      {/* Header da Aplicação */}
      <Header
        navigation={navigation}
        title="RANKING GENERAL"
        buttonFil={true}
        buttonSerc={true}
        nav={navigation}
      />

      {loading ? (
        <ActivityIndicator size={50} color="#222" />
      ) : (
        <Content>
          <FlatList
            data={dataUsers}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item)}
            renderItem={({item}) => (
              <ContentListView onPress={() => handleRequestProfile(item._id)}>
                {item.file === '' ? (
                  <ContetnListImage source={user} />
                ) : (
                  <ContetnListImage source={{uri: item.url}} />
                )}

                <ContentView>
                  <Title> {item.name} </Title>
                  <StarExample rating={item.avaliacao.rating} size={20} />
                  <ContentFooter>
                    <ContentFooterTextValue>
                      {parseFloat(item.avaliacao.media).toFixed(1)}/10
                    </ContentFooterTextValue>
                    <ContentFooterReviews>
                      {item.avaliacao.quantity} valoraciones
                    </ContentFooterReviews>
                  </ContentFooter>
                </ContentView>
              </ContentListView>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
