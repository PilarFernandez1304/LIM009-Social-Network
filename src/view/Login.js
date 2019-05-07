import { emailLogIn, authFacebook, authGmail } from '../controller/login.js';
import changeHash from './utils.js';

export const loginOnClick = (evt) => {
  const formElem = evt.target.closest('form');
  let email = formElem.querySelector('#email').value;
  let password  = formElem.querySelector('#password').value;
  emailLogIn(email, password)
    .then(() => changeHash('#/home'))
    .catch(error =>  {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/invalid-email') {
          document.getElementById('error-message').innerHTML = '¡Hey! Ingresa un correo electronico válido';
        
        } else if (errorCode === 'auth/wrong-password') {
          document.getElementById('error-message').innerHTML = 'Tu contraseña es incorrecta';
      
        } else if (errorCode === 'auth/user-not-found') { 
          document.getElementById('error-message').innerHTML = '¡Ups! Este correo no esta registrado';
        }
      });
}

export const logIn = () => {
  const form = `<div class="flex-container">
    <div id="logo" class="border-box logo text-center">
      <img class="img-logo" src="../assets/laptop-logo.png">

    </div>
    <div id="login" class="border-box login-form-container">
      <h1 class="title text-center">Mano Amiga</h1>
      <p class="text-center content">¡Bienvenida amiga!</p>
      <form>
        <input id="email" class="login login-input" type="email" name="email" placeholder="Email">
        <input id="password" class="login login-input" type="password" name="password" placeholder="Password">
        <button id="log-in-btn" type="button" class="login btn-login">Log in</button>
        <p id="error-message" class="text-center error-message"></p>
        <p class="text-center">O bien ingresa con...</p>
        <div class="text-center">
          <img id="log-in-fb" class="btn-icon" src="../assets/btn-login-facebook.png" alt="facebook-login-button"id="log-in-fb"  />
          <img id="log-in-gmail" class="btn-icon" src="../assets/btn-login-google.png" alt="google-login-button" />
        </div>
      </form>
      <p class="text-center">¿No tienes una cuenta? <a  class="links" href="#/signUp" title="link de registro">Regístrate</a></p>
    </div>
  </div>`;
  let div = document.createElement('div');
  div.innerHTML = form;
  
  const logInBtn = div.querySelector('#log-in-btn');
  logInBtn.addEventListener('click', loginOnClick);

  const facebookLogInBtn = div.querySelector('#log-in-fb');
  facebookLogInBtn.addEventListener('click', () =>{
    console.log("hola")
    authFacebook()
    .then((result) =>{
      //var user = result.user;
     

     changeHash('#/home')
    })
    .catch(() => {})

  //authFacebook()

  });
  
  const googleLogInBtn = div.querySelector('#log-in-gmail');
  googleLogInBtn.addEventListener('click', () => authGmail()
    .then(() => changeHash('#/home'))
    .catch(() => {})
    );
 
  return div;
}
