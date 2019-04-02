firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "" + email_id;
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        // Email sent.
        window.alert("Please check inbox : " + user.email);
      }).catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
      })

    }
  } else {
    // No user is signed in.
	  
    
  }
});


function forgetPass(){
  var auth = firebase.auth();
  var emailAddress = document.getElementById("forget_email").value;

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    window.alert("Please check Email inbox and reset password : " + emailAddress);
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
	  .then(function(user){
	  window.location = 'homepage.html';
  })
	  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });

}
function register(){
  var regEmail = document.getElementById("reg_email").value;
  var regPass = document.getElementById("reg_pass").value;
  firebase.auth().createUserWithEmailAndPassword(regEmail, regPass)
	  .then(function(user){
	  window.location = 'homepage.html';
  })
	  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : " + errorMessage);
  });


}

function logout(){
  firebase.auth().signOut().then(function(){
	  window.location = 'login.htm';
  });
}
