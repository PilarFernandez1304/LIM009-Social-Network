<<<<<<< HEAD


export const updateUser=(user,nameUpdate)=>{
    
    console.log(user.uid)
 console.log(user.displayName)
 console.log(user.email)

 return user.updateProfile({
    displayName: nameUpdate    
  }).then(function() {
    // Update successful.

    
  }).catch(function(error) {
    // An error happened.
  });
  
}
=======
// uploadProfileImg = () => {
//     let file =($(`#my_file`))[0].files[0];
// }
>>>>>>> bc916ae9ecf2c798311ddb743cc089c60dbf6ac7
