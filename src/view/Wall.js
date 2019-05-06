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
	getCurrenUser(createPost, changeHash, postDescription, '#/logIn', postListTemplate);
}

export const postListTemplate = (postObject) => {
	const postsList = 
				`<article>
					<div>
					  <h3>${postObject.user}</h3>
					</div>
					<div>
					  <p>${postObject.content}</p>
					</div>
					<div>
					  <p>${postObject.likes}</p><img id="" src="" alt=""/>
					  <img id="" src="" alt=""/>
					</div>
				</article>`;
	document.getElementById('post-list').innerHTML += postsList;
}