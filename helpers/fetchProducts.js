 const fetchProducts = async () => {
  try {
    const resposta = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const respostaAPI = await resposta.json();
    return respostaAPI;
  } catch (error) {
    return new Error('You must rovide an url');
  }
 };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
