import { createPost, getCurrenUser, updatePost, deletePost } from '../controller/wall.js';
import {logOut} from "../controller/login.js";
import changeHash from './utils.js';


export const home = (posts) => {
	const user = getCurrenUser();
	console.log(user);
	const createPostForm = `
	<section id="profile-container" class="profile border-box border">
	${user.photoURL === null ? `<img  src="../assets/perfil-email.jpg"/>` : `<img  src="${user.photoURL}"/>`}
    ${user.displayName === null ? `<h1> Aca debe ir el nombre dgit branche la variable del input del SignUp  name-email </h1>` :  `<h1> ${user.displayName} </h1>`}
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
		.then((result) =>{
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
	const date = (postObject.date.toDate()).toString();
  const newDate = date.substr(4, date.length - 37);
	const postsList = 
				`<div class="post-article post-head border-box">
				    ${postObject.userPhoto === null ? `<img class = "round-image" src="../assets/perfil-email.jpg"/>` : `<img class = "round-image" src="${postObject.userPhoto}"/>`}
					<p class="col-11">Publicado por ${postObject.user}</p>
					<p class="col-11"> ${newDate}</p>
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
