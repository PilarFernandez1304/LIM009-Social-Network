
export const emailLogIn = (email, password) =>  firebase.auth().signInWithEmailAndPassword(email, password);
// inicio de sesion con facebook
export const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}
// Inicio con Gmail
export const authGmail = ()=>{
	const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}
