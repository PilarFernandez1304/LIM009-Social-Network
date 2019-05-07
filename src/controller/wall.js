

export const createPost = (userId, contentText, callback) => {
	firebase.firestore().collection('posts').add({
    user: userId,
    content: contentText,
    likes: 0,
    //state: privacy
})
.then((response) => getAllPosts(callback))
.catch((error) => 
console.error("Error creando el post: ",error));

}

export const getCurrenUser = (createPost, changeHash, postDescription, parameter2, postListTemplate) => {
	firebase.auth().onAuthStateChanged( firebaseUser => {
	  if (firebaseUser && firebaseUser.displayName) {
		return createPost(firebaseUser.displayName, postDescription,postListTemplate);
	  } else if (firebaseUser) {
		return createPost(firebaseUser.email, postDescription, postListTemplate);
	  } else {
		return changeHash(parameter2);
	  }
    });
}

export const getAllPosts = (callback) => {
	firebase.firestore().collection('posts').get()
	.then((querySnapshot) => {
    querySnapshot.forEach((post) => {
      return callback(post.data(),post.id)
    });
});

}


export const updatePost = () => {

}
export const deletePost = (id) => {
firebase.firestore().collection('posts').doc(id).delete()
.then(function() {
		console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}