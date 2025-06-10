
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Clique em botão:", btn.textContent);
  });
});
