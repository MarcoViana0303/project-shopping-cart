const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('saveCartItems com o argumento <ol><li>Item</li></ol>, localStorage.setItem é chamado', ()=> {
      saveCartItems('<ol><li>Item</li></ol>');
    expect (localStorage.setItem).toBeCalled()
  })

  it('saveCartItems com o argumento <ol><li>Item</li></ol>, localStorage.setItem é chamado com dois parâmetros: cartItems e o valor passado como argumento para saveCartItems', ()=> {
     saveCartItems('<ol><li>Item</li></ol>');
    expect (localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>')
  })
});
