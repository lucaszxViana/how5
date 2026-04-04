const listaProdutos = [
    { nome: "Amaciante", preco: "15,90", img: "amaciante.webp" },
    { nome: "Amendoim", preco: "5,50", img: "amendoin.webp" },
    { nome: "Arroz 5kg", preco: "28,90", img: "arroz.webp" },
    { nome: "Cerveja Lata", preco: "4,50", img: "cerveja.webp" },
    { nome: "Detergente", preco: "2,20", img: "detergente.jpg" },
    { nome: "Frango (kg)", preco: "18,90", img: "frango.webp" },
    { nome: "Lava Roupas", preco: "12,40", img: "lava_roupas.jpg" },
    { nome: "Óleo de Soja", preco: "7,30", img: "oleo.webp" }
];

// Função para gerar os cards de produtos na vitrine
function popularVitrine() {
    const vitrine = document.getElementById('vitrine');
    
    vitrine.innerHTML = listaProdutos.map(prod => `
        <div class="product-card">
            <img src="${prod.img}" alt="${prod.nome}">
            <div class="price-box">R$ ${prod.preco}</div>
            <a href="#" class="buy-link">Adicionar ao carrinho</a>
        </div>
    `).join('');
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', popularVitrine);