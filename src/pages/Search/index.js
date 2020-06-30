import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/AntDesign';

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
  ViewSearch,
  InputSearch,
} from './styles';
import StarExample from '../../components/StarExample';
import user from '../../assets/user.png';

Icon.loadFont();

export default function Search() {
  const [dataUsers, setDataUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

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

  function searchList(search) {
    setSearch(search);
    let text = search;
    let list = dataUsers;
    let filteredName = list.filter(item => {
      return item.name.match(text.toUpperCase());
    });

    console.log('LIST', list);

    if (filteredName.length > 0) {
      setDataUsers(filteredName);
    } else if (text === '') {
      console.log('NO');
    } else {
      console.log('OK');
    }
    // if (!text || text === '') {
    //   setDataUsers(dataUsers);
    // } else if (!Array.isArray(filteredName) && !filteredName.length) {
    //   console.log('ARRAY');
    // } else if (Array.isArray(filteredName)) {
    //   if (filteredName.length > 0 == true) {
    //     setDataUsers(filteredName);
    //   } else {
    //     setDataUsers([]);
    //   }
    // }
    // if (!text || text === '') {
    //         this.props.getRations = filteredName;
    //         this.setState({
    //             rationsFiltered: this.props.rationsList,
    //             noData: true,
    //             search
    //         })
    //     } else if (!Array.isArray(filteredName) && !filteredName.length) {
    //         this.setState({
    //             noData: true,
    //             search
    //         })
    //     } else if (Array.isArray(filteredName)) {
    //         if ((filteredName.length > 0) == true) {
    //             this.setState({
    //                 noData: false,
    //                 rationsFiltered: filteredName,
    //                 search
    //             })
    //         } else {
    //             this.setState({
    //                 noData: true,
    //                 rationsFiltered: [],
    //                 search
    //             })
    //         }

    console.log('FILTER NAME', filteredName);
    // if (!text || text === '') {
    //     this.props.getRations = filteredName;
    //     this.setState({
    //         rationsFiltered: this.props.rationsList,
    //         noData: true,
    //         search
    //     })
    // } else if (!Array.isArray(filteredName) && !filteredName.length) {
    //     this.setState({
    //         noData: true,
    //         search
    //     })
    // } else if (Array.isArray(filteredName)) {
    //     if ((filteredName.length > 0) == true) {
    //         this.setState({
    //             noData: false,
    //             rationsFiltered: filteredName,
    //             search
    //         })
    //     } else {
    //         this.setState({
    //             noData: true,
    //             rationsFiltered: [],
    //             search
    //         })
    //     }
    // }
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <ViewSearch>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            name="arrowleft"
            size={30}
            color="#000"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>

        <InputSearch
          placeholder="search"
          placeholderTextColor="#000"
          value={search}
          onChangeText={text => searchList(text)}
        />
      </ViewSearch>
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
                <ContentFooter>
                  <ContentFooterTextValue>
                    {parseFloat(item.avaliacao.media).toFixed(1)}/10
                  </ContentFooterTextValue>
                  <ContentFooterReviews>
                    {item.avaliacao.quantity} valoraciones
                  </ContentFooterReviews>
                </ContentFooter>
                <StarExample rating={item.avaliacao.rating} size={20} />
              </ContentView>
            </ContentListView>
          )}
        />
      </Content>
    </Container>
  );
}
