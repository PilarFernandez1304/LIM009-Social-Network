import { logIn, logInFacebook, logInGoogle } from './controller.js';
import changeHash from './utils.js';

export default () => {
  const form = `<div id="test" class="flex-container">
    <div id="logo" class="border-box logo">
      <img src="../assets/logo1.png" alt="mano-amiga-logo">
    </div>
    <div id="login" class="border-box login-form">
      <h2 class="text-center">MANO AMIGA</h2>
      <p class="text-center">¡Bienvenida amiga!</p>
      <form>
        <input id="email" class="login login-input" type="email" name="email" placeholder="Email">
        <input id="password" class="login login-input" type="password" name="password" placeholder="Password">
        <button id="log-in-btn" type="button" class="login btn-login">Log in</button>
        <p class="text-center">O bien ingresa con...</p>
          <button id="log-in-fb" type="button">FB</button>
          <button id="log-in-gmail" type="button">GG</button>
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
