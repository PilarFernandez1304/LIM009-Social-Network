import signIn from '../controller/con-register.js';

export default () => {
  const form = `<form>
		<input id="email-register" type="email" name="email" placeholder="Email">
		<input id="password-register" type="password" name="password" placeholder="Password">
		<button id="sign-in-btn" type="button">Sign in</button>
    </form>
  `;
  let div = document.createElement('div');
  div.innerHTML = form;
	div.querySelector('#sign-in-btn').addEventListener('click', () => {
  	const email = div.querySelector('#email-register').value;
	const password  = div.querySelector('#password-register').value;
  	signIn(email, password);
  });
  return div;
}

