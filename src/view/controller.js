import { emailLogIn, authFacebook, authGmail } from '../controller/con-login.js';
import register from '../controller/con-register.js';

const changeHash = (hash) =>  {
  location.hash = hash;
}

export const logIn = () => {
  let email = document.querySelector('#email').value;
  let password  = document.querySelector('#password').value;
  emailLogIn(email, password)
    .then(() => changeHash('#/logIn'))
    .catch(() => {});
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
  register(email, password)
  .then(() => changeHash('#/signIn'))
  .catch(() => {});
};