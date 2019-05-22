
export const updateUser=(user,nameUpdate)=>{
 return user.updateProfile({
    displayName: nameUpdate    
  }).then(function() {
    // Update successful  
  }).catch(function(error) {
    // An error happened.
  });
  
}
// uploadProfileImg = () => {
//     let file =($(`#my_file`))[0].files[0];
// }

