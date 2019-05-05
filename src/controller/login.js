
export const emailLogIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}
export const authGoogle = ()=>{
	const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}
