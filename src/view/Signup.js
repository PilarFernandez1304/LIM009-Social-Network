import register from '../controller/signup.js';
import changeHash from './utils.js';

export const signUpOnClick = () => {
    let email = document.querySelector('#email-register').value;
    let password  = document.querySelector('#password-register').value;
    register(email, password)
    .then(() => {
      document.getElementById("register-correct").innerHTML = 'Te has registrado correctamente'; 
      return changeHash('#/home')
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
  }

export const signUp = () => {
  const form = `<div class="flex-container">
    <div id="logo" class="border-box logo text-center">
      <img class="img-logo" src="../assets/laptop-logo.png" alt="mano-amiga-logo">
    </div>
    <div id="login" class="border-box login-form-container">
      <h1 class="title text-center">Mano Amiga</h1>
      <p class="text-center content">¡Bienvenida amiga!</p>
      <form>
         <p id="register-correct" class="text-center register-correct"></p>
        <input id="email-register" class="login login-input" type="email" name="email" placeholder="Email">
        <input id="password-register" class="login login-input" type="password" name="password" placeholder="Password">
        <button id="sign-in-btn" type="button" class="login btn-login">Registrarse</button>
        <p id="error-message" class="text-center error-message"></p>
        <p class="text-center">O bien regístrate con...</p>
        <div class="text-center">
          <img id="log-in-fb" class="btn-social" src="../assets/btn-login-facebook.png" alt="facebook-login-button"id="log-in-fb"  />
          <img id="log-in-gmail" class="btn-social" src="../assets/btn-login-google.png" alt="google-login-button" />
        </div>
      </form>
      <p class="text-center">¿Ya tienes una cuenta? <a  class="links" href="#/logIn" title="link de registro">Ingresa</a></p>
    </div>
  </div>`;
  let div = document.createElement('div');
  div.innerHTML = form;
  const signUpBtn = div.querySelector('#sign-in-btn')
  signUpBtn.addEventListener('click', signUpOnClick);
  return div;
}

