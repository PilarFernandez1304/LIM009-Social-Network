export const getCurrenUser = () => {
	return firebase.auth().currentUser;
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
    const query = (querySnapshot.docs.map((post) => post.data()));
    return query;
})
	.then((query) => callback(query));
}


export const updatePost = () => {}
export const deletePost = () => {}