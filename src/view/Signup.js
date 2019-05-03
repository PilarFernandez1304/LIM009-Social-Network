import { signUp } from './controller.js';
import changeHash from './utils.js';

export default () => {
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
        <p id="error-message" class="error-message"></p>
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
  const signInBtn = div.querySelector('#sign-in-btn')
  signInBtn.addEventListener('click', () => {
  	let email = document.querySelector('#email-register').value;
    let password  = document.querySelector('#password-register').value;
  	signUp(email, password)
      .then(() => changeHash('#/signUp'))
      .catch(() => {});
  });
  return div;
}

