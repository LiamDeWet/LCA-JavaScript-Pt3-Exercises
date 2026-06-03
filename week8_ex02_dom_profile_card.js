const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");
const profileImage = document.getElementById("profileImage");
const profileCard = document.getElementById("profileCard");
const profileBio = document.getElementById("profileBio");

const profileNameBtn = document.getElementById("profileNameBtn");
const profileRoleBtn = document.getElementById("profileRoleBtn");
const profileStatusBtn = document.getElementById("profileStatusBtn");
const profileImageBtn = document.getElementById("profileImageBtn");
const updateBioBtn = document.getElementById("updateBioBtn");

//update name
updateNameBtn.addEventListener("click", () => {
  const newName = prompt("Enter a new name: ");

  if (newName) {
    profileName.textContent = newName;
  }
});

//update role
updateRoleBtn.addEventListener("click", () => {
  const newRole = prompt("Enter a new role: ");

  if (newRole) {
    profileRole.textContent = newRole;
  }
});

//update Bio
updateBioBtn.addEventListener("click", () => {
  const newBio = prompt("Enter your new Bio: ");

  if (newBio) {
    profileBio.textContent = newBio;
  }
});

//toggle Active Status
toggleStatusBtn.addEventListener("click", () => {
  profileCard.classList.toggle("active-status");
});

//change profile image

changeImageBtn.addEventListener("click", () => {
  const imageUrl = prompt("Enter a new image url: ");

  if (imageUrl) {
    profileImage.src = imageUrl;
  }
});
