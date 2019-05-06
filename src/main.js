
import config from './lib/index.js';
import { initRouter } from "./router.js";

window.addEventListener('load', () => {
  firebase.initializeApp(config);
  initRouter();
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