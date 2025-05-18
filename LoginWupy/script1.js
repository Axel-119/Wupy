const posts = [
  {
    username: "AxelRdz",
    profilePic: "https://i.pravatar.cc/150?img=1",
    text: "¡Hola a todos! Esta es mi primera publicación. 😄",
    image: "https://picsum.photos/500/300?random=1"
  },
  {
    username: "SofiG",
    profilePic: "https://i.pravatar.cc/150?img=2",
    text: "¡Amo los atardeceres! 🌅",
    image: "https://picsum.photos/500/300?random=2"
  },
  {
    username: "CoderMX",
    profilePic: "https://i.pravatar.cc/150?img=3",
    text: "Programando con café ☕",
    image: "https://picsum.photos/500/300?random=3"
  }
];

const feed = document.getElementById("feed");

posts.forEach((post, _index) => {
  const postEl = document.createElement("div");
  postEl.className = "post";

  postEl.innerHTML = `
    <div class="post-header">
      <img src="${post.profilePic}" alt="Perfil de ${post.username}">
      <span class="username">${post.username}</span>
    </div>
    <div class="post-content">
      <p>${post.text}</p>
      <img src="${post.image}" alt="Post de ${post.username}">
    </div>
    <div class="post-actions">
      <button onclick="toggleLike(this)">❤️ Me gusta</button>
      <button>💬 Comentar</button>
    </div>
  `;

  feed.appendChild(postEl);
});

function toggleLike(button) {
  button.classList.toggle("liked");
  button.textContent = button.classList.contains("liked") ? "💖 Te gusta" : "❤️ Me gusta";
}
