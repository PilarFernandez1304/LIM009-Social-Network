export const getCurrenUser = (resolved, rejected, parameter1, parameter2, callback) => {
	firebase.auth().onAuthStateChanged( firebaseUser => {
	  if (firebaseUser && firebaseUser.displayName) {
		return resolved(firebaseUser.displayName, parameter1);
	  } else if (firebaseUser) {
		return resolved(firebaseUser.email, parameter1, callback);
	  } else {
		return rejected(parameter2);
	  }
    });
}
export const createPost = (userId, contentText, callback) => {
	firebase.firestore().collection('posts').add({
    user: userId,
    content: contentText,
    likes: 0,
    //state: privacy
})
.then((response) => getAllPosts(callback))
.catch((error) => console.error("Error creando el post: ", error));

} 

export const getAllPosts = (callback) => {
	firebase.firestore().collection('posts').get().then((querySnapshot) => {
    querySnapshot.forEach((post) => {
        return callback(post.data());
    });
});
}


export const updatePost = () => {}
export const deletePost = () => {}