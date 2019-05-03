import { emailLogIn, authFacebook, authGmail } from '../controller/login.js';
import emailSignUp from '../controller/signup.js';



export const logIn = () => {
  let email = document.querySelector('#email').value;
  let password  = document.querySelector('#password').value;
  emailLogIn(email, password)
  .then(()=>{})
    .catch(error =>  {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        document.getElementById('error-message-invalid-email').innerHTML = '¡Hey! Ingresa un correo electronico válido';
        
      } else if (errorCode === 'auth/wrong-password') {
        document.getElementById('error-message-password').innerHTML = 'Tu contraseña es incorrecta';
      
      } else if (errorCode === 'auth/user-not-found') { 
        document.getElementById('error-message-invalid-email').innerHTML = '¡Ups! Este correo no esta registrado';
      
      }
    });
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
  emailSignUp(email, password)
  .then(()=>{
   result = document.getElementById("register-correct").innerHTML = 'Te has registrado correctamente';
  })
  .catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/invalid-email') {
      document.getElementById('error-message-invalid-email').innerHTML = '¡Hey! Ingresa un correo electronico válido';
    
    } else if (errorCode === 'auth/weak-password') {
      document.getElementById('error-message-password').innerHTML = 'Tu contraseña debe tener 6 carácteres :)';
      
    } else if (errorCode === 'auth/email-already-in-use') { 
      document.getElementById('error-message-invalid-email').innerHTML = '¡Ups! Este correo esta en uso';
      
    };
  });
};