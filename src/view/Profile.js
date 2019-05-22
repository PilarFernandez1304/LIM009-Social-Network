import { getCurrenUser } from '../controller/login.js'
import { updateUser } from '../controller/profile.js';
import changeHash from './utils.js'
import { getUser } from '../controller/wall.js';

export default() => {
    const user =getUser();
    const profileUser = `
    <div class="container-profile container-Update">
    <h2>Actualiza tu Perfil</h2>
        <div class="container-Update profile-border">
        ${user.photoURL === null ? `<img class="img-user" src="../assets/perfil-email.jpg"/>` : `<img class="img-user" src="${user.photoURL}"/>`}
            <p><strong>Nombre Usuario</strong></p>
            <input id="update-userName" value="${user.displayName}"></input> 
            <p><strong>correo</strong></p>
            <p>${user.email}</p>
            <p><strong>Ocupacion</strong></p>
            <input id="userOcupation" value=""></input>
        <input id="buttonSave"  class="btn-share bg-green color-white" type="button" value="Guardar">
    </div>`;

    const createProfileUser = document.createElement('div');
    createProfileUser.innerHTML = profileUser; 
    
    const Ocupation=createProfileUser.querySelector('#userOcupation').value;
    const buttonSave=createProfileUser.querySelector('#buttonSave');



    buttonSave.addEventListener('click',()=>{
    const nameUpdate=createProfileUser.querySelector('#update-userName').value    
    updateUser(user,nameUpdate).then(()=>changeHash('#/home'))

    })

    return createProfileUser;
}