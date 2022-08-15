 const fetchProducts = async () => {
  try {
    const resposta = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const respostaAPI = await resposta.json();
    return respostaAPI;
  } catch (error) {
     return error;
  }
 };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
