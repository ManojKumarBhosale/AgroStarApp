export default function fetchProducts () {
    return fetch('http://www.mocky.io/v2/5b3de5ed310000db1f6de257')
      .then(response => response.json())
      .then(response => {
          return Promise.resolve(response.responseData);
      });
  }
  