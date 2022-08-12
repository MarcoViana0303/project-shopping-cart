const fetchProducts = () => 
  // seu código aqui
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
 .then((respostaAPI) => respostaAPI.json())
 .catch((erro) => erro);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
