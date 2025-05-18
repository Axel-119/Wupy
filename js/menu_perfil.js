const profileMenu = document.querySelector(".profile-menu");
const profileAvatar = document.getElementById("profile-avatar");

// Alternar el menú al hacer clic en el avatar
profileAvatar.addEventListener("click", function (e) {
  e.stopPropagation(); // Evita que el clic se propague al documento
  profileMenu.classList.toggle("active");
});

// Ocultar el menú si se da clic fuera de él
document.addEventListener("click", function (e) {
  if (!profileMenu.contains(e.target)) {
    profileMenu.classList.remove("active");
  }
});
