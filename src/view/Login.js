import { logIn, logInFacebook, logInGoogle } from './controller.js';
import changeHash from './utils.js';

export default () => {
  const form = `<div id="test" class="flex-container">
    <div id="logo" class="border-box logo text-center">
      <img class="img-logo" src="../assets/logo1.png" alt="mano-amiga-logo">
    </div>
    <div id="login" class="border-box login-form-container">
      <h2 class="text-center">MANO AMIGA</h2>
      <p class="text-center content">¡Bienvenida amiga!</p>
      <form>
        <input id="email" class="login login-input" type="email" name="email" placeholder="Email">
        <input id="password" class="login login-input" type="password" name="password" placeholder="Password">
        <button id="log-in-btn" type="button" class="login btn-login">Log in</button>
        <p class="text-center">O bien ingresa con...</p>
        <div class="text-center">
          <img id="log-in-fb" class="btn-social" src="../assets/btn-login-facebook.png" alt="facebook-login-button"id="log-in-fb"  />
          <img id="log-in-gmail" class="btn-social" src="../assets/btn-login-google.png" alt="google-login-button" />
        </div>
      </form>
      <p class="text-center">¿No tienes una cuenta? <a  class="links" href="#/signIn" title="link de registro">Regístrate</a></p>
    </div>
  </div>`;
  let div = document.createElement('div');
  div.innerHTML = form;
  
  const logInBtn = div.querySelector('#log-in-btn');
  logInBtn.addEventListener('click', () => {
    let email = document.querySelector('#email').value;
    let password  = document.querySelector('#password').value;
    logIn(email, password)
      .then(() => changeHash('#/logIn'))
      .catch(() => {});
  });

  const facebookLogInBtn = div.querySelector('#log-in-fb');
  facebookLogInBtn.addEventListener('click', logInFacebook);
  
  const googleLogInBtn = div.querySelector('#log-in-gmail');
  googleLogInBtn.addEventListener('click', logInGoogle);
  
  return div;
}
