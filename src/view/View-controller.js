import { emailLogIn, authFacebook, authGmail } from '../controller/login.js';
import emailSignUp from '../controller/signup.js';



export const logIn = () => {
  let email = document.querySelector('#email').value;
  let password  = document.querySelector('#password').value;
  emailLogIn(email, password)
};

export const logInFacebook = () => {
	authFacebook()
};

export const logInGoogle = () =>{
	authGmail()	
};

export default () => {
  let email = document.querySelector('#email-register').value;
  let password  = document.querySelector('#password-register').value;
  emailSignUp(email, password);
};