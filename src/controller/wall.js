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

export const addCommentPost = (uid, idPost, comment,userName,userPhoto) => {
  return firebase.firestore().collection('posts').doc(idPost).collection('comments').add({
    authorId: uid,
    description: comment,
    author:userName,
    authorPhoto: userPhoto,
    date: new Date(),
    likes:0
  })
}

export const getAllComentPost = (id, callback) => {
  return firebase.firestore().doc(`posts/${id}`).collection('comments')
    .orderBy('date', 'desc')
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

export const likePostComments = (idPost, idComments, counter) => {
    return firebase.firestore().collection('posts').doc(idPost).collection('comments').doc(idComments).update({
    likes: counter
  });
}; 

export const CreateUsers = (email,uid,userName,userPhoto)=>{
  return firebase.firestore().collection('users').add({
    userId:uid,
    userName:userName,
    email:email,
    userPhoto:userPhoto,
    userOccupation: null 
    })
}


/*
export const getUser =()=>{
  return firebase.firestore().doc('Id').get()
  .then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

  })   

  } 

  */



export const searchEmailUser= (email,uid,name,photo) =>{
  return firebase.firestore().collection("users").get().then(function(querySnapshot) {
    let aux=false;

    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.data());
        if(doc.data().email==email){
          aux=true;
        
        }  
    });

    if(!aux){
      CreateUsers(email,uid,name,photo)

    }

  });
  }