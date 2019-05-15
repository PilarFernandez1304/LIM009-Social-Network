export const emailLogIn = (email, password) => 
firebase.auth().signInWithEmailAndPassword(email, password);

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

export const authGmail = ()=>{
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider);
}

export const signInAnonimous = () => firebase.auth().signInAnonymously();

export const logOut = () => {
  return firebase.auth().signOut();
}

export const getCurrenUser = () => {
	return firebase.auth().currentUser;
}