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
import firebase from '@react-native-firebase/app';

import {
  imagePickerOptions,
  FireBaseStorage,
  getFileLocalPath,
  createStorageReferenceToFile,
  uploadFileToFireBase,
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

export default function Admin({navigation}) {
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

  const dataSports = [
    'Fútbol',
    'Baloncesto',
    'Tenis',
    'Balonmano',
    'Fútbol americano',
    'Rugby',
    'Fútbol sala',
    'Boxeo',
    'UFC',
    'Béisbol',
    'Hockey',
    'Golf',
    'Caballos',
    'Ciclismo',
    'Motor',
    'Dardos',
    'Voleibol',
    'Waterpolo',
    'eSports',
    ,
  ];

  const dataCountry = [
    'Argentina',
    'Bolivia',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'El salvador',
    'España',
    'Guatemala',
    'Guinea Ecuatorial',
    'Honduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'República dominicana',
    'Uruguay',
    'Venezuela',
    ,
  ];

  const sdsports = [
    {
      label: 'Football',
      value: 'football',
    },
    {
      label: 'Baseball',
      value: 'baseball',
    },
    {
      label: 'Hockey',
      value: 'hockey',
    },
  ];

  const countryCode = [
    {
      label: '+91',
      value: '+91',
    },
    {
      label: '+1',
      value: '+1',
    },
    {
      label: '+2',
      value: '+2',
    },
  ];

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
        console.log(getFileLocalPath(response));
        console.log('My file', createStorageReferenceToFile(response));
        Promise.resolve(uploadFileToFireBase(response));
        // this.setState({
        //   avatarSource: source,
        // });
        setImage(source);
      }
    });
  }

  async function handleRegister() {
    const documentRef = await firebase
      .firestore()
      .collection('users')
      .add({
        name,
        email,
        desc,
      });

    console.log(documentRef);
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
          onValueChange={value => console.log(value)}
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
            label: 'Selecione a Visita',
            value: null,
            color: '#9EA0A4',
          }}
          useNativeAndroidPickerStyle={false}
        />
        {/* <PickerCountry
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
          <Picker.Item label="Select Country" />
          {dataCountry.map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </PickerCountry> */}

        <PickerCountry
          selectedValue={sports}
          onValueChange={(itemValue, itemIndex) => setSports(itemValue)}>
          <Picker.Item label="Select Sports" />
          {dataSports.map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </PickerCountry>

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
