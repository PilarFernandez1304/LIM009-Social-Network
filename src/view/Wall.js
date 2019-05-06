import { createPost, getAllPosts, getCurrenUser } from '../controller/wall.js';
import changeHash from './utils.js';

export const home = () => {
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

export const postListTemplate = (postObject, postId) => {
	const postsList = 
				`<article>
					<div>
					  <h3>Publicado por ${postObject.user}</h3>
					</div>
					<div>
					  <p>${postObject.content}</p>
					</div>
					<div>
					  <p>likes: ${postObject.likes}</p><img data-likes="${postId}" src="" alt="likes"/>
					  <img id="${postId}" src="../assets/paper-plane.png" alt="editar-post"/>
					</div>
				</article>`;
	document.getElementById('post-list').innerHTML += postsList;
}