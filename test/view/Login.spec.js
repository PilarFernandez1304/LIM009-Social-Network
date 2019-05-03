import { mockauth, mocksdk } from '../../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import Login, { loginOnClick } from '../../src/view/Login';

describe('Login', () => {
	beforeEach(() => {
		document.body.appendChild(Login());
	})
	it('Evento click de boton login funciona', () => {
		const emailInput = document.getElementById('email');
		emailInput.value = 'email@email.com';
		const passwordInput = document.getElementById('password');
		passwordInput.value = '12345678';
		const loginBtn = document.getElementById('log-in-btn');
		loginBtn.dispatchEvent(new Event('click'));
		const currUser = firebase.auth().currentUser;
		expect(currUser.email).toBe('email@email.com');
	})
})