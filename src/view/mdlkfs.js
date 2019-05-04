import { logIn, logInFacebook, logInGoogle } from './View-controller.js';
import changeHash from './utils.js';

export default () => {
  const form = `<div id="test" class="flex-container">
  <div id="logo" class="border-box logo text-center">
    <img class="img-logo" src="../assets/laptop-logo.png" alt="mano-amiga-logo">
  </div>
  <div id="login" class="border-box login-form-container">
    <h1 class="text-center"> Mano Amiga </h1>
    <p class="text-center content">¡Bienvenida amiga!</p>
    <form>
      <input id="email" class="login login-input" type="email" name="email" placeholder="Email">
      <p id="error-message-invalid-email" class="error-message"></p>
      <input id="password" class="login login-input" type="password" name="password" placeholder="Password">
      <p id="error-message-password" class="error-message short-padding karla-font"></p>
      <button id="log-in-btn" type="button" class="login btn-login">Inicia Sesión</button>
      <p class="text-center">O bien ingresa con...</p>
      <div class="text-center">
        <img id="log-in-fb" class="btn-social" src="../assets/btn-login-facebook.png" alt="facebook-login-button"id="log-in-fb"  />
        <img id="log-in-gmail" class="btn-social" src="../assets/btn-login-google.png" alt="google-login-button" />
      </div>
    </form>
    <p class="text-center">¿No tienes una cuenta? <a  class="links" href="#/signup" title="link de registro">Regístrate</a></p>
  </div>
</div>`;
  let div = document.createElement('div');
  div.innerHTML = form;
  
  const logInBtn = div.querySelector('#log-in-btn');
  logInBtn.addEventListener('click', () => {
    document.getElementById('error-message-invalid-email').innerHTML="";
    document.getElementById('error-message-password').innerHTML ="";
    return logIn()
    .then(() => changeHash('#/login'))
    .catch(() => {});
  });

  const facebookLogInBtn = div.querySelector('#log-in-fb');
  facebookLogInBtn.addEventListener('click', () =>{
    return logInFacebook()
    .then(() => changeHash('#/login'))
    .catch(() => {});
  });
  
  const googleLogInBtn = div.querySelector('#log-in-gmail');
  googleLogInBtn.addEventListener('click', () =>{
    return logInGoogle()
    .then(() => changeHash('#/login'))
    .catch(() => {});
  });
  return div;
}