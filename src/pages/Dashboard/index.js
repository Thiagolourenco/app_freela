import React, {useState, useEffect} from 'react';
import {FlatList, Text, AsyncStorage} from 'react-native';
// import Icon from '@expo/vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

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

export default function Dashboard({navigation}) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const [image, setImage] = useState('');
  const [chaves, setChaves] = useState('');

  const ref = api.firestore().collection('dados');

  useEffect(() => {
    loadDados();
  }, []);

  async function loadDados() {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {country, desc, email, name, sports} = doc.data();
        list.push({
          id: doc.id,
          country,
          desc,
          email,
          name,
          sports,
        });
      });
      setDataUsers(list);
    });
  }
  // async function dataUser() {
  //   const username = await AsyncStorage.getItem("@login:username");
  //   const email = await AsyncStorage.getItem("@login:email");
  //   const photoUrl = await AsyncStorage.getItem("@login:imageUrl");

  //   console.log(" nome -> ", username);
  //   console.log("email -> ", email);
  //   console.log("photo -> ", photoUrl);
  // }

  // useEffect(() => {
  //   dataUser();
  // }, []);

  async function handleRequestProfile(id) {
    navigation.navigate('RequestProfile', {id});
  }

  console.log(dataUsers);
  return (
    <Container>
      {/* Header da Aplicação */}
      <Header
        navigation={navigation}
        title="RANKING GENERAL"
        buttonFil={true}
        buttonSerc={true}
      />

      <InputSearch visible={visibleInput} />
      <Content>
        <FlatList
          data={dataUsers}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <ContentListView onPress={() => handleRequestProfile(item.id)}>
              <ContetnListImage />
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
