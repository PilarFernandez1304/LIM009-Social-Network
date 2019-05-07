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

export const postListTemplate = (postObject) => {
	for (let i = postObject.length - 1; i >= 0; i--) {
	  const postsList = 
				`<article id ="${postObject[i][1]}">
					<div>
					  <h3>Publicado por ${postObject[i][0].user}</h3>
					</div>
					<div>
					  <textarea id="content-${postObject[i][1]}" disabled=true>${postObject[i][0].content}</textarea>
					</div>
					<div>
					  <p>${postObject[i][0].likes}</p><img class="btn-icon" data-likes="${postObject[i][1]}" src="../assets/heart.png" alt="likes"/>
					  <img id="update-${postObject[i][1]}" class="btn-icon" src="../assets/paper-plane.png" alt="editar-post"/>
					</div>
				</article>`;
	  document.getElementById('post-list').innerHTML += postsList;
    }
}

export const updatePostOnClick = (id) => {
   	document.querySelector(`#content-${id}`).removeAttribute('disabled');
}

//	document.getElementById('post-list').innerHTML += postsList;
//	document.querySelector(`#update-${postId}`).addEventListener('click', () => updatePostOnClick(postId));
