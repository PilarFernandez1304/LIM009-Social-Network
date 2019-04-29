// aqui exportaras las funciones que necesites de firebase

export const singIn=(email,password)=>{
  firebase.auth().signInWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));  
}

 export const createLog =()=>{
    firebase.auth.createUserWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
}

export const statusAuth =()=>{
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('no logueado');
        }
    });   
};

export const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider).then(result => {
		console.log(result.user.displayName);
	})
		.catch(error => {
			console.log(error.message);
		});
}

export const authGmail = () => {
	const provider1 = new firebase.auth.GoogleAuthProvider()
	firebase.auth().signInWithRedirect(provider1).then(result => {
	})
		.catch(error => {
			console.log(error.message);
		});

}

export const goOut=()=>{
    firebase.auth().signOut()
    .then( e=> console.log('Salida exitosa'))
    .catch(error=>console.log(error.message))
}