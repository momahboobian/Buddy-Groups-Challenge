let loginForm = document.getElementById("signInForm");

loginForm.addEventListener("signIn", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});

const signInCSS = document.querySelector("#signInForm");
signInCSS.style.display = "flex";
signInCSS.style.flexDirection = "column";
signInCSS.style.gap = "2em";
signInCSS.style.padding = "20px";
signInCSS.style.width = "20em";

const formSignInButton = document.querySelector("#signInBtn");
formSignInButton.style.border = "2px solid #30a8ff";
formSignInButton.style.borderRadius = "4em";
formSignInButton.style.width = "8em";
formSignInButton.style.height = "2.5em";
formSignInButton.style.color = "#e2e1e7";

const formSignLink = document.getElementsByClassName("sign-link");
formSignLink.style.color = "#9a9a9eba";
