// FUNCIONES PARA INICIAR SESIÓN //

//iniciar sesión con correo y contraseña//
export const emailLogIn = (email, password) => {
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email, password);
	promise.then(data => console.log(Object.values(data.user.ba.b.b)))
	  .catch(e => console.log(e.message));
};
// inicio de sesion con facebook
export const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider).then(result => {
		console.log(result.user.displayName);
	})
	.catch(error => {
		console.log(error.message);
	});
}
// Inicio con Gmail
export const authGmail = ()=>{
	const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider).then(result => {
	
	console.log(result);
	})
	.catch(error => {
		console.log(error.message);
	});	
}
