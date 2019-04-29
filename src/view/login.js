
import { SubmitOnSingIn,SubmitOnauthFacebook,SubmitOnauthGmail } from '../controller/con-login.js';
	
// crear template de la rpimera vista es decir para el login
const logInBtn = document.getElementById('log-in-btn');
const facebookBtn = document.getElementById('log-in-fb');
const gmailBtn = document.getElementById('log-in-gmail');


logInBtn.addEventListener('click', e => {
	SubmitOnSingIn();
	
});

// Evento para llamar a la funcion de autentificacion de faceboook
facebookBtn.addEventListener('click', () => {
	SubmitOnauthFacebook();
	
});

// Evento para llamar a la funcion de autentificaion de Google
gmailBtn.addEventListener('click', () => {
	SubmitOnauthGmail();
	
});
