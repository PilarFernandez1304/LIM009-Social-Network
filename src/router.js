
import templeteLogIn from './view/login.js';
import templeteSignUp from './view/register.js';
const changeView = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewToShow('#/login');
  } else if (hash === '#/signup' || hash === '#/home') {
    return viewToShow(hash);
  } else {
    return viewToShow('#/login');
  }
}

const viewToShow = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case 'signup':
      root.appendChild(templeteSignUp());
      break;
    case 'login':
      root.appendChild(templeteLogIn());
      break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeView(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash)
}