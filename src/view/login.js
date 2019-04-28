import { emailLogIn, authFacebook, authGmail } from '../controller/con-login.js';

export default () => {
  const form = `<form>
		<input id="email" type="email" name="email" placeholder="Email">
		<input id="password" type="password" name="password" placeholder="Password">
		<button id="log-in-btn" type="button">Log in</button>
		<p>O bien ingresa con...</p>
		<button id="log-in-fb" type="button">FB</button>
		<button id="log-in-gmail" type="button">GG</button>
    </form>
    <p>¿No tienes una cuenta? </p><a href="#" title="link de registro">Regístrate</a>`;
  let div = document.createElement('div');
  div.innerHTML = form;
	div.querySelector('#log-in-btn').addEventListener('click', () => {
  	const email = div.querySelector('#email').value;
	const password  = div.querySelector('#password').value;
  	emailLogIn(email, password);
  });
  div.querySelector('#log-in-fb').addEventListener('click', () => {
	authFacebook();
  });
  div.querySelector('#log-in-gmail').addEventListener('click', () =>{
	authGmail(); 	
  });
  return div;
}
