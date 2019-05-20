import { createPost, getAllPosts, getPublicPosts, updatePost, deletePost, uploadImage, likePost, addCommentPost, getAllCommentPost} from '../controller/wall.js';
import { getCurrenUser } from '../controller/login.js';
import changeHash from './utils.js';

let postImage;
export const home = (posts) => {
	let user = getCurrenUser();
	let content;
  if (!user.isAnonymous) {
	content = `
	<section id="profile-container" class="profile border-box">
        <div class="container-background">
			<img class="background-profile" src="../assets/coffe-code.jpg"/>
        </div>
        <div class="container-user">
            ${user.photoURL === null ? `<img class="img-user" src="../assets/perfil-email.jpg"/>` : `<img class="img-user" src="${user.photoURL}"/>`}
            ${user.displayName === null ? `<p id="inf-user"><strong> ${user.email}</strong><p>`:`<p id="inf-user"><strong>${user.displayName}</strong><p>` }  
        </div>
	</section>
	<section class="posts">
	<div id="post-list" class="post-list post-article border-box"></div>
	</section>`;
	
  } else {
  	content = `
  	<a href="#/login" title="link de iniciar sesion">Iniciar Sesión</a>
	<section class="posts post-list">
	<div id="post-list" class="post-article border-box"></div>
	</section>`;
  }
  const contentContainer = document.createElement('main');
	contentContainer.classList.add('flex-container', 'border-box', 'main-container');
	contentContainer.innerHTML = content;
    const wallAll = contentContainer.querySelector('#post-list');
    if (!user.isAnonymous) {wallAll.appendChild(createPostTemplate())};
    posts.forEach((post) => {
      wallAll.appendChild(postListTemplate(post));    
    });

	return contentContainer;
}

export const createPostTemplate = () => {
	const createPostContainer = document.createElement('div');
	createPostContainer.classList.add('post-article', 'post-box', 'border');
	createPostContainer.setAttribute('id', 'create-post-container');
	const createPostForm = `
	<form>
	  <input id="post-content-input" class="block post-input border" type="text" name="post-content" placeholder="¿Qué quieres compartir?" />
	  <div class="btn-post-input">
	  <img id="btn-upload-image" class="block border-box btn-icon-post bg-green" src="../assets/image.png" alt="subir-imagen" title="subir imagen" />
	  <select id="post-privacy-select" class="block select bg-green color-white border-none">
  		<option value="public">Public</option>
  		<option value="private">Private</option>
	  </select>
	  <button id="create-post-btn" type="submit" class="block btn-share bg-green color-white">Compartir</button>
	  </div>
	  <input id="input-file" class="none" type="file" accept="image/*" />
	</form>`;
	createPostContainer.innerHTML = createPostForm;
	postImage = createPostContainer.querySelector('#input-file');
	const uploadImageBtn = createPostContainer.querySelector('#btn-upload-image');
	uploadImageBtn.addEventListener('click', () => {
		postImage.classList.remove('none');
	});    
	const createPostBtn = createPostContainer.querySelector('#create-post-btn');
    createPostBtn.addEventListener('click', createPostOnClick);
	return createPostContainer;
}

export const createPostOnClick = (event) => {
	event.preventDefault();
	const formElem = event.target.closest('form')
	const postDescription = formElem.querySelector('#post-content-input').value;
	const postPrivacy = formElem.querySelector('#post-privacy-select').value;
	const user = getCurrenUser();
	if (user && postDescription !== '') {
		document.getElementById('post-list').innerHTML = '';
		if (postImage.files[0] == undefined) {
		createPost(user.uid, user.displayName || user.email , user.photoURL, postDescription, postPrivacy)
		.then((response) => getAllPosts(postListTemplate));
	    } else {
	    	const date = new Date().toString();
	    	console.log(date);
	    	uploadImage(date, postImage.files[0])
	    	.then((url) => createPost(user.uid, user.displayName, user.photoURL, postDescription, postPrivacy, url))
	    	.then((response) => getAllPosts(postListTemplate));
	    }
		formElem.querySelector('#post-content-input').value = '';
	}

}

