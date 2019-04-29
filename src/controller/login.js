// login with email and password
export const emailLogIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
// inicio de sesion con facebook
export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
}
// Inicio de sesion con Gmail
export const authGmail = ()=>{
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithRedirect(provider);
}
