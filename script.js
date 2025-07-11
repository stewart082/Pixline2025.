function like(el) {
  el.innerText = el.innerText === '❤️' ? '🖤' : '❤️';
}
function comment(el) {
  alert('¡Función de comentarios próximamente!');
}
function viewStory(user) {
  const img = document.getElementById('storyImg');
  img.src = 'https://picsum.photos/400/700?random=' + (user==='valen'?11:user==='leo'?22:user==='mari'?33:user==='sofia'?44:55);
  document.getElementById('storyModal').style.display = 'flex';
}
function closeStory() {
  document.getElementById('storyModal').style.display = 'none';
}
