// Este es el punto de entrada de tu aplicacion

import config from './lib/index.js';
import logIn from './view/login.js';
import register from './view/register.js';

firebase.initializeApp(config);
window.addEventListener('load', () => {
  document.getElementById('root').appendChild(logIn());
  document.getElementById('root').appendChild(register());
});

/*
logOutBtn.addEventListener('click', e => {
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged( firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
	} else {
		console.log('no logueado');
	}
});
*/