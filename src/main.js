import config from './lib/index.js';
import { initRouter } from "./router.js";
// disparo del evento load despues de la carga de recursos
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