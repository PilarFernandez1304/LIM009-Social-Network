export const getCurrenUser = (resolved, rejected, parameter1, parameter2) => {
	firebase.auth().onAuthStateChanged( firebaseUser => {
	if (firebaseUser) {
		return resolved(firebaseUser.uid, parameter1);
	} else {
		return rejected(parameter2);
	}
    });
}
export const createPost = (userId, contentText) => {
	firebase.firestore().collection('posts').add({
    user: userId,
    content: contentText,
    likes: 0,
    //state: privacy
})
.then((response) => getAllPosts())
.catch((error) => console.error("Error creando el post: ", error));

} 

export const getAllPosts = () => {
	firebase.firestore().collection('posts').get().then((querySnapshot) => {
    querySnapshot.forEach((post) => {
        console.log(post.data());
    });
});
}


export const updatePost = () => {}
export const deletePost = () => {}