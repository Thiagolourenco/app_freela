import React, {useState, useEffect} from 'react';
import {FlatList, Text, AsyncStorage, ActivityIndicator} from 'react-native';
// import Icon from '@expo/vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

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

  const dispatch = useDispatch();

  const adminUser = useSelector(state => state.admin.adminUser);
  const loadingGet = useSelector(state => state.admin.loadingGet);

  const [dataSearch, setDataSearch] = useState([]);

  const [name, setName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getAdminRequest());
  }, [dispatch]);

  // useEffect(() => {
  //   async function loadData() {
  //     const name = await AsyncStorage.getItem('@login:name');
  //     const email = await AsyncStorage.getItem('@login:email');
  //     const photo = await AsyncStorage.getItem('@login:photo');

  //     // console.log('NAME => ', name, 'EMAIL => ', email, 'PHOTO => ', photo);
  //   }

  //   loadData();
  // }, []);

  // useEffect(() => {
  //   loadDados();
  // }, []);

  // async function loadDados() {
  //   await api
  //     .get('admin')
  //     .then(res => setDataUsers(res.data))
  //     .catch(err => console.log('Error'));
  // }

  async function handleRequestProfile(id) {
    navigation.navigate('RequestProfile', {id});
  }

  // async function searchList() {
  //   // const response = await api.get(`admin/${name}`);
  //   await api
  //     .get(`admin/${name}`)
  //     .then(res => setDataSearch(res.data), console.log('RES => ', res))
  //     .catch(err => console.log(err));
  //   // console.log('search => ', response.data);

  //   setVisibleInput(false);
  // }

  console.log('DATAUSER => ', adminUser);
  console.log('LOADING => ', !loadingGet);

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
      {!loadingGet ? (
        <ActivityIndicator size={50} color="#222" />
      ) : (
        <Content>
          <FlatList
            data={adminUser}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item)}
            renderItem={({item}) => <Text>{JSON.stringify(item)}</Text>}
          />
        </Content>
      )}
    </Container>
  );
}

// Dashboard.navigationOptions = {
// //   drawerIcon: ({tintColor}) => <Icon name="home" size={30} color="#000" />,,
// // };
