import { emailLogIn, authFacebook, authGmail } from '../controller/con-login.js';
import register from '../controller/con-register.js';

const changeHash = (hash) =>  {
  location.hash = hash;
}

const inputValidator = (email, password) => {
	if (email === '') {
		alert('Ingrese un email válido');
	} else if (password === '') {
		alert('Ingrese un password válido');
	}
}
export const logIn = () => {
  let email = document.querySelector('#email').value;
  let password  = document.querySelector('#password').value;
  if (email !== '' && password !== '') {
    emailLogIn(email, password)
      .then(() => changeHash('#/logIn'))
      .catch(() => {});
  } else {
  	inputValidator(email, password);
  }
};

export const logInFacebook = () => {
	authFacebook()
	.then(() => changeHash('#/logIn'))
    .catch(() => {});
};

export const logInGoogle = () =>{
	authGmail()
	.then(() => changeHash('#/logIn'))
    .catch(() => {}); 	
};

export default () => {
  let email = document.querySelector('#email-register').value;
  let password  = document.querySelector('#password-register').value;
  if (email !== '' && password !== '') {
    register(email, password)
    .then(() => changeHash('#/signIn'))
    .catch(() => {});
  } else {
  	inputValidator(email, password);
  }
};