const produtos = [
    {
        codigo: "001",
        nome: "Produto 001",
        link: "https://s.shopee.com.br/qboBzuesC",
        imagem: "img/001.jpg" // coloque sua imagem aqui
    }
];

const input = document.getElementById("searchInput");
const container = document.getElementById("productContainer");

function mostrarProduto(produto) {
    container.innerHTML = `
        <div class="card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>Código: ${produto.codigo}</p>
            <a href="${produto.link}" target="_blank">Ver produto</a>
        </div>
    `;
}

input.addEventListener("input", () => {
    const codigo = input.value.trim();

    const produtoEncontrado = produtos.find(p => p.codigo.startsWith(codigo));

    if (produtoEncontrado) {
        mostrarProduto(produtoEncontrado);
    } else {
        container.innerHTML = "";
    }
});
