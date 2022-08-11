const fetchProducts = (pc) => {
  // seu código aqui
  pc = 'computador';
 return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${pc}`)
 .then((respostaAPI) => respostaAPI.json())
 .catch((erro) => erro);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
