import React, {useState, useEffect} from 'react';
import {FlatList, Text, AsyncStorage, ActivityIndicator} from 'react-native';
// import Icon from '@expo/vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import Stars from 'react-native-stars';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';

import ModalRadio from '../../components/ModalRadio';

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

  const dispatch = useDispatch();

  // const adminUser = useSelector(state => state.admin.adminUser);
  // const loadingGet = useSelector(state => state.admin.loadingGet);

  const [dataSearch, setDataSearch] = useState([]);

  const [name, setName] = useState('');

  const navigation = useNavigation();

  // useEffect(() => {
  //   dispatch(getAdminRequest());
  // }, [dispatch]);

  // useEffect(() => {
  //   async function loadData() {
  //     const name = await AsyncStorage.getItem('@login:name');
  //     const email = await AsyncStorage.getItem('@login:email');
  //     const photo = await AsyncStorage.getItem('@login:photo');

  //     // console.log('NAME => ', name, 'EMAIL => ', email, 'PHOTO => ', photo);
  //   }

  //   loadData();
  // }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadDados();
    });
    // loadDados();
  }, [navigation]);

  async function loadDados() {
    setLoading(true);
    await api
      .get('admin')
      .then(res => setDataUsers(res.data))
      .catch(err => console.log('Error'));

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  async function handleRequestProfile(id) {
    navigation.navigate('RequestProfile', {id});
  }

  useEffect(() => {
    async function loadComment() {
      dataUsers.map(
        async item =>
          await api
            .get(`comments/${item._id}`)
            .then(response => setDataComment(response.data))
            .catch(err => console.log('err', err)),
      );
      // const response = await api.get(`comments/${id}`);
      // setDataComment(response.data);
    }

    loadComment();
  }, [dataUsers]);

  // async function searchList() {
  //   // const response = await api.get(`admin/${name}`);
  //   await api
  //     .get(`admin/${name}`)
  //     .then(res => setDataSearch(res.data), console.log('RES => ', res))
  //     .catch(err => console.log(err));
  //   // console.log('search => ', response.data);

  //   setVisibleInput(false);
  // }

  // console.log('DATAUSER => ', adminUser.data);
  // console.log('LOADING => ', !loadingGet);
  return (
    <Container>
      {/* Header da Aplicação */}
      <Header
        navigation={navigation}
        title="RANKING GENERAL"
        buttonFil={true}
        buttonSerc={true}
      />
      {/* <InputSearch
        visible={true}
        value={name}
        onChangeText={setName}
        onSubmitEditing={searchList}
      /> */}
      {/* <InputSearch visible={visibleInput} /> */}
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
                  <ContetnListImage
                    source={{
                      uri: `https://upload-freela.herokuapp.com/admin/${
                        item.file
                      }`,
                    }}
                  />
                )}
                {/* <ContetnListImage
                  source={{
                    uri: `https://upload-freela.herokuapp.com/admin/${
                      item.file
                    }`,
                  }}
                /> */}
                <ContentView>
                  <Title> {item.name} </Title>
                  <ContentFooter>
                    <ContentFooterTextValue>9.6/10</ContentFooterTextValue>
                    <ContentFooterReviews>
                      {dataComment.length} valoraciones
                    </ContentFooterReviews>
                  </ContentFooter>

                  <Stars
                    default={item.stars}
                    count={5}
                    half={true}
                    disabled={true}
                    // update={val => setRating(val)}
                    // starSize={50}
                    fullStar={
                      <Iconss name={'star'} size={30} color="#D3CD38" />
                    }
                    emptyStar={
                      <Iconss
                        name={'star-outline'}
                        size={30}
                        color="#D3CD38"
                        // style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                      />
                    }
                    halfStar={
                      <Iconss
                        name={'star-half'}
                        color="#D3CD38"
                        size={30}
                        // style={[styles.myStarStyle]}
                      />
                    }
                  />
                </ContentView>
              </ContentListView>
            )}
          />
        </Content>
      )}
    </Container>
  );
}

// Dashboard.navigationOptions = {
// //   drawerIcon: ({tintColor}) => <Icon name="home" size={30} color="#000" />,,
// // };
