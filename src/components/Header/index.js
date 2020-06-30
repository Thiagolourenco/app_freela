import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  ButtonBurguer,
  ButtonDrawer,
  ButtonSearch,
  ModalContent,
  HeaderModal,
  TitleModal,
  SelectText,
  InputSearch,
  HeaderView,
} from './styles';

// import ModalFilter from '../Modal';

export default function HeaderComponent({
  navigation,
  title,
  buttonFil,
  buttonSerc,
  nav,
}) {
  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  // const [search, setSearch] = useState('');
  const [name, setName] = useState('');

  function handleMenuDrawer() {
    navigation.openDrawer();
  }

  function handleOpenModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
  }

  function handleInputSearch() {
    setVisibleInput(true);
  }

  function handleSearch() {
    nav.navigate('Search');
  }

  return (
    <>
      <Header>
        <HeaderView>
          <ButtonDrawer onPress={handleMenuDrawer}>
            <Icon name="menu" size={32} color="#fff" />
          </ButtonDrawer>
          <HeaderTitle> {title}</HeaderTitle>
          {buttonFil && (
            <ButtonBurguer>
              <Icon name="filter-list" size={32} color="#fff" />
            </ButtonBurguer>
          )}
          {buttonSerc && (
            <ButtonSearch onPress={handleSearch}>
              <Icon name="search" size={32} color="#fff" />
            </ButtonSearch>
          )}
        </HeaderView>
      </Header>
    </>
  );
}
