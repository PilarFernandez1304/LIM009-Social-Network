import { getCurrenUser } from '../controller/wall.js'

export default () => {
    const User=getCurrenUser();
    const profileUser = `
    <div class="container-profile">
        <div class="container-background">
            <img id="img-Logo"/>
        </div>
        <div class="container-user">
            <img src="${User.photoURL}" class="img-user"/>
            <p id="inf-user">${User.displayName}<p>    
        </div>
    </div>`;

    const createProfileUser = document.createElement('div');

    createProfileUser.innerHTML = profileUser;
    return createProfileUser;
}