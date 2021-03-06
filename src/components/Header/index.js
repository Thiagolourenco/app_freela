import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
}) {
  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(false);
  const [search, setSearch] = useState('');

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
            <ButtonSearch onPress={handleInputSearch}>
              <Icon name="search" size={32} color="#fff" />
            </ButtonSearch>
          )}
        </HeaderView>
        <InputSearch visible={visibleInput} />
      </Header>
    </>
  );
}
