import { emailLogIn, authFacebook, authGmail, authHandler } from '../controller/login.js';
import register from '../controller/signup.js';

const inputValidator = (email, password) => {
	if (email === '') {
		alert('Ingrese un email válido');
	} else if (password === '') {
		alert('Ingrese un password válido');
	}
}
export const logIn = (email, password) => {
  if (email !== '' && password !== '') {
    emailLogIn(email, password).then((data) => authHandler());
  } else {
  	return inputValidator(email, password);
  }
};

export const logInFacebook = () => {
	authFacebook()
	.then(() => {changeHash('#/logIn'); return authHandler()})
  .catch(() => {});
};

export const logInGoogle = () =>{
	authGmail()
	.then(() => {changeHash('#/logIn'); return authHandler()})
  .catch(() => {}); 	
};

export const signUp = (email, password) => {
  if (email !== '' && password !== '') {
    register(email, password)
    .then(() => {changeHash('#/signIn'); return authHandler()})
  } else {
  	return inputValidator(email, password);
  }
};