import React from 'react';
import {Platform} from 'react-native';
// import storage from '@react-native-firebase/storage';
// import api from '../services/api';

// export const FireBaseStorage = api.storage();

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

export const imagePickerOptions = {
  noData: true,
};
