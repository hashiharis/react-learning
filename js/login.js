document.getElementById("login").addEventListener("click", function () {
  const userEmail = document.getElementById("exampleInputEmailLogin2").value;
  const userPassword = document.getElementById(
    "exampleInputPasswordLogin2"
  ).value;

  userAuthentication(userEmail, userPassword);
});

function userAuthentication(email, password) {
  const data = JSON.parse(localStorage.getItem("userData"));

  if (data !== null) {
    let userFound = data.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      window.location.replace(
        `http://127.0.0.1:5500/html/userhome.html?email=${email}`
      );
    } else if (userFound === null) {
      alert("No user data found");
      window.location.replace("http://127.0.0.1:5500/html/signup.html");
    } else {
      alert("Sorry you havn't signed up, please sign up!!!");
      window.location.replace("http://127.0.0.1:5500/html/signup.html");
    }
  } else {
    alert("No user data found");
    window.location.replace("http://127.0.0.1:5500/html/signup.html");
  }
}
