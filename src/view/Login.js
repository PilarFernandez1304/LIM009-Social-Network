import { logIn, logInFacebook, logInGoogle } from './controller.js';
import changeHash from './utils.js';

export default () => {
  const form = `<form>
		<input id="email" type="email" name="email" placeholder="Email">
		<input id="password" type="password" name="password" placeholder="Password">
		<button id="log-in-btn" type="button">Log in</button>
		<p>O bien ingresa con...</p>
		<button id="log-in-fb" type="button">FB</button>
		<button id="log-in-gmail" type="button">GG</button>
    </form>
    <p>¿No tienes una cuenta? </p><a href="#/signIn" title="link de registro">Regístrate</a>`;
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
