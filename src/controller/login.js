
export const emailLogIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}
<<<<<<< HEAD
=======

>>>>>>> 44a8bfab1780fcb974a050be4a7f0681a1040470
export const authGmail = ()=>{
	const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

// Callback to handle the result of the authentication
export const authHandler = (error, authData) => {
  if (error) {
    alert('Login Falló!');
  } else {
    alert('Autenticación satisfactoria');
  }
}