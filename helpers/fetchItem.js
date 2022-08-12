const fetchItem = async (itemID) => {
  // seu código aqui
  if (!itemID) throw new Error('You must provide an url');
  const promessa = fetch(`https://api.mercadolibre.com/items/${itemID}`)
    .then((api) => api.json());
  return promessa;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
