export const firebasemock = require('firebase-mock');

export const mockauth = new firebasemock.MockAuthentication();
export const mockfirestore = new firebasemock.MockFirestore();
export const mocksdk = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  (path) => {
  	return (path ? mockdatabase.child(path) : null)
  },
  () => {
    return mockauth;
  },
  () => {
    return mockfirestore;
  }
);
