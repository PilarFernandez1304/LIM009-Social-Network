import { getCurrenUser } from '../controller/wall.js'

export default () => {
    const user = getCurrenUser();
    const profileUser = `
    <div class="container-profile">
        <div class="container-background">
            <img id="img-Logo"/>
        </div>
        <div class="container-user">
            <img src="${user.photoURL}" class="img-user"/>
            <p id="inf-user">${user.displayName}<p>    
        </div>
    </div>`;

    const createProfileUser = document.createElement('div');

    createProfileUser.innerHTML = profileUser;
    return createProfileUser;
}