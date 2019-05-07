import { createPost, getAllPosts, getCurrenUser } from '../controller/wall.js';
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
//     const wallAll = createPostContainer.querySelector('#post-list');
//     posts.forEach((post) => {
//     wallAll.appendChild(postListTemplate(post));    
//   });
	return createPostContainer;
}

export const createPostOnClick = (event) => {
	event.preventDefault();
	const formElem = event.target.closest('form')
	const postDescription = formElem.querySelector('#post-content-input').value;
	//const privacy = formElem.querySelector('#privacy-choice').value;
	getCurrenUser(createPost, changeHash, postDescription, '#/logIn', postListTemplate);
}

export const postListTemplate = (postObject, postId) => {
	const postsList = 
				`<article>
					<div>
					  <h3>${postObject.user}</h3>
					</div>
					<div>
					  <textarea id= "post-edit-${postId}" disabled >${postObject.content}</textarea>
					  <img id="btn-edit-${postId}" src="../assets/btn-login-facebook.png" alt=""/>
					</div>
					  <p>${postObject.likes}</p><img id="" src="" alt=""/>
					</div>
				</article>`;
	
	document.getElementById('post-list').innerHTML += postsList;
	const updateOnClick = document.getElementById('post-list');
    updateOnClick.addEventListener('click', (event) => {
	const id= event.target.id;
	const textArea = document.querySelector(`#post-edit-${postId}`);
	textArea.disabled = false;
	console.log(id);

} )

}

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