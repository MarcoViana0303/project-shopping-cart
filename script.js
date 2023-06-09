/* const { fetchItem } = require("./helpers/fetchItem"); */
/* const { fetchProducts } = require("./helpers/fetchProducts"); */
const itemLista = document.querySelector('.items');
const carrinhoItem = document.querySelector('.cart__items');
const btnLimpar = document.querySelector('.empty-cart');
const armazenamento = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  // coloque seu código aqui
 event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adicionarAoCarrinho = async (itemID) => {
const produto = await fetchItem(itemID);
const { price: salePrice, id: sku, title: name } = produto;
carrinhoItem.appendChild(createCartItemElement({ sku, name, salePrice }));
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const botao = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  botao.addEventListener('click', () => adicionarAoCarrinho(sku));
  section.appendChild(botao);
  
  return section;
};

const adicionarProduto = async () => {
  const paragraph = document.createElement('p');
  paragraph.innerText = 'carregando...';
paragraph.className = 'loading';
document.body.appendChild(paragraph);
  const produto = await fetchProducts('computador');
  paragraph.remove();

  const produtos = produto.results;
  produtos.forEach((elemento) => {
    const { id: sku, title: name, thumbnail: image } = elemento;
    itemLista.appendChild(createProductItemElement({ sku, name, image }));
  });
};

adicionarProduto();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

btnLimpar.addEventListener('click', () => {
  carrinhoItem.innerHTML = '';
});

const addArmazenamentoLocal = (valor) => {
  armazenamento.push(valor);
  saveCartItems('favorite', armazenamento);
};

window.onload = () => { };
