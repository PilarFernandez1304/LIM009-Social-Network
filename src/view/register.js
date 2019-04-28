import signIn from './controller.js';

export default () => {
  const form = `<form>
		<input id="email-register" type="email" name="email" placeholder="Email">
		<input id="password-register" type="password" name="password" placeholder="Password">
		<button id="sign-in-btn" type="button">Sign in</button>
    </form>
  `;
  let div = document.createElement('div');
  div.innerHTML = form;
  const signInBtn = div.querySelector('#sign-in-btn')
  signInBtn.addEventListener('click', () => {
  	signIn();
  });
  return div;
}

