import { firebasemock, mockauth, mockfirestore, mocksdk } from '../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import { getCurrenUser, createPost, getAllPosts, getPublicPosts, updatePost, deletePost } from '../src/controller/wall.js';
import { emailLogIn, signInAnonimous } from '../src/controller/login.js';

describe('getCurrenUser', () => {
	it('Debería ser una función', () => {
		expect(typeof getCurrenUser).toBe('function');
	})
	
    it('Debería obtener null si ningún usuario se ha logueado', () => {
		const user = getCurrenUser();
		expect(user).toEqual(null);
    })

    it('Debería obtener true si usuario anónimo se ha logueado', () => {
    	return signInAnonimous().then(() => {
    		const user = getCurrenUser();
    		expect(user.isAnonymous).toEqual(true)
    	})
    })

     it('Debería obtener abc@mail.com si usuario se inicia sesión con email abc@mail.com', () => {
    	return emailLogIn('abc@mail.com', '123456').then(() => {
    		const user = getCurrenUser();
    		expect(user.isAnonymous).toEqual(false);
    		expect(user.email).toEqual('abc@mail.com')
    	})
    })
})
/*
describe('createPost', () => {
        it("Debería agregar un post a la colección", () => {
        	const callback = (data) => console.log(data);
            return createPost('PO5RGH753DGUM', 'usuario', 'photo.jpg', 'contentText', 'public', callback)
            .then((data) => {
            	expect(firebase.)
            })
        })
})
*/