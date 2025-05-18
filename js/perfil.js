document.getElementById('editProfileBtn').addEventListener('click', () => {
  const currentBio = document.getElementById('bio').textContent;
  const newBio = prompt('Edita tu biografía:', currentBio);
  if (newBio !== null && newBio.trim() !== '') {
    document.getElementById('bio').textContent = newBio.trim();
  }
});
