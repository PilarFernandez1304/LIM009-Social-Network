export const createPost = (uid, userName,userPhoto, contentText, privacy, postImage = null) => {
  return firebase.firestore().collection('posts').add({
    userId: uid,
    user: userName,
    userPhoto: userPhoto,
    content: contentText,
    likes: 0,
    date: new Date(),
    state: privacy, 
    image: postImage 
  })
} 

export const addCommentPost = (idPost, comment) => {
  return firebase.firestore().collection('posts').doc(idPost).collection('comments').add({
    commentPost: comment
  })
}

export const getAllComentPost = (id, callback) => {
  return firebase.firestore().doc(`posts/${id}`).collection('comments')
    .onSnapshot((querySnapshot) => {
      let data = [];
      querySnapshot.forEach((post) => {
       data.push({id: post.id, ...post.data()})
      });
      callback(data)
    });
   
} 


export const getAllPosts = (callback) => {
    firebase.firestore().collection('posts')
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() })
        });
        callback(data);
      }); 
    }

export const getPublicPosts = (callback) => {
    firebase.firestore().collection('posts').where("state", "==", "public")
    .get()
    .then(function(querySnapshot) {
        let data = [];
        querySnapshot.forEach(function(doc) {
            data.push({ id: doc.id, ...doc.data() })
        });
        callback(data);
    })
}

export const updatePost = (idPost, content, privacy) => { 
    let refPost = firebase.firestore().collection('posts').doc(idPost);
    return refPost.update({
    content: content,
    state: privacy
    });
}


export const deletePost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();

export const uploadImage = (date, image) => {
    const storageRef = firebase.storage().ref();
    const postImageRef = storageRef.child(`images/${date}-${image.name}`);
    const metadata = { contentType: image.type };
    return postImageRef.put(image, metadata)
    .then(snapshot => snapshot.ref.getDownloadURL());
}

export const likePost = (idPost, counter) => {
      return firebase.firestore().collection('posts').doc(idPost).update({
      likes: counter
    });
  }; 

