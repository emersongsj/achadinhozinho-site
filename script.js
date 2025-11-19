// Lista de produtos
const products = [
    {
        code: "001",
        name: "Produto 001",
        image: "https://down-br.img.susercontent.com/file/br-11134258-7r98o-mbpr92sw6g6132",
        link: "https://s.shopee.com.br/qboBzuesC"
    },
];

function loadProducts(filter = "") {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    const filtered = products.filter(p => p.code.startsWith(filter));

    filtered.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("product");

        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Código: ${product.code}</p>
            <a href="${product.link}" target="_blank">Ver produto</a>
        `;

        list.appendChild(item);
    });
}

document.getElementById("searchInput").addEventListener("input", function () {
    loadProducts(this.value);
});

// Carrega tudo ao abrir a página
loadProducts();

