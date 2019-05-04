import { emailLogIn, authFacebook, authGmail, authHandler } from '../controller/login.js';
import register from '../controller/signup.js';

export const logIn = (email, password) => {
    return emailLogIn(email, password);
}

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
  register(email, password)
  .then(() => {
    document.getElementById("register-correct").innerHTML = 'Te has registrado correctamente'; 
    return changeHash('#/signUp')
  })
  .catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/invalid-email') {
      document.getElementById('error-message').innerHTML = '¡Hey! Ingresa un correo electronico válido';
      throw new Error(errorMessage);
    } else if (errorCode === 'auth/weak-password') {
      document.getElementById('error-message').innerHTML = 'Tu contraseña debe tener 6 carácteres :)';
      throw new Error(errorMessage);
    } else if (errorCode === 'auth/email-already-in-use') { 
      document.getElementById('error-message').innerHTML = '¡Ups! Este correo esta en uso';
      throw new Error(errorMessage);
    };
});
};