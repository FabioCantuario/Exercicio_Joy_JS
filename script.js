// Método simples: Adicionar título e produto diretamente
document.getElementById('titulo').textContent = 'Bem-vindo à Loja!';

// Método complexo: Criar e adicionar um produto com mais detalhes
const produto = document.getElementById('produto');

// Criar e configurar os elementos do produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto Exemplo';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Esta é uma descrição detalhada do produto exemplo.';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,99';

// Criar uma imagem para o produto (opcional)
const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150'; // URL da imagem (exemplo)
imagemProduto.alt = 'Imagem do produto';
imagemProduto.style.width = '150px';

// Adicionar todos os elementos ao contêiner do produto
produto.appendChild(imagemProduto);
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
