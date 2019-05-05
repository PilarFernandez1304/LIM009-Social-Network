import { emailSignUp, signUpFacebook, signUpGoogle } from '../controller/signup.js';
import changeHash from './utils.js';


export const signUpOnClick = (evt) => {
  const formElem = evt.target.closest('form')
  let email = formElem.querySelector('#email-register').value;
  let password  = formElem.querySelector('#password-register').value;
  emailSignUp(email, password)
    .then(() => {
      document.getElementById("register-correct").innerHTML = 'Te has registrado correctamente';
      changeHash('#/signUp');
      })
    .catch(error => {
      let errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        document.getElementById('error-message-invalid-email').innerHTML = '¡Hey! Ingresa un correo electronico válido';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/weak-password') {
        document.getElementById('error-message-password').innerHTML = 'Tu contraseña debe tener 6 carácteres :)';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/email-already-in-use') { 
        document.getElementById('error-message-invalid-email').innerHTML = '¡Ups! Este correo esta en uso';
        throw new Error(errorMessage);
      };
      });
}


export default () => {
  const form = 
  `<div id="test" class="flex-container">
  <div id="logo" class="border-box logo text-center">
    <img class="img-logo" src="../assets/laptop-logo.png" alt="mano-amiga-logo">
  </div>
  <div id="login" class="border-box login-form-container">
    <h1 class="text-center">Mano Amiga</h1>
    <p class="text-center content">¡Bienvenida amiga!</p>
    <form>
      <p id="register-correct" class="register-correct"></p>
      <input id="email-register" class="login login-input" type="email" name="email" placeholder="Email">
      <p id="error-message-invalid-email" class="error-message"></p>
      <input id="password-register" class="login login-input" type="password" name="password" placeholder="Password">
      <p id="error-message-password" class="error-message"></p>
      <button id="sign-up-btn" type="button" class="login btn-login">Registrate</button>
      <p class="text-center">O bien ingresa con...</p>
      <div class="text-center">
        <img id="sign-up-fb" class="btn-social" src="../assets/btn-login-facebook.png" alt="facebook-login-button"id="log-in-fb"  />
        <img id="sign-up-google" class="btn-social" src="../assets/btn-login-google.png" alt="google-login-button" />
      </div>
    </form>
    <p class="text-center">¿Ya tienes una cuenta? <a  class="links" href="#/logIn" title="link de registro">Inicia tu sesión</a></p>
  </div>
</div>`;
  let div = document.createElement('div');
  div.innerHTML = form;
  const signUpBtn = div.querySelector('#sign-up-btn')
  signUpBtn.addEventListener('click',signUpOnClick);

  const facebookSignUpBtn = div.querySelector('#sign-up-fb');
  facebookSignUpBtn.addEventListener('click', () => {
    signUpFacebook()
	  .then(() => changeHash('#/signUp'))
    .catch(() => {})
  });
  
  const googleSignUpBtn = div.querySelector('#sign-up-google');
  googleSignUpBtn.addEventListener('click',  () => {
    signUpGoogle()
	  .then(() => changeHash('#/signUp'))
    .catch(() => {})
  });
  return div;
}