export const postListTemplate = (postObject) => {
	const user = getCurrenUser();
	/*const date = (postObject.date.toDate()).toString();
  const newDate = date.substr(4, date.length - 37);*/
	const postsList = 
				`<div class="post-article post-head border-box bg-green">
					<div class="col-2">
					${postObject.userPhoto === null ? `<img class="round-image text-center" src="../assets/perfil-email.jpg"/>` : `<img class="round-image clear" src="${postObject.userPhoto}"/>`}
					</div> 
					${postObject.user === null ? `<p class="col-9">Publicado por ${user.email}</p>`:`<p class="col-9">Publicado por ${postObject.user}</p>` } 
					<div class="col-1">
					${(user.uid === postObject.userId) ? `<img id="btn-delete-${postObject.id}" class="block border-box auto btn-delete bg-green" src="../assets/close.png" alt="eliminar-post" />`: ''}
					</div>
				</div>
				<div class="post-content clear">
				  <textarea id="post-edit-${postObject.id}" class="border-box post-article textarea border-none" disabled=true>${postObject.content}</textarea>
				  ${(postObject.image !== undefined && postObject.image !== null) ? `<img class="image-post" src="${postObject.image}" alt="post-image" title="post image" />` : ``}
				</div>
        		<div class="post-article bg-light-green post-footer border-box">
				  <span class="color-black registry">${postObject.likes}</span>
				  <img id="btnLike-${postObject.id}" class="border-box btn-icon-post bg-green" src="../assets/heart.png" alt="likes" title="likes" />
				  ${(user.uid === postObject.userId) ? `<img id="btn-edit-${postObject.id}" class="border-box btn-icon btn-icon-post bg-green" src="../assets/paper-plane.png" alt="editar-post" />`: ''}
				  ${(user.uid === postObject.userId) ? `<select id="edit-privacy-${postObject.id}" class="select-privacy select bg-green color-white border-none" disabled="true"> 
				  	${(postObject.state === 'public') ? `<option value="public">Public</option><option value="private">Private</option>` : `<option value="private">Private</option><option value="public">Public</option>`}
						</select>` : ``}
					<span id="see-comments-btn-${postObject.id}" class="links color-black">Ver Comentarios</span>
					${(!user.isAnonymous) ? `<button id="comments-${postObject.id}" class="btn-share bg-green color-white" type="button">Comentar</button>` : '' }
				</div>
				<div class="border-box post-article post-comment">
				${(!user.isAnonymous) ? `<input id="comment-input" class="border-box input-comment bg-white border" type="text" placeholder="Escribe tu comentario" />` : '' }
				</div>
				<div id="comment-content-${postObject.id}" class="border-box post-article post-comment">
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
  	  const select = article.querySelector(`#edit-privacy-${postObject.id}`);
  	  editBtn.addEventListener('click', () => {
		return toggleDisableTextarea(textArea, select, postObject, editBtn);
      });
		}
    const btnLike = article.querySelector(`#btnLike-${postObject.id}`);
    btnLike.addEventListener('click', () => {
		const number = postObject.likes;
		return toggleLikes(btnLike, number, postObject);
	});
    
    if (!user.isAnonymous) {
	  const commentsBtn = article.querySelector(`#comments-${postObject.id}`);
	  const comment = article.querySelector('#comment-input');
	  commentsBtn.addEventListener('click', () => {
	  	if (comment.value !== '') {
  	      addCommentPost(postObject.id, comment.value, user.email)
  	      .then(() => comment.value = '');
        }
      });
	}

	const commentContainer = article.querySelector(`#comment-content-${postObject.id}`);
	const seeCommentsBtn = article.querySelector(`#see-comments-btn-${postObject.id}`);
	seeCommentsBtn.addEventListener('click', () => {
		getAllCommentPost(postObject.id, commenTemplate)
		.then((result) => commentContainer.appendChild(result));
	});
	

	return article;
}

export const commenTemplate = (commentObject) => {
  const comment = `<p id="comment-${commentObject.author} class="border-box input-comment bg-white border">${commentObject.description}</p>`;
  return comment;
}

export const toggleDisableTextarea = (textArea, select, postObject, btn) => {
	if (textArea.disabled && select.disabled) {
		btn.src = "../assets/save.png";
		textArea.disabled = false;
		select.disabled = false;
	} else {
		btn.src = "../assets/paper-plane.png";
		textArea.disabled = true;
		select.disabled = true;
		return updatePost(postObject.id, textArea.value, select.value)
	}
}

export const toggleLikes = (btn, number, postObject) =>  {
// crear una subcolecccion de likes donde se almacene el id del usuario que presiono el boton de like
// con la finalidad de consultar esa coleccion y traerse la informacion, de que si el usuario aparece en dicha coleccion
// entonces disminuya el valor o lo aumente, es decir
// lo agregue o lo elimine de la subcoleccion
	if (btn.src.includes('/assets/mano.png')) {
		number = number + 1;
		btn.src = '../assets/heart.png';
		return likePost(postObject.id, number);
	} else {
		number = number - 1;
		btn.src = '../assets/mano.png';
		return likePost(postObject.id, number);
	}
}