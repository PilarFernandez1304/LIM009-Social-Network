import {createLog} from '../lib/index.js';

const signInBtn=document.getElementById('sign-in-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
// Registro de Nuevo Usuario

signInBtn.addEventListener('click', e => {
	const email = emailInput.value;
	const password = passwordInput.value;
	// toDo: escribir funcion que valide el email y el password
	createLog(email,password);
});