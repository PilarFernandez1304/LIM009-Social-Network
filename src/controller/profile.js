

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
