require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  }) 

  it(' Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    const retorno = await fetchProducts('computador')
   const dados = {
      "site_id": "MLB",
      "country_default_time_zone": "GMT-03:00",
      "query": "computador'",
      "paging": {},
      "results": [],
      "sort": {},
      "available_sorts": [],
      "filters": [],
      "available_filters": []
    };
    expect(retorno).toEqual(dados);
  })

  it('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })

   it(' Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const actual = await fetchProducts();
    expect(actual).toThrow(new Error('You must provide an url'));
  }) 
  

 


  

  
 
});
