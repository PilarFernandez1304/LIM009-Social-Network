const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

global.firebase = mocksdk;

import { emailLogin} from '../src/controller/con-login.js'

describe('email authentication',() => {
    it('debería ser una función',() => {
      expect(typeof  emailLogin ).toBe('function')
    })
    it('deberia  iniciar sesión con email judicriss18@gmail.com con contraseña 123456',()=> {
        expect(emailLogin('judicriss18@gmail.com','123456')).toEqual('judicriss18@gmail.com')
    })
})







// import MockFirebase from 'mock-cloud-firestore';

// const fixtureData = {
//     __collection__: {
//       users: {
//         __doc__: {
//           user_a: {
//             age: 15,
//             username: 'user_a',
  
//             __collection__: {
//               friends: {
//                 __doc__: {
//                   user_b: {
//                     reference: '__ref__:users/user_b'
//                   }
//                 }
//               }
//             }
//           },
  
//           user_b: {
//             age: 10,
//             username: 'user_b',
  
//             __collection__: {
//               friends: {
//                 __doc__: {
//                   user_a: {
//                     reference: '__ref__:users/user_a'
//                   }
//                 }
//               }
//             }
//           },
  
//           user_c: {
//             age: 20,
//             username: 'user_c'
//           }
//         }
//       }
//     }
//   }


// global.firebase = new MockFirebase(fixtureData);