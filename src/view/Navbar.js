import { getCurrenUser } from '../controller/wall.js'
import { logOut } from "../controller/login.js";
import changeHash from './utils.js';

export const navBar = () => {
    //Carga de Header home
    const user =getCurrenUser();
    const header = document.createElement('header');
    header.classList.add('container-head', 'bg-green');
    const headerContent= `	  	    
        <div class="bg-green mobile-navbar">
          <button id="btn-menu" class="border-box col-3 btn-menu bg-green" type="button"><i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div class="col-9 text-center">
            <img src="../assets/mano.png" alt="logo" class="btn-icon"/>
            <a class="title" href="#/home">Mano Amiga</a>
          </div>
        </div>     
        <nav class="navbar bg-green">
          <a href="#/profile"><strong>${user.displayName}</strong><img class="icon-rout-profile" src="../assets/sort-down.png"/></a>
          <a class="title" href="#/home"><img src="../assets/mano.png" alt="logo" class="btn-icon"/>Mano Amiga</a>
          <a href="#/login" id="btn-logout"><strong>Cerrar Sesión</strong></a> 
        </nav>`;
      header.innerHTML = headerContent;
    const buttonLogOut = header.querySelector("#btn-logout")
    buttonLogOut.addEventListener("click", logoutOnClick);
    return header;
  }

export const logoutOnClick = () => {
  logOut()
    .then((result) =>{
      changeHash('#/login')
    })
}