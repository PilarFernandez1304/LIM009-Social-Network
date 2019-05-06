import signUp from './View-controller.js';
import changeHash from './utils.js';

<<<<<<< HEAD
=======
export const signUpOnClick = () => {
    let email = document.querySelector('#email-register').value;
    let password  = document.querySelector('#password-register').value;
    register(email, password)
    .then(() => {
      document.getElementById("register-correct").innerHTML = 'Te has registrado correctamente'; 
      return changeHash('#/home')
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        document.getElementById('error-message').innerHTML = '¡Hey! Ingresa un correo electronico válido';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/weak-password') {
        document.getElementById('error-message').innerHTML = 'Tu contraseña debe tener 6 carácteres :)';
        throw new Error(errorMessage);
      } else if (errorCode === 'auth/email-already-in-use') { 
        document.getElementById('error-message').innerHTML = '¡Ups! Este correo esta en uso';
        throw new Error(errorMessage);
      };
    });
  }
>>>>>>> a6caf36d7d6a4205a238fa9aaa71a1b0f498bfb2

export default () => {
  const form = 
  `<div id="test" class="flex-container">
  <div id="logo" class="border-box logo text-center">
    <img class="img-logo" src="../assets/laptop-logo.png" alt="mano-amiga-logo">
  </div>
  <div id="login" class="border-box login-form-container">
    <h1 class="text-center">Mano Amiga</h1>
    <p class="text-center content">¡Bienvenida amiga!</p>
    <form>
      <p id="register-correct" class="register-correct"></p>
      <input id="email-register" class="login login-input" type="email" name="email" placeholder="Email">
      <p id="error-message-invalid-email" class="error-message"></p>
      <input id="password-register" class="login login-input" type="password" name="password" placeholder="Password">
      <p id="error-message-password" class="error-message"></p>
      <button id="sign-in-btn" type="button" class="login btn-login">Registrate</button>
      <p class="text-center">O bien ingresa con...</p>
      <div class="text-center">
        <img id="log-in-fb" class="btn-social" src="../assets/btn-login-facebook.png" alt="facebook-login-button"id="log-in-fb"  />
        <img id="log-in-gmail" class="btn-social" src="../assets/btn-login-google.png" alt="google-login-button" />
      </div>
    </form>
    <p class="text-center">¿Ya tienes una cuenta? <a  class="links" href="#/login" title="link de registro">Inicia tu sesión</a></p>
  </div>
</div>`;
  let div = document.createElement('div');
  div.innerHTML = form;
  const signInBtn = div.querySelector('#sign-in-btn')
  signInBtn.addEventListener('click', () => {
   return  signUp()
    .then(() => changeHash('#/signup'))
    .catch(() => {});
      }
  );
  return div;
}

