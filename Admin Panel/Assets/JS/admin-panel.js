// Check if a user is logged in
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in, show the content
      document.getElementById("login-container").style.display = "none";
      document.getElementById("content").style.display = "block";
    } else {
      // No user is signed in, show the login form
      document.getElementById("login-container").style.display = "block";
      document.getElementById("content").style.display = "none";
    }
  });
  
  // Login function
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful, do something (e.g., redirect to the admin panel)
        console.log("Login successful!");
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        console.log("Login error:", error);
      });
  }
  
  // Logout function
  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Logout successful, do something (e.g., redirect to the login page)
        console.log("Logout successful!");
      })
      .catch((error) => {
        // Handle logout error (e.g., display an error message)
        console.log("Logout error:", error);
      });
  }
  