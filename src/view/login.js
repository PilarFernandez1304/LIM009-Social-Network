import { logIn, logInFacebook, logInGoogle } from './controller.js';

const changeHash = (hash) =>  {
  location.hash = hash;
}

export default () => {
  const form = `<form>
    <button id="log-in-fb" type="button">FB</button>
    <button id="log-in-gmail" type="button">GG</button>
		<input id="email" type="email" name="email" placeholder="Email">
		<input id="password" type="password" name="password" placeholder="Password">
		<button id="log-in-btn" type="button">Log in</button>
    </form>
    <p>¿No tienes una cuenta? </p><a href="#/signup" title="link de registro">Regístrate</a>`;
  let div = document.createElement('div');
  div.innerHTML = form;
  
  const logInBtn = div.querySelector('#log-in-btn');
  logInBtn.addEventListener('click', () => {
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
