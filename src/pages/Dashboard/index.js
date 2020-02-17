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

// import api from '../../services/api';
import Header from '../../components/Header';

export default function Dashboard() {
  const navigation = useNavigation();

  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const [image, setImage] = useState('');
  const [chaves, setChaves] = useState('');

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

  async function handleRequestProfile() {
    navigation('RequestProfile');
  }
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
          data={dataList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <ContentListView onPress={handleRequestProfile}>
              <ContetnListImage />
              <ContentView>
                <Title> Thiago </Title>

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
