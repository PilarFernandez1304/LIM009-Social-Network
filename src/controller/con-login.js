import { singIn, authFacebook,authGmail} from "../lib/index.js";

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


export const SubmitOnSingIn=()=>{
    const email = emailInput.value;
    const password = passwordInput.value;
    
    singIn(email,password);
}

export const SubmitOnauthFacebook=()=>{
    authFacebook();

};
export const SubmitOnauthGmail=()=>{
    authGmail();

}