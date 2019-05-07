import { createPost, getAllPosts, getCurrenUser, deletePost, updatePost } from '../controller/wall.js';
import changeHash from './utils.js';

let contadorPost=0;

// funcion muestrar el home al que es redirigido despues del
export const home = () => {
	contadorPost=0;
	const createPostForm = `<form>
	<input id="post-content-input" type="text" name="post-content" placeholder="¿Qué quieres compartir?" />
	<button id="create-post-btn" type="submit">Compartir</button>
	</form>
	<section id="post-list"></section>`;
	const createPostContainer = document.createElement('div');
	createPostContainer.innerHTML = createPostForm;
	
	getAllPosts(postListTemplate);
	const createPostBtn = createPostContainer.querySelector('#create-post-btn');
	// crea un evenyo al boton del post y se llama a la funcion crearPostOnClick
	createPostBtn.addEventListener('click', createPostOnClick);
	// retorno contenedor del Post
	return createPostContainer;
} 

export const createPostOnClick = (event) => {
	contadorPost=0;
	event.preventDefault();
	document.getElementById('post-list').innerHTML='';
	const formElem = event.target.closest('form')
	console.log(formElem)
	const postDescription = formElem.querySelector('#post-content-input').value;
	//const privacy = formElem.querySelector('#privacy-choice').value;
	const user = getCurrenUser(createPost, changeHash, postDescription, '#/logIn', postListTemplate);
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
					  <textarea>${postObject.content}</textarea>
					</div>
					<div>
						<input id="btn-delete-post${contadorPost}" key=${postId} type="button" value="Borrar">
					</div>
					<div>
						<input id="btn-update-post${contadorPost}" key=${postId} type="button" value="Edit">
					</div>
					<div>
					  <p>${postObject.likes}</p><img class="btn-icon" data-likes="${postId}" src="../assets/heart.png" alt="likes"/>
					  <img id="update-${postId}" class="btn-icon" src="../assets/paper-plane.png" alt="editar-post"/>
					</div>
				</article>`;
	document.getElementById('post-list').innerHTML += postsList;
	contadorPost++;
	
	for(let i=0;i<contadorPost;i++){
		   document.getElementById(`btn-delete-post${i}`).addEventListener("click",function(){
			   let valor = this.getAttribute("key");
			   deletePost(valor);

		   });
			   document.getElementById(`btn-update-post${i}`).addEventListener("click",function(){
			   let valor = this.getAttribute("key");
			   updatePost(valor);
			   })
	   }
	
	   document.querySelector(`#update-${postId}`).addEventListener('click', () => updatePostOnClick(postId));

}

export const updatePostOnClick = (id) => {
   	document.querySelector(`#content-${id}`).removeAttribute('disabled');
}

//	document.getElementById('post-list').innerHTML += postsList;
//	document.querySelector(`#update-${postId}`).addEventListener('click', () => updatePostOnClick(postId));