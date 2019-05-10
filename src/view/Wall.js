import { createPost, getCurrenUser, updatePost, deletePost } from '../controller/wall.js';
import {logOut} from "../controller/login.js";
import changeHash from './utils.js';
/*<p> Agrega una breve presentación para que las personas sepan más sobre ti.</p>
	<input type="button" value="Agregar presentación"/>
	<div>
  <input id="post-content-input" type="text" name="post-content" placeholder="Describe quién eres" />
	</div>*/




export const home = (posts) => {
	const user = getCurrenUser();
	const createPostForm = `
	<section id="profile-container" class="profile border-box border">
	<img  src="${user.photoURL}"/>
	<h1> ${user.displayName} </h1>
	<button id="logOut" type="submit">Cerrar Sesión</button>
	</section>
	<div class="posts">
	<section id="create-post-container" class="post-article post-box border"><form>
	  <input id="post-content-input" type="text" name="post-content" placeholder="¿Qué quieres compartir?" />
	  <button id="create-post-btn" type="submit">Compartir</button>
	</form>
	</section>
	<section id="post-list" class="post-article border-box"></section></div>`;
	const createPostContainer = document.createElement('main');
	createPostContainer.classList.add('flex-container', 'border-box', 'main-container');
	createPostContainer.innerHTML = createPostForm;
	// getAllPosts(postListTemplate);
	const buttonLogOut = createPostContainer.querySelector("#logOut")
	buttonLogOut.addEventListener("click", () => {
		logOut()
		.then(() =>{
     changeHash('#/login')
    })
	})
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
	const postDescription =  formElem.querySelector('#post-content-input').value;
	//const privacy = formElem.querySelector('#privacy-choice').value;
	const user = getCurrenUser();
	if (user && postDescription !== '') {
		document.getElementById('post-list').innerHTML = '';
		createPost(user.uid, user.displayName, user.photoURL, postDescription, postListTemplate);
		formElem.querySelector('#post-content-input').value = '';
	}

}

export const postListTemplate = (postObject) => {
	const user = getCurrenUser();
	const postsList = 
				`<div class="post-article post-head border-box">
					<img  src="${postObject.userPhoto}"/>
					<p class="col-11">Publicado por ${postObject.user}</p>
					<p class="col-11"> ${postObject.date}</p>
					${(user.uid === postObject.userId) ? `<img id="btn-delete-${postObject.id}" class="border-box btn-icon btn-icon-post col-1" src="../assets/close.png" alt="eliminar-post" />`: ''}
				</div>
				<div class="post-article clear">
				  <textarea id="post-edit-${postObject.id}" class="border-box post-article post-content" disabled=true >${postObject.content}</textarea>
				</div>
				<div class="post-article">
				  <img id="likes-count" class="border-box btn-icon btn-icon-post" src="../assets/heart.png" alt="${postObject.likes} likes" title="${postObject.likes}" />
				  ${(user.uid === postObject.userId) ? `<img id="btn-edit-${postObject.id}" class="border-box btn-icon btn-icon-post" src="../assets/paper-plane.png" alt="editar-post" />`: ''}
				</div>`;
	const article = document.createElement('article');
	article.setAttribute('id', postObject.id);
	article.classList.add('post-box', 'border');
	article.innerHTML = postsList;
	if (user.uid === postObject.userId) {
	  const deleteBtn = article.querySelector(`#btn-delete-${postObject.id}`);
	  deleteBtn.addEventListener('click', () => {
		deletePost(postObject.id)
	  });
	  const editBtn = article.querySelector(`#btn-edit-${postObject.id}`);
  	  const textArea = article.querySelector(`#post-edit-${postObject.id}`);
  	  editBtn.addEventListener('click', () => {
		return toggleDisableTextarea(textArea, postObject);
	  });
	}
	return article;
}

export const toggleDisableTextarea = (textArea, postObject) => {
	if (textArea.disabled) {
		textArea.disabled = false
	} else {
		textArea.disabled = true; 
		return updatePost(postObject.id, textArea.value)
	}
}
