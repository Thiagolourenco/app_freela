import React, {useState, useEffect} from 'react';
import {FlatList, Text, AsyncStorage} from 'react-native';
// import Icon from '@expo/vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';

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

export default function Dashboard() {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const [image, setImage] = useState('');
  const [chaves, setChaves] = useState('');
  const [checked, setChecked] = useState('first');

  const [dataSearch, setDataSearch] = useState([]);

  const [name, setName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      const name = await AsyncStorage.getItem('@login:name');
      const email = await AsyncStorage.getItem('@login:email');
      const photo = await AsyncStorage.getItem('@login:photo');

      console.log('NAME => ', name, 'EMAIL => ', email, 'PHOTO => ', photo);
    }

    loadData();
  }, []);

  useEffect(() => {
    loadDados();
  }, []);

  async function loadDados() {
    await api
      .get('admin')
      .then(res => setDataUsers(res.data))
      .catch(err => console.log('Error'));
  }

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
      <Content>
        <FlatList
          data={dataUsers}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <ContentListView onPress={() => handleRequestProfile(item._id)}>
              <ContetnListImage
                source={{uri: `http://10.0.2.2:3333/files/${item.file}`}}
              />
              <ContentView>
                <Title> {item.name} </Title>
                <ContentFooter>
                  <ContentFooterTextValue>9.6/10</ContentFooterTextValue>
                  <ContentFooterReviews>365 Reviews</ContentFooterReviews>
                </ContentFooter>
              </ContentView>
            </ContentListView>
          )}
        />
      </Content>
    </Container>
  );
}

// Dashboard.navigationOptions = {
// //   drawerIcon: ({tintColor}) => <Icon name="home" size={30} color="#000" />,,
// // };
