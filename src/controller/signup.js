
export default (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

	