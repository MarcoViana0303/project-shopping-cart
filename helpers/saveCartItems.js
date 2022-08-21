const saveCartItems = (key, item) => {
  // seu código aqui
  localStorage.setItem(key, item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
