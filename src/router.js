import { logIn } from './view/Login.js';
import { signUp } from './view/Signup.js';
import { home } from './view/Wall.js';
import { navBar } from './view/Navbar.js'
import profile from './view/Profile.js'
import { getAllPosts, getPublicPosts } from './controller/wall.js';
import { getCurrenUser, signInAnonimous } from './controller/login.js';

const changeView = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewToShow('#/logIn');
  } else if (hash === '#/signUp' || hash === '#/home' || hash === '#/profile') {
    return viewToShow(hash);
  } else {
    return viewToShow('#/logIn');
  }
}

// funcion cambio de vistas para mostrar
const viewToShow = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case 'signUp':
      root.appendChild(signUp());
      break;
    case 'home': 
    let user = getCurrenUser();  
    if (user) {   
      getAllPosts((posts) => {
        root.innerHTML = '';
        root.appendChild(navBar());
        root.appendChild(home(posts));
      })
    } else {
      signInAnonimous();
      getPublicPosts((posts) => {
        root.innerHTML = '';
        root.appendChild(navBar());
        root.appendChild(home(posts));
      })
    }
      break;
    case 'profile':
      root.appendChild(navBar());
      root.appendChild(profile());
      break;
    default:
      root.appendChild(logIn());
      break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeView(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash)
}