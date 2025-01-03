
// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbuixZHJDTXD1RMP595LxmUsO9xEhtP08",
  authDomain: "escrow-82240.firebaseapp.com",
  projectId: "escrow-82240",
  storageBucket: "escrow-82240.appspot.com",
  messagingSenderId: "824319107104",
  appId: "1:824319107104:web:d999961048d600c6875c45",
   measurementId: "G-YE6X6BFGPH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();

// Authentication state change listener
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in:', user);
    alert('User is signed in: ' + user.email);
  } else {
    console.log('No user is signed in');
    alert('No user is signed in');
  }
});

// Submit Profile Information function
function submitProfileInfo(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var dob = document.getElementById('dob').value;
  var country = document.getElementById('country').value;

  var user = auth.currentUser;
  if (user) {
    db.collection('users').doc(user.uid).set({
      name: name,
      dob: dob,
      country: country,
      email: user.email
    })
    .then(() => {
      alert('Profile information saved successfully!');
      console.log('Profile information saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving profile information:', error);
      alert('Error saving profile information: ' + error.message);
    });
  } else {
    alert('No user signed in!');
  }
}

// Event listener for Submit button
document.getElementById('infoForm').addEventListener('submit', submitProfileInfo);

function scrollDown() { 
    window.scrollTo({ 
        top: 1000, // Adjust the value to scroll down the desired amount (in pixels) 
        behavior: 'smooth' // This makes the scrolling smooth 
        }); 
    }











