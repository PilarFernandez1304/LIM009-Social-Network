import { emailLogIn, authFacebook, authGmail } from '../controller/login.js';
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
    return emailLogIn(email, password)
  } else {
  	return inputValidator(email, password);
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

export const signUp = (email, password) => {
  if (email !== '' && password !== '') {
    return register(email, password)

  } else {
  	return inputValidator(email, password);
  }
};