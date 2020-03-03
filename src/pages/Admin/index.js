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

// Firebase API
import api from '../../services/api';

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
} from './styles';

import Header from '../../components/Header';
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = RNFetchBlob.polyfill.Blob;

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [chaves, setChave] = useState(0);
  const [stars, setStars] = useState(null);
  const [comment, setComment] = useState(null);
  // select
  const [country, setCountry] = useState('');
  const [sports, setSports] = useState('');
  const [example, setExample] = useState([]);
  // const [selectSports, setSelectSports] = useState("");

  const navigation = useNavigation();

  // const options = {
  //   title: 'Select Avatar',
  //   customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  //   storageOptions: {
  //     skipBackup: true,
  //     path: 'images',
  //   },
  // };

  const options = {
    title: 'FREELA',
    takePhotoButtonTitle: 'Use your camera to take a photo',
    chooseFromLibraryButtonTitle: 'Choose a photo from the Gallery',
  };

  // async function handleRegisterInfo() {
  //   const response = await firestore().collection('users').doc('users').get()
  // }

  function handleImagePicker() {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        // alert(response.error)
        console.log(response.erro);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImage(source);

        // handleImageUpload(response.uri)
        //   .then(res => console.log('DEU BOM', res))
        //   .catch(err => console.log('DEU RUIM', err));
      }
    });
  }

  async function handleImageUpload(uri) {
    console.log('URI => ', uri);

    const uid = '1234';

    // export const FireBaseStorage = storage();

    // export const getFileLocalPath = response => {
    //   const {path, uri} = response;
    //   return Platform.OS === 'android' ? path : uri;
    // };

    // export const createStorageReferenceToFile = response => {
    //   const {fileName} = response;
    //   return FireBaseStorage.ref(fileName);
    // };

    // export const uploadFileToFireBase = imagePickerResponse => {
    //   const fileSource = getFileLocalPath(imagePickerResponse);
    //   const storageRef = createStorageReferenceToFile(imagePickerResponse);
    //   return storageRef.putFile(fileSource);
    // };
    try {
      const imagePath = response.path;
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = api
        .storage()
        .ref()
        .child('images/');
      return ref.put(blob);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleRegister() {
    try {
      api
        .firestore()
        .collection('dados')
        .add({
          name,
          email,
          desc,
          country,
          sports,
          image,
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Header
        navigation={navigation}
        title="ADD USER"
        buttonFil={false}
        buttonSerc={false}
      />
      <Content>
        {/* <Title>ADD USER</Title> */}
        <ImageProfile onPress={handleImagePicker}>
          {image && <ImageView source={image} />}
        </ImageProfile>
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
            value={desc}
            onChangeText={setDesc}
          />
        </ContentInput>

        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={value => setCountry(value)}
          items={[
            {label: 'Fútbol', value: 'Fútbol'},
            {label: 'Baloncesto', value: 'Baloncesto'},
            {label: 'Tenis', value: 'Tenis'},
            {label: 'Balonmano', value: 'Balonmano'},
            {label: 'Fútbol americano', value: 'Fútbol americano '},
            {label: 'Rugby', value: 'Rugby'},
            {label: 'Fútbol sala', value: 'Fútbol sala'},
            {label: 'Boxeo', value: 'Boxeo'},
            {label: 'UFC', value: 'UFC'},
            {label: 'Béisbol', value: 'Béisbol'},
            {label: 'Hockey', value: 'Hockey'},
            {label: 'Golf', value: 'Golf'},
            {label: 'Caballos', value: 'Caballos'},
            {label: 'Ciclismo', value: 'Ciclismo'},
            {label: 'Motor', value: 'Motor'},
            {label: 'Dardos', value: 'Dardos'},
            {label: 'Voleibol', value: 'Voleibol'},
            {label: 'Waterpolo', value: 'Waterpolo'},
            {label: 'eSports', value: 'eSports'},
          ]}
          placeholder={{
            label: 'Select Country',
            value: null,
            color: '#000000',
          }}
          useNativeAndroidPickerStyle={false}
        />

        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={value => setSports(value)}
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
            label: 'Select Sports',
            value: null,
            color: '#000000',
          }}
          useNativeAndroidPickerStyle={false}
        />

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
