import config from './lib/index.js';
import { initRouter } from "./router.js";
// disparo del evento load despues de la carga de recursos
window.addEventListener('load', () => {
  firebase.initializeApp(config);
  initRouter();
});
//  storage;
/*
logOutBtn.addEventListener('click', e => {
	firebase.auth().signOut();
});
firebase.auth().onAuthStateChanged( firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
	} else {
		console.log('no logueado');
	}
});
*/
// export const viewFeed = () => {
//     const content = document.getElementById('content');
//     const feedPage = `
//         <div id="feed-container">
//             <div class="topnav" id="myTopnav">
//                 <a href="#home" class="active">Home</a>
//                 <a href="#news">News</a>
//                 <a href="#contact">Contact</a>
//                 <a href="#" id="exit">Cerrar sesión</a>
//                 <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//                     <i class="fa fa-bars"></i>
//                 </a>
//             </div>
//             <div class="feed-container">
//                 <div class="feed-profile">
//                     <figure class="circular-landscape">
//                         <img src="${user.photoURL}" alt="Imagen de perfil." class="profile-img">
//                     </figure>
//                     <small class="profile-name">${user.displayName}</small>
//                 </div>
//                 <div class="feed-comment">
//                     <input type="text" class="input-comment" size="50" placeholder="¿Qué quieres compartir?">
//                     <button class="d-block btn-share-feed">Compartir</button>
//                 </div>
//             </div>
//         </div>
//         <script>
//             function myFunction() {
//                 var x = document.getElementById("myTopnav");
//                 if (x.className === "topnav") {
//                 x.className += " responsive";
//                 } else {
//                 x.className = "topnav";
//                 }
//             }
//         </script>`;
//         content.innerHTML = feedPage;
// }; 