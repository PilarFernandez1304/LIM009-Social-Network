
export const emailLogIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
}

export const authGmail = ()=>{
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithRedirect(provider);
}

// Callback to handle the result of the authentication
export const authHandler = (error, authData) => {
  if (error) {
    alert('Login Failed!');
  } else {
    alert('Authenticated successfully');
  }
}