
export const emailSignUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const signUpFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider);
}
export const signUpGoogle= ()=>{
	const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}