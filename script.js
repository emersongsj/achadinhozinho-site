// Exemplo simples de produtos — substitua/adicione conforme precisar
const produtos = [
  {
    codigo: "001",
    nome: "Arvore de Natal",
    imagem: "img/001.jpg", // ajuste para o caminho real da sua imagem
    link: "https://s.shopee.com.br/qboBzuesC"
  },
  {
    codigo: "002",
    nome: "Tênis Leve Confort",
    imagem: "img/002.jpg",
    link: "#"
  },
  {
    codigo: "003",
    nome: "Air Fryer Compacta 4L",
    imagem: "img/003.jpg",
    link: "#"
  },
  {
    codigo: "004",
    nome: "Kit de Panelas",
    imagem: "img/004.jpg",
    link: "#"
  }
  // ... até 2000 itens — mantenha o mesmo formato { codigo, nome, imagem, link }
];

const container = document.getElementById("productContainer");
const input = document.getElementById("searchInput");

function renderLista(lista){
  container.innerHTML = ""; // limpa
  if(!lista.length){
    container.innerHTML = `<div style="text-align:center;padding:28px;color:#666">Nenhum produto encontrado</div>`;
    return;
  }

  // cria cards
  lista.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img class="product-thumb" src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/400x300?text=Sem+imagem'">
      <h3 class="product-name">${p.nome}</h3>
      <div class="product-code">Código: ${p.codigo}</div>
      <a class="product-cta" href="${p.link}" target="_blank" rel="noopener">Ver produto</a>
    `;
    container.appendChild(card);
  });
}

function filtrarPorCodigo(q){
  const term = String(q || "").trim();
  if(!term) return produtos.slice(0, 12); // mostra os primeiros 12 por padrão
  // filtra pelo início do código (conforme digita)
  return produtos.filter(p => p.codigo.startsWith(term));
}

// eventos
input.addEventListener("input", () => {
  const lista = filtrarPorCodigo(input.value);
  renderLista(lista);
});

// inicial
renderLista(filtrarPorCodigo(""));

