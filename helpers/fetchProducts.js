/*
Outra forma de fazer:
 const fetchProducts = () => 
  // seu código aqui
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
 .then((respostaAPI) => respostaAPI.json())
 .catch((erro) => erro);
 */
  
 const fetchProducts = async () => 
 {
  try {
    const resposta = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const exemplo1= await resposta.json();
    return exemplo1;
  } catch (error) {
    return new Error('You must rovide an url')
  }
 
 }


if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
