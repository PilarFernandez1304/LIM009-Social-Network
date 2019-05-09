
export default () => {
    //Carga de Header home
    const header = document.createElement('header');
    const headerContent= `
          <div class="container-header">
              <div ">
                  <label ><i></i></label> 
                  <img src="../assets/logo-ma.png" heigth="35px" alt="logo" />  
              </div>	 
              <input type="checkbox" class = "display-none" id="toggle">  	         
              <nav class="navbar"> 
                  <ul class="main-nav">
                      <li><a href="#/home"> Inicio </a></li>
                      <li><a href="#/profile"> Mi Perfil</a></li>
                      <li><a href="#/signIn" id="btn-signOut"> Cerrar Sesión </a></li> 
                  </ul>
              </nav>                      
          </div>  `;
      header.innerHTML = headerContent;
      
      return header;
  }