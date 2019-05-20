import { getCurrenUser } from '../controller/login.js'
import {updateUser} from '../controller/profile.js'

export default() => {
    const user = getCurrenUser();
    const profileUser = `
    <div class="container-profile ">
    <h2>Actualiza tu Perfil</h2>
        <div class="container-Update">
            <img src="${user.photoURL}" class="img-user"/>
            <p>Nombre Usuario</p>
            <input id="update-userName" value="${user.displayName}"></input> 
            </p><p>correo</p>
            <p>${user.email}</p>
        <input id="buttonSave" type="button" value="Guardar">
    </div>`;

    const createProfileUser = document.createElement('div');

    createProfileUser.innerHTML = profileUser;
    const buttonSave=createProfileUser.querySelector('#buttonSave');
    buttonSave.addEventListener('click',()=>{
        const nameUpdate=createProfileUser.querySelector('#update-userName').value
        updateUser(getCurrenUser(),nameUpdate)
    
    })

    return createProfileUser;
}