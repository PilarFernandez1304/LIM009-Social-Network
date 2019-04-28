
export default (email, password) => {
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
}
	