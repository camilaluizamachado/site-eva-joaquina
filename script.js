
<<<<<<< HEAD
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Clique em botão:", btn.textContent);
  });
});
=======
let carrinho = [];
function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}
function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    total += item.preco;
    const li = document.createElement("li");
    li.textContent = item.nome + " - R$" + item.preco.toFixed(2);
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}
function finalizarPedido() {
  let mensagem = "Olá! Quero fazer um pedido:%0A";
  carrinho.forEach(item => {
    mensagem += "- " + item.nome + " - R$" + item.preco.toFixed(2) + "%0A";
  });
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
  mensagem += "%0ATotal: R$" + total.toFixed(2);
  window.open("https://wa.me/5598992074088?text=" + mensagem, "_blank");
}
>>>>>>> 063a25a36e07ba2b5e8208ff7e04674673d83a3d
