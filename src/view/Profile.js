

export default ()=>{
const profileUser=`<div>
<div>
<img id="img-Logo" />
</div>
<div>
<img id="img-User-Logeado"/>
<p id="inf-user">holaaaa</p>
</div>
</div>`;

const createProfileUser=document.createElement('div');

createProfileUser.innerHTML=profileUser;
return createProfileUser;    
}