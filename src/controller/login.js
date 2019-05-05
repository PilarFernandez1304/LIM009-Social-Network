
export const emailLogIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}
export const authGoogle = ()=>{
	const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

// // Callback to handle the result of the authentication
// export const authHandler = (error, authData) => {
//   if (error) {
//     alert('Login Falló!');
//   } else {
//     alert('Autenticación satisfactoria');
//   }
// }