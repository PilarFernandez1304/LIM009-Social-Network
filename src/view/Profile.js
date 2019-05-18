import { getCurrenUser } from '../controller/login.js'

export default () => {
    const user = getCurrenUser();
    const profileUser = `
    <div class="container-profile">
        <div class="container-background">
            <img id="img-Logo"/>
        </div>
        <div class="container-user">
        ${user.photoURL === null ? `<img  src="../assets/perfil-email.jpg" class="img-user"/>` : `<img src="${user.photoURL}" class="img-user"/>`}
        ${user.displayName === null ? `<p id="inf-user">${user.email}<p>   `:`<p id="inf-user">${user.displayName}<p>` } 
        </div>
    </div>`;

    const createProfileUser = document.createElement('div');

    createProfileUser.innerHTML = profileUser;
    return createProfileUser;
}