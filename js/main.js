//sidebar state
let toggleNavStatus = false;

//login validation
function validateLogin() {
  const username = document.getElementById("uname").value.trim();
  const password = document.getElementById("pwd").value.trim();

  console.log("Username:", username);
  console.log("Password:", password);

  if (username === "admin" && password === "password123") {
    console.log("Login successful");

    window.location.href = "index.html";
  } else {
    console.log("Invalid credentials");

    document.querySelector(".modal").style.display = "block";
  }
}

const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    validateLogin();
  });
}

//dismiss modal
function dismissModal() {
  document.querySelector(".modal").style.display = "none";
}

//toggle sidebar

function toggleNav() {
  const sidebar = document.querySelector(".nav-sidebar");
  const sidebarList = document.querySelector(".nav-sidebar ul");

  if (!sidebar || !sidebarList) return;

  if (toggleNavStatus === false) {
    sidebar.style.width = "250px";
    sidebarList.style.visibility = "visible";
    toggleNavStatus = true;
  } else {
    sidebar.style.width = "50px";
    sidebarList.style.visibility = "hidden";
    toggleNavStatus = false;
  }
}
