
export const emailLogIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
}

export const authGmail = ()=>{
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithRedirect(provider);
}
