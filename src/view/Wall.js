import { createPost, getAllPosts, getCurrenUser ,updatePost } from '../controller/wall.js';
import changeHash from './utils.js';

export const home = (posts) => {
	const createPostForm = `<form>
	<input id="post-content-input" type="text" name="post-content" placeholder="¿Qué quieres compartir?" />
	<button id="create-post-btn" type="submit">Compartir</button>
	</form>
	<section id="post-list"></section>`;
	const createPostContainer = document.createElement('div');
	createPostContainer.innerHTML = createPostForm;
	// getAllPosts(postListTemplate);
	const createPostBtn = createPostContainer.querySelector('#create-post-btn');
	createPostBtn.addEventListener('click', createPostOnClick);
    const wallAll = createPostContainer.querySelector('#post-list');
    posts.forEach((post) => {
    wallAll.appendChild(postListTemplate(post));    
  });
	return createPostContainer;
}

export const createPostOnClick = (event) => {
	event.preventDefault();
	const formElem = event.target.closest('form')
	const postDescription = formElem.querySelector('#post-content-input').value;
	//const privacy = formElem.querySelector('#privacy-choice').value;
	const user = getCurrenUser();
	if (user) {
		document.getElementById('post-list').innerHTML = '';
		createPost(user.email, postDescription, postListTemplate);
		formElem.querySelector('#post-content-input').value = '';
	}

}

// ${post.uid === uid ? '<button class="btn-post btn-edit" >Editar</button>' : ''}  
// </div>
// <div id="btn-save-${post.id}" hidden> 
// ${post.uid === uid ? '<button class="btn-post btn-edit"   >Guardar</button>' : ''}  
// </div>
// <div id="btn-deleted-${post.id}"> 
// ${post.uid === uid ? '<button class="btn-post btn-edit" >Eliminar</button>' : ''}  
// </div> </div>
// `







export const postListTemplate = (postObject, uid) => {
	const postsList = 
				`<article id ="${postObject.id}">
					<div>
					  <h3>Publicado por ${postObject.user}</h3>
					</div>
					<div>
					  <textarea id= "post-edit-${postObject.id}" disabled >${postObject.content}</textarea>
					<div id="btn-edit-${postObject.id}">
					${postObject.uid === uid ? '<input type=button  value = Editar />' : ''};
					</div>
					</div>
					  <p>${postObject.likes}</p><img id="" src="" alt=""/>
					</div>
				</article>`;
				const div = document.createElement('div');
				div.innerHTML = postsList;
				const editBtn = div.querySelector(`#btn-edit-${postObject.id}`);
  			const textArea = div.querySelector(`#post-edit-${postObject.id}`);
  			editBtn.addEventListener('click', () => {
					textArea.disabled = false;
					editBtn.value = "Guardar";
				  editBtn.addEventListener('click', () =>{
					textArea.disabled = true;
					editBtn.value = "Editar";
					updatePost(postObject.id, textArea.value);
				})
   			//  liElement.querySelector('#save-post-edit').style.display = 'block';
  });
  
				return div;
}

// liElement.querySelector('#save-post-edit').style.display = 'none';
//   const editBtn = liElement.querySelector(`#btn-update-${dataPost.id}`);
//   const textArea = liElement.querySelector(`#post-edit-${dataPost.id}`);
//   editBtn.addEventListener('click', () => {
//     textArea.disabled = false;
//     liElement.querySelector('#save-post-edit').style.display = 'block';
//   });
  
//   const saveEdit = liElement.querySelector('#save-post-edit');
//   saveEdit.addEventListener('click', () => {
//     textArea.disabled = true;
//     updatePostOnClick(dataPost.id, textArea.value);
//     liElement.querySelector('#save-post-edit').style.display = 'none';
//   });
  
//   const deleted = liElement.querySelector(`#btn-delete-${dataPost.id}`);
//   deleted.addEventListener('click', () => {
//     deletePostOnClick(dataPost);
//   });
//   const likesBtn = liElement.querySelector(`#like-btn-${dataPost.id}`);
//   likesBtn.addEventListener('click', () => {
//     updateLikesOnClick(dataPost, dataPost.like += 1);  
//   });
//   const favoriteBtn = liElement.querySelector(`#favorite-btn-${dataPost.id}`);
//   favoriteBtn.addEventListener('click', () => {
//     updateFavoritesOnClick(dataPost, dataPost.favorite += 1);
//   });
//   const logOutBtn = liElement.querySelector('#log-out-btn');
//   logOutBtn.addEventListener('click', logOutOnClick);
//   return liElement;




	// const updateOnClick = document.getElementById('post-list');
  //   updateOnClick.addEventListener('click', (event) => {
	// const id= event.target.id;
	// const textArea = document.querySelector(`#${id}`);
	// textArea.disabled = false;
	// console.log(id)
	// // const btnUpdate = document.getElementById(`btn-edit-${postId}`)
	// // btnUpdate.addEventListener('click', () => {
	// // 	console.log('hola')
	// // })



//  const UpdateOnClick = () => {
// 	const btnUpData = document.querySelector(`btn-edit-${postId}`);
// 	const textArea = document.querySelector(`post-edit-${postId}`);
// 	btnUpData.addEventListener('click', () => {
// 		textArea.disabled = false;
// 	})


// }
// const updateOnClick = document.getElementById('post-list');
// updateOnClick.addEventListener('click', (event) => {
// 	const id= event.target.id;
// 	textArea.disabled = false;

// } )
