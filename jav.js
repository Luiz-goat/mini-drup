
let itens = [];

function carregarLocalStorage() {
  const dados = localStorage.getItem("itens");
  if (dados) {
    itens = JSON.parse(dados);
  }
  listarItens();
}

function salvarLocalStorage() {
  localStorage.setItem("itens", JSON.stringify(itens));
}

function listarItens() {
  const lista = document.getElementById("listaItens");
  lista.innerHTML = "";
  itens.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => editarItem(index);

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = () => removerItem(index);

    li.appendChild(btnEditar);
    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

function adicionarItem() {
  const input = document.getElementById("itemInput");
  const valor = input.value.trim();

  if (valor && !itens.includes(valor)) {
    itens.push(valor);
    salvarLocalStorage();
    listarItens();
    input.value = "";
    alert("Item adicionado com sucesso ✅");
  } else {
    alert("Item inválido ou já existente!");
  }
}

function removerItem(index) {
  itens.splice(index, 1);
  salvarLocalStorage();
  listarItens();
}

function editarItem(index) {
  const input = document.getElementById("itemInput");
  input.value = itens[index];
  removerItem(index); // remove e deixa o usuário atualizar
}

// Executa ao carregar a página
window.onload = carregarLocalStorage;
