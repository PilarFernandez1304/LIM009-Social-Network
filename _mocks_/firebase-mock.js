export const firebasemock = require('firebase-mock');

export const mockauth = new firebasemock.MockAuthentication();
export const mockfirestore = new firebasemock.MockFirestore();
export const mockstorage = new firebasemock.MockStorage();
export const mocksdk = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  (path) => {
    return path ? mockdatabase.child(path) : mockdatabase;
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return mockauth;
  },
  // use null if your code does not use FIRESTORE
  () => {
    return mockfirestore;
  },
  // use null if your code does not use STORAGE
  () => {
    return mockstorage;
  }
);