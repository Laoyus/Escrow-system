
    var firebaseConfig = {
      apiKey: "AIzaSyDbuixZHJDTXD1RMP595LxmUsO9xEhtP08",
      authDomain: "escrow-82240.firebaseapp.com",
      projectId: "escrow-82240",
      storageBucket: "escrow-82240.appspot.com",
      messagingSenderId: "824319107104",
      appId: "1:824319107104:web:d999961048d600c6875c45",
       measurementId: "G-YE6X6BFGPH"
    };
    firebase.initializeApp(firebaseConfig);
    var auth = firebase.auth();
 


  // Sign Up function 
  function signUp() { 
    var email = document.getElementById('email').value; 
    var password = document.getElementById('password').value; 
    auth.createUserWithEmailAndPassword(email, password) .then((userCredential) => { 
      var user = userCredential.user; 
      console.log('User signed up:', user); 
    }) .catch((error) => { 
      if (error.code === 'auth/email-already-in-use') { // Provide feedback to the user 
        alert('The email address is already in use. Please sign in instead.'); 
        // You can redirect to the sign-in page or auto-sign in the user 
        signIn(email, password); 
      } 
      else { 
        var errorCode = error.code; 
        var errorMessage = error.message; 
        console.error('Error:', errorCode, errorMessage); 
      } 
    }); 
  }

  function signIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error:', errorCode, errorMessage);
      });
  }

  function signOut() { 
    auth.signOut().then(() => { 
      console.log('User signed out successfully.'); 
      window.location.href = 'index.html'; // Change 'index.html' to your sign-in page 
    }).catch((error) => { 
      console.error('Error signing out:', error); 
    }); 
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('User is signed in:', user);
    } else {
      console.log('No user is signed in');
    }
  });

  // Google Sign-In function 
  function googleSignIn() { 
    var provider = new firebase.auth.GoogleAuthProvider(); 
    auth.signInWithPopup(provider) .then((result) => { 
      var user = result.user; 
      console.log('User signed in with Google:', user); 
    }) .catch((error) => { 
      var errorCode = error.code; 
      var errorMessage = error.message; 
      console.error('Error:', errorCode, errorMessage); 
    }); 
  }


  document.getElementById('signupButton').addEventListener('click', signUp); 
  document.getElementById('signOutButton').addEventListener('click', signOut);
  document.getElementById('googleSignInButton').addEventListener('click', googleSignIn);




