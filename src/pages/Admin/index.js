import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Picker,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MultiSelect from 'react-native-multiple-select';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {RectButton} from 'react-native-gesture-handler';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {showMessage} from 'react-native-flash-message';

// Firebase API
import api from '../../services/api';
import user from '../../assets/user.png';
import RadioButton from '../../components/RadioButton';

import {
  imagePickerOptions,
  // FireBaseStorage,
  // getFileLocalPath,
  // createStorageReferenceToFile,
  // uploadFileToFireBase,
} from '../../utils';

import {
  Container,
  Content,
  ButtonRegister,
  ContentInput,
  Input,
  Title,
  ImageProfile,
  ButtonRegisterText,
  ImageView,
  PickerCountry,
  ContentPicker,
  ButtonContentRNPicker,
  ButtonArrowLeft,
  Header,
} from './styles';

// import Header from '../../components/Header';
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = RNFetchBlob.polyfill.Blob;

Icon.loadFont();

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [chaves, setChave] = useState(0);
  const [stars, setStars] = useState(null);
  const [comment, setComment] = useState(null);
  const [images, setImages] = useState('');
  const [filesname, setFilesName] = useState('');
  const [names, setNames] = useState('');
  const [file, setFile] = useState('');
  // select
  const [si, setSi] = useState(true);
  const [no, setNo] = useState(false);
  const [textSi, setTextSi] = useState('SI');
  const [textNo, setTextNo] = useState('NO');
  const [link, setLink] = useState('');

  const [country, setCountry] = useState('');
  const [sports, setSports] = useState('');
  const [selectMulti, setSelectMulti] = useState([]);

  const itemsss = [
    {
      name: 'Fútbol',
      id: 'Fútbol',
    },
    {
      name: 'Baloncesto',
      id: 'Baloncesto',
    },
    {
      name: 'Tenis',
      id: 'Tenis',
    },
    {
      name: 'Balonmano',
      id: 'Balonmano',
    },
    {
      name: 'Fútbol americano',
      id: 'Fútbol americano',
    },
    {
      name: 'Rugby',
      id: 'Rugby',
    },

    {
      name: 'Fútbol sala',
      id: 'Fútbol sala',
    },

    {
      name: 'Boxeo',
      id: 'Boxeo',
    },

    {
      name: 'UFC',
      id: 'UFC',
    },

    {
      name: 'Béisbol',
      id: 'Béisbol',
    },

    {
      name: 'Hockey',
      id: 'Hockey',
    },

    {
      name: 'Golf',
      id: 'Golf',
    },

    {
      name: 'Caballos',
      id: 'Caballos',
    },

    {
      name: 'Ciclismo',
      id: 'Ciclismo',
    },

    {
      name: 'Motor',
      id: 'Motor',
    },

    {
      name: 'Dardos',
      id: 'Dardos',
    },

    {
      name: 'Voleibol',
      id: 'Voleibol',
    },

    {
      name: 'Waterpolo',
      id: 'Waterpolo',
    },

    {
      name: 'eSports',
      id: 'eSports',
    },
  ];

  const navigation = useNavigation();

  const optionsImage = {
    title: 'Select Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  function handleImagePicker() {
    ImagePicker.showImagePicker(optionsImage, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        // alert(response.error)
        console.log(response.erro);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: `data:image/jpeg;base64,${response.data}`};
        setImage(source);

        let prefix;
        let ext;

        if (response.fileName) {
          [prefix, ext] = response.fileName.split('.');
          ext = ext.toLocaleLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const image = {
          uri: response.uri,
          type: response.type,
          name: `${prefix}.${ext}`,
        };

        setFile(image);
      }
    });
  }

  async function handleRegister() {
    try {
      const data = new FormData();
      setLoading(true);

      data.append('file', file);
      data.append('name', name);
      data.append('email', email);
      data.append('description', description);
      data.append('country', country);
      data.append('sports', sports);
      data.append('link', link);

      await api.post('root', data);

      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Dashboard');

        showMessage({
          message: 'user successfully added',
          type: 'success',
        });
      }, 3000);
    } catch (err) {
      console.log('EXCEPTION => ', err);
    }
  }

  function handleGoBack() {
    navigation.openDrawer();
  }

  function onSelectedItemsChange(selectItems) {
    // console.log('SELECT ITEMS => ', selectItems);
    setSelectMulti(selectItems);
  }

  function removeArrayIndex(id) {
    // const novo = selectMulti.slice(id);
    // // const arrayIndex = items.indexOf(id);
    // console.log('NOVE => ', novo);
    // console.log('ID => ', id);
    const itemsSelect = selectMulti.filter(sitem => sitem !== id);

    setSelectMulti(itemsSelect);
    // this.setState({ selectedItems: items });
    // setSelectMulti(items);
    // if (arrayIndex > -1) {
    //   items.slice(arrayIndex, 1);
    //   console.log('Oj');
    // }
  }

  function handleSiChecked() {
    if (no) {
      // console.log("SI")
      setSi(true);
      setNo(false);
      setTextSi('SI');
    } else {
      setSi(true);
      setTextSi('SI');
    }
  }

  function handleNoChecked() {
    if (si) {
      setSi(false);
      setNo(true);
      setTextNo('NO');
    } else {
      setNo(false);
      setTextNo('NO');
    }
  }
  // console.log('ID => ', selectMulti);
  return (
    <Container>
      {/* <Header
        navigation={navigation}
        title="ADD USER"
        buttonFil={false}
        buttonSerc={false}
      /> */}
      <Header>
        <ButtonArrowLeft onPress={handleGoBack}>
          <Icon name="menu" size={32} color="#fff" />
        </ButtonArrowLeft>
      </Header>
      <Content>
        {/* <Title>ADD USER</Title> */}
        {image ? (
          <ImageProfile onPress={handleImagePicker}>
            <ImageView source={image} />
          </ImageProfile>
        ) : (
          <ImageProfile onPress={handleImagePicker}>
            <ImageView source={user} />
          </ImageProfile>
        )}

        <ContentInput>
          <Input
            placeholder="name of the profile"
            value={name}
            onChangeText={setName}
          />
        </ContentInput>
        <ContentInput>
          <Input
            placeholder="email (optional at the beginning)"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </ContentInput>
        <ContentInput>
          <Input
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
        </ContentInput>

        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={value => setCountry(value)}
          items={[
            {label: 'Argentina', value: 'Argentina'},
            {label: 'Bolivia', value: 'Bolivia'},
            {label: 'Chile', value: 'Chile'},
            {label: 'Colombia', value: 'Colombia'},
            {label: 'Costa Rica', value: 'Costa Rica'},
            {label: 'Cuba', value: 'Cuba'},
            {label: 'Ecuador', value: 'Ecuador'},
            {label: 'El salvador', value: 'El salvador'},
            {label: 'España', value: 'España'},
            {label: 'Guatemala', value: 'Guatemala'},
            {label: 'Guinea Ecuatorial', value: 'Guinea Ecuatorial'},
            {label: 'Honduras', value: 'Honduras'},
            {label: 'México', value: 'México'},
            {label: 'Nicaragua', value: 'Nicaragua'},
            {label: 'Panamá', value: 'Panamá'},
            {label: 'Paraguay', value: 'Paraguay'},
            {label: 'Perú', value: 'Perú'},
            {label: 'República dominicana', value: 'República dominicana'},
            {label: 'Uruguay', value: 'Uruguay'},
            {label: 'Venezuela', value: 'Venezuela'},
          ]}
          placeholder={{
            label: 'Select Country',
            value: null,
            color: '#000000',
          }}
          useNativeAndroidPickerStyle={false}
        />

        <View style={{marginTop: 30, borderRadius: 5}}>
          <MultiSelect
            hideTags
            items={itemsss}
            uniqueKey="id"
            // ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectMulti}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.log(text)}
            altFontFamily="ProximaNova-Light"
            tagRemoveIconColor="#eee"
            tagBorderColor="#eee"
            tagTextColor="#222"
            selectedItemTextColor="#222"
            selectedItemIconColor="#222"
            itemTextColor="#222"
            displayKey="name"
            searchInputStyle={{
              color: '#222',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: 5,
            }}
            styleInputGroup={{
              backgroundColor: '#eee',
              borderRadius: 5,
            }}
            submitButtonColor="#1a9ae2"
            submitButtonText="Submit"
          />

          <View style={{flexDirection: 'row', marginTop: 10}}>
            {selectMulti.map(item => (
              <View
                style={{
                  height: 30,
                  width: 80,
                  borderRadius: 20,
                  backgroundColor: '#eee',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: 10, color: '#222'}}>{item}</Text>
                <RectButton
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: '#e74c3c',
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                  onPress={() => removeArrayIndex(item)}>
                  <Icon name="close" size={10} color="#fff" />
                </RectButton>
              </View>
            ))}
          </View>

          <Text style={{fontSize: 16, color: '#000', fontWeight: '600'}}>
            Estadísticas verificadas
          </Text>

          <View style={{flexDirection: 'row', marginTop: 8}}>
            <RadioButton checked={si} onPress={handleSiChecked} />
            <Text style={{fontSize: 14, color: '#000', fontWeight: 'bold'}}>
              SÍ
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <RadioButton checked={no} onPress={handleNoChecked} />
            <Text style={{fontSize: 14, color: '#000', fontWeight: 'bold'}}>
              NO
            </Text>
          </View>
          <ContentInput>
            <Input placeholder="Link" value={link} onChangeText={setLink} />
          </ContentInput>
        </View>

        <ButtonRegister onPress={handleRegister}>
          {loading ? (
            <ActivityIndicator size={25} color="#fff" />
          ) : (
            <ButtonRegisterText>REGISTER</ButtonRegisterText>
          )}
        </ButtonRegister>
      </Content>
    </Container>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    height: 50,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#000',
    paddingRight: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 8,
    // marginHorizontal: 5,
    marginTop: 30,
    paddingVertical: 8,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingRight: 30,
  },
});
