import { firebasemock, mockauth, mockfirestore, mocksdk } from '../_mocks_/firebase-mock.js';
mockauth.autoFlush();

global.firebase = mocksdk;

import { emailLogIn, authFacebook, authGmail, signInAnonimous, logOut, getCurrenUser } from '../src/controller/login.js';

describe('emailLogIn', () => {
	it('Debería ser una función', () => {
		expect(typeof emailLogIn).toBe('function');
	})
	it('Debería iniciar sesión con email: abc@mail.com y password: 123456', () => {
		return emailLogIn('abc@mail.com', '123456')
		.then((user) => {
			expect(user.email).toBe('abc@mail.com');
		})
	});
})

describe('authFacebook', () => {
	it('Debería ser una función', () => {
		expect(typeof authFacebook).toBe('function');
	})
	it('Debería iniciar sesión con facebook', () => {
		const expected = [{"providerId": "facebook.com"}];
		return authFacebook().then((data) => {
			expect(mockauth.getAuth().isAnonymous).toBe(false);
			expect(mockauth.getAuth().providerData).toEqual(expect.arrayContaining(expected));
		});
	});
});

describe('authGmail', () => {
	it('Debería ser una función', () => {
		expect(typeof authGmail).toBe('function');
	})
	it('Debería iniciar sesión con google', () => {
		const expected = [{"providerId": "google.com"}];
		return authGmail().then((data) => {
			expect(mockauth.getAuth().isAnonymous).toBe(false);
			expect(mockauth.getAuth().providerData).toEqual(expect.arrayContaining(expected));
		});
	});
});

describe('signInAnonimous', () => {
	it('Debería ser una función', () => {
		expect(typeof signInAnonimous).toBe('function');
	})
	it('Debería iniciar sesión anónimamente', () => {
		return signInAnonimous().then((data) => {
			expect(mockauth.getAuth().isAnonymous).toBe(true);
		});
	});
});

describe('logOut', () => {
	it('Debería ser una función', () => {
		expect(typeof logOut).toBe('function');
	})
	it('Debería cerrar sesión', () => {
		return authGmail()
		.then(() => logOut())
		.then((data) => {
			expect(mockauth.getAuth()).toBe(null);
		});
	});
});

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
