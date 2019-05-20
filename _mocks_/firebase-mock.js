const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();
export default new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  (path) => {
  	return (path ? mockdatabase.child(path) : null)
  },
  () => {
    return mockauth;
  },
  () => {
    return mockfirestore;
  },
  () => ({
    ref: () => ({
      child: path => ({
        put: (image, metadata) => (
          new Promise(resolve => {
            resolve({
              ref: {
                getDownloadURL: () => ({ path })
              }
            })
          })
        )
      })
    })
  })
);
