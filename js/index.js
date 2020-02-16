// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDubxluYG51uzdyx7XI7PLI2h0_QitNyHs",
    authDomain: "recipieblog-b8d03.firebaseapp.com",
    databaseURL: "https://recipieblog-b8d03.firebaseio.com",
    projectId: "recipieblog-b8d03",
    storageBucket: "recipieblog-b8d03.appspot.com",
    messagingSenderId: "695262055173",
    appId: "1:695262055173:web:1721667b0556325f03c56c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
  {
      var email=$("#email").val();
      var password=$("#password").val();
      
      if(email !="" && password !="")
      {
          var result=firebase.auth().signInWithEmailAndPassword(email, password);

          result.catch(function(error)
          {
              var errorCode = error.code;
              var errorMessage =  error.message;
              window.alert("Message:"+ errorMessage);
          });
      }
      else
      {
        window.alert("form is incomplete.please fill out all the feilds.");
      }
  });

  $("#btn-logout").click(function()
  {
      firebase.auth().signOut();
  });

  $("#btn-signup").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();
      var Cpassword = $("#confirmPassword").val();
      if(email != "" && password != "" && Cpassword != "")
      {
         if(password==Cpassword)
         {
            var result=firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage =  error.message;
                window.alert("Message: " + errorMessage);
            });
         }
         else
         {
            window.alert("password does not match.");
         }  
      }
      else
      {
        window.alert("form is incomplete.please fill out all the feilds.");
      }
  }); 
  