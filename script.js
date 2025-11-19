<script>
// Exemplo inicial de produtos
const produtos = [
{ codigo: "101", nome: "Produto Exemplo 1", imagem: "https://via.placeholder.com/200", link: "#" },
{ codigo: "102", nome: "Produto Exemplo 2", imagem: "https://via.placeholder.com/200", link: "#" },
{ codigo: "103", nome: "Produto Exemplo 3", imagem: "https://via.placeholder.com/200", link: "#" }
];


const lista = document.getElementById("product-list");
const busca = document.getElementById("search");


function render(listaProdutos) {
lista.innerHTML = "";
listaProdutos.forEach(p => {
lista.innerHTML += `
<div class="product">
<img src="${p.imagem}" alt="${p.nome}">
<p>${p.nome}</p>
<a href="${p.link}" target="_blank">Ver produto</a>
</div>
`;
});
}


render(produtos);


busca.addEventListener("input", () => {
const texto = busca.value.trim();
const filtrados = produtos.filter(p => p.codigo.startsWith(texto));
render(filtrados);
});
</script>
