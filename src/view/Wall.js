import { createPost, getAllPosts, getCurrenUser, updatePost, deletePost } from '../controller/wall.js';
import changeHash from './utils.js';

export const home = (posts) => {
	const createPostForm = `<form>
	<input id="post-content-input" type="text" name="post-content" placeholder="¿Qué quieres compartir?" />
	<button id="create-post-btn" type="submit">Compartir</button>
	</form>
	<section id="post-list"></section>`;
	const createPostContainer = document.createElement('div');
	createPostContainer.innerHTML = createPostForm;
	getAllPosts(postListTemplate);
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
		createPost(user.uid, user.email, postDescription, postListTemplate);
		formElem.querySelector('#post-content-input').value = '';
	}
}

export const postListTemplate = (postObject) => {
	const user = getCurrenUser();
	const postsList = 
				`<article id ="${postObject.id}">
					<div>
					  <h3>Publicado por ${postObject.user}</h3>
					  ${(user.uid === postObject.userId) ? `<img id="btn-delete-${postObject.id}" class="btn-icon" src="../assets/close.png" alt="eliminar-post"/>`: ''}
					</div>
					<div>
					  <textarea id= "post-edit-${postObject.id}" disabled >${postObject.content}</textarea>
					</div>
					  <p>${postObject.likes}</p><img id="" src="" alt=""/>
					  ${(user.uid === postObject.userId) ? `<img id="btn-edit-${postObject.id}" class="btn-icon" src="../assets/paper-plane.png" alt="editar-post"/>`: ''}
					</div>
				</article>`;
	const div = document.createElement('div');
	div.innerHTML = postsList;
	if (user.uid === postObject.userId) {
	  const deleteBtn = div.querySelector(`#btn-delete-${postObject.id}`);
	  deleteBtn.addEventListener('click', () => {
		deletePost(postObject.id)
	  });
	  const editBtn = div.querySelector(`#btn-edit-${postObject.id}`);
  	  const textArea = div.querySelector(`#post-edit-${postObject.id}`);
  	  editBtn.addEventListener('click', () => {
		return toggleDisableTextarea(textArea, postObject);
	  });
	}
	return div;
}

export const toggleDisableTextarea = (textArea, postObject) => {
	if (textArea.disabled) {
		textArea.disabled = false
	} else {
		textArea.disabled = true; 
		return updatePost(postObject.id, textArea.value)
	}
}

/*
export const postListTemplate = (postObject, userUid) => {
	for (let i = postObject.length - 1; i >= 0; i--) {
	  const postsList = 
				`<article id ="">
					<div>
					  <h3>Publicado por ${postObject[i].user}</h3>
					</div>
					<div>
					  <textarea id="content-" disabled=true>${postObject[i].content}</textarea>
					</div>
					<div>
					${(userUid === postObject[i].userId) ? `<img id="update-" class="btn-icon" src="../assets/paper-plane.png" alt="editar-post"/>`: ''}
					</div>
				</article>`;
	  document.getElementById('post-list').innerHTML += postsList;
    }
}
*/