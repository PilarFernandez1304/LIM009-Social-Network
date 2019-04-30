
export default (email, password) => {
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email, password);
	promise.then(data => console.log(data.user.ba.b.b))
	  .catch(e => console.log(e.message));
}
	