import { logIn } from './view/Login.js';
import { signUp } from './view/Signup.js';

const changeView = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewToShow('#/logIn');
  } else if (hash === '#/signUp' || hash === '#/home') {
    return viewToShow(hash);
  } else {
    return viewToShow('#/logIn');
  }
}

const viewToShow = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case 'signUp':
      root.appendChild(signUp());
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