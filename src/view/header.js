import { getCurrenUser } from '../controller/wall.js'
export default () => {
    //Carga de Header home
    const User =getCurrenUser();
    const header = document.createElement('header');
    header.classList.add('container-head');
    const headerContent= `
          <div class="container-header">	  	         
              <nav class="navbar"> 
                      <a href="#/profile"><strong>${User.displayName}</strong><img class="icon-rout-profile" src="../assets/sort-down.png"/></a>
                      <a  href="#/home"><img src="../assets/logo-ma.png" alt="logo" class="img-header-logo"/></a>
                      <a href="#/signIn" id="btn-signOut"><strong> Cerrar Sesión</strong></a> 
            </nav>                     
          </div>  `;
      header.innerHTML = headerContent;
      return header;
  }